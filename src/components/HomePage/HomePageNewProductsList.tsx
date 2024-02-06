import React from 'react'
import HomePageNewProductListItem from './HomePageNewProductListItem'
import { urlFor } from '@/sanity'

interface Props{
  products: any

}

function HomePageNewProductsList({products}:Props) {
  // console.log('Our Products:', products)
  return (
    <ul
    className=' flex space-x-4 overflow-x-auto '
    >
      {
        products && products.length > 0 
        ?
        products.map((product:any) =>
        <HomePageNewProductListItem
        key={product?._id}
      imageUrl={product?.mainImage ? urlFor(product?.mainImage).url()! : `/Images/hado.jpg`}
      name={product?.name}
      description={product?.category?.name}
      price={product?.price}
      />
        )
        :
        <span>
          {`No products yet`}
        </span>
      }
      
      
    </ul>
  )
}

export default HomePageNewProductsList
