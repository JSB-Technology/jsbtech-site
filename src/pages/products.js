import * as React from "react"
import Layout from "@/components/layout"
import Seo from "@/components/seo"

import { TechSpec } from "@/components/productPage/TechSpec"
import { Frequent } from "@/components/productPage/Frequent"

const ProductPage = () => (
  <Layout url="products">
    
    <TechSpec />
    <Frequent />
  </Layout>
)

export const Head = () => <Seo title="Product details" />

export default ProductPage
