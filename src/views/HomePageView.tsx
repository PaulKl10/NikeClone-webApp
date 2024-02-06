import Link from 'next/link'
import React from 'react'
import HomePageBanner from '../components/HomePage/HomePageBanner'
import Layout from '../components/Layouts/Layout'
import HomePageNewProductSection from '../components/HomePage/HomePageNewProductSection'

interface Props{
  products: any
  // variants: any
}

function HomePageView({products}:any) {
  return (
    <Layout>
      <HomePageBanner/>
      <HomePageNewProductSection
      products={products}
      />
    </Layout>
  )
}

export default HomePageView
