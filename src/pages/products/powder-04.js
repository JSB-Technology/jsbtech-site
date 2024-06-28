import * as React from "react"
import Layout from "@/components/layout"
import Seo from "@/components/seo"


import { Frequent } from "@/components/productPage/Frequent"
import { ExcelTable } from "@/components/spare/ExcelTable"

const ProductPage04 = () => (
  <Layout url="products">

    
    <ExcelTable file="/data/tables/specification.xlsx"/>  
    
    <Frequent />

  </Layout>
)

export const Head = () => <Seo title="Product details" />

export default ProductPage04
