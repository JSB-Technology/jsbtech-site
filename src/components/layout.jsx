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

  // - Language Support
  const [showModal, setShowModal] = useState(false);
  const [userLanguage, setUserLanguage] = useState('en');
  // 导入支持的语言
  const supportedLanguages = availableLanguages;
  // 使用 intl 插件
  const intl = useIntl();
  const currentLanguage = intl.locale; // 当前语言代码

  useEffect(() => {
    // 获取 userLanguage  
    const browserLanguage = navigator ? navigator.language.split('-')[0] : 'en';
    // 从 localStorage 获取用户是否选择过语言
    const languageSelected = localStorage.getItem('languageSelected');
    // 如果用户没有选择过语言，且用户语言不是默认语言，且用户语言是支持的语言，且用户语言不是当前语言
    if (languageSelected !== 'true') {
      if (browserLanguage !== defaultLanguage && supportedLanguages.includes(browserLanguage) && browserLanguage !== currentLanguage) {
        // 则弹出语言选择框
        setShowModal(true);
        setUserLanguage(browserLanguage);
      }
    }
  }, [supportedLanguages, currentLanguage]);

  // 处理语言切换
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
