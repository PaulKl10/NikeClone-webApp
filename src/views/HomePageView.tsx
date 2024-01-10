import Link from 'next/link'
import React from 'react'
import Header from '../components/Layouts/Header'
import AboutNav from '../components/Layouts/AboutNav'
import HomePageBanner from '../components/HomePage/HomePageBanner'
import Layout from '../components/Layouts/Layout'

function HomePageView() {
  return (
    <Layout>
      <HomePageBanner/>
    </Layout>
  )
}

export default HomePageView
