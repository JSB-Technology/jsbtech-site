/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { Header2 } from "@/components/layout/Header2"

import { Banner } from '@/components/layout/Banner'
import "@/components/layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      {/* <Header2 /> */}
      {/* <Banner /> */}

      <main>{children}</main>

      <Footer />
    </>
  )
}

export default Layout
