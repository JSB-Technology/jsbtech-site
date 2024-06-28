import * as React from "react"
import Layout from "@/components/layout"
import Seo from "@/components/seo"

import { TechSpec } from "@/components/productPage/TechSpec"
import { Frequent } from "@/components/productPage/Frequent"
import { ExcelTable } from "@/components/spare/ExcelTable"

const ProductPage = () => (
  <Layout url="products">
    
    <TechSpec />
    
    <ExcelTable file="/data/tables/specification.xlsx"/>  
    
    <Frequent />

  </Layout>
)

export const Head = () => <Seo title="Product details" />

export default ProductPage
