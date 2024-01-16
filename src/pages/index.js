import * as React from "react"

import Layout from "@/components/layout"
import Seo from "@/components/seo"
import { Hero } from "@/components/homePage/Hero"
import { Features } from "@/components/homePage/Features"
import { Incentives } from "@/components/homePage/Incentives"
import { Partners } from "@/components/homePage/Partners"
import { Company } from "@/components/homePage/Company"
import { Testimonials } from "@/components/homePage/Testimonials"
import { Newsletter } from "@/components/layout/Newsletter"

import { useIntl } from "gatsby-plugin-intl";

const IndexPage = () => {

  // TODO: 补完 intl 配置
  const intl = useIntl();
  const hello = intl.formatMessage({ id: "hello" });

  return <Layout url="">

    <Hero />
    <Features />

    <Partners />
    <Company />

    <Incentives />
    <Testimonials />
    <Newsletter />

  </Layout>

}

export const Head = () => <Seo title="JSB Technology" />

export default IndexPage
