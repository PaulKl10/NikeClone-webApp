import React from 'react'
import ProductMainImage from './ProductMainImage'
import ProductInfo from './ProductInfo'

function ProductTopSection() {
  return (
    <section
    className='flex w-full gap-10 p-14 justify-center'
    >
      <ProductMainImage/>
      <ProductInfo/>
    </section>
  )
}

export default ProductTopSection
