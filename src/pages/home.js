import * as React from "react"
import { Link } from "gatsby"

import Layout from "@/components/layout"
import Seo from "@/components/seo"
import { Hero } from "@/components/homePage/Hero"
import { Features } from "@/components/homePage/Features"
import { Incentives } from "@/components/homePage/Incentives"
import { Partners } from "@/components/homePage/Partners"
import { Company } from "@/components/homePage/Company"
import { Testimonials } from "@/components/homePage/Testimonials"

import { Newsletter } from "@/components/layout/Newsletter"

const HomePage = () => (
  <Layout>
    
    <Hero />
    <Features />

    <Partners />
    <Company />
    
    <Incentives/>
    <Testimonials />
    <Newsletter />
  </Layout>
)

export const Head = () => <Seo title="JSB Technology" />

export default HomePage
