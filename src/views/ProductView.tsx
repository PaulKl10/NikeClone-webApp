import React from 'react'
import Layout from '../components/Layouts/Layout'
import ProductTopSection from '../components/Products/ProductTopSection'

interface Props{
  product: any
}

function ProductView({product}: any) {
  return (
    <Layout>
      <ProductTopSection product={product}/>
    </Layout>
  )
}

export default ProductView
