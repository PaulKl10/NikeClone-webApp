import React from 'react'
import Layout from '../components/Layouts/Layout'
import Link from 'next/link'

function NotFoundView() {
  return (
    <Layout>
        <div className="w-full h-[60vh] flex flex-col space-y-3 justify-center items-center">
        <div className="font-medium text-3xl">Error 404</div>
        <div className="text-gray-700 font-medium text-2xl">
          This page is not found !
        </div>
        <Link
          href={"http://localhost:3000"}
          className="bg-red-900 text-white p-4"
        >
          Accueil
        </Link>
      </div>
    </Layout>
  )
}

export default NotFoundView
