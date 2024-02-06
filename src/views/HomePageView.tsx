import Link from 'next/link'
import React from 'react'
import HomePageBanner from '../components/HomePage/HomePageBanner'
import Layout from '../components/Layouts/Layout'
import HomePageNewProductSection from '../components/HomePage/HomePageNewProductSection'

function HomePageView() {
  return (
    <Layout>
      <HomePageBanner/>
      <HomePageNewProductSection/>
    </Layout>
  )
}

export default HomePageView
