import React from 'react'
import Layout from '../components/Layouts/Layout'

interface Props{
  variant: any
}

function VariantView({variant}: any) {
  return (
    <Layout>
      <p>Salut je suis le variant {variant.name}</p>
    </Layout>
  )
}

export default VariantView
