import Link from 'next/link'
import React from 'react'
import HomePageBanner from '../components/HomePage/HomePageBanner'
import Layout from '../components/Layouts/Layout'
import HomePageNewProductSection from '../components/HomePage/HomePageNewProductSection'
import HomePageVariantSection from '../components/HomePage/HomePageVariantSection'

interface Props{
  products: any
  variants: any
}

function HomePageView({products, variants}:Props) {
  return (
    <Layout>
      <HomePageBanner/>
      <HomePageNewProductSection
      products={products}
      />
      <HomePageVariantSection
      variants={variants}
      />
    </Layout>
  )
}

export default HomePageView
