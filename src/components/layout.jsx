import React, { useEffect, useState } from 'react';
import { useStaticQuery, graphql, navigate } from "gatsby"

import { availableLanguages, defaultLanguage } from '@/utils/languages';
import { useIntl } from "gatsby-plugin-intl";

import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
// import { Banner } from '@/components/layout/Banner'
import { CustomDialog } from '@/components/spare/CustomDialog';

import "@/components/layout.css"
import { GlobeAltIcon } from '@heroicons/react/24/outline'


const Layout = ({ children, url }) => {

  // - Site Title
  // TODO: 正式版本-完善SEO
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  // - Multi-language Dialog
  const [showModal, setShowModal] = useState(false);

  // 导入支持的语言
  const supportedLanguages = availableLanguages;
  // const userLanguage = navigator.language.split('-')[0];

  // 使用 intl 插件
  const intl = useIntl();
  const currentLanguage = intl.locale; // 当前语言代码
  // let languageSelected = localStorage.getItem('languageSelected');

  useEffect(() => {
    let languageSelected = localStorage.getItem('languageSelected');

    if (languageSelected !== 'true') {

      let userLanguage = navigator.language.split('-')[0];
      if (userLanguage !== defaultLanguage && supportedLanguages.includes(userLanguage) && userLanguage !== currentLanguage) {
        setShowModal(true);
      }
    }
  }, [supportedLanguages, currentLanguage]);

  const handleLanguageChange = () => {
    navigate(`/${userLanguage}/` + url);
    setShowModal(false);
  }


  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />

      <main>
        {/* <Banner /> */}

        {showModal && (
          <CustomDialog
            title="Language Support"
            message={"Switch to our translated " + userLanguage.toUpperCase() + " version?"}
            onConfirm={handleLanguageChange}
            Icon={GlobeAltIcon}
            confirmMsg="Yes"
          />
        )}

        {children}

      </main>

      <Footer />
    </>
  )
}

export default Layout
