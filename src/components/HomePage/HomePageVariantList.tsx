import { urlFor } from '@/sanity'
import React from 'react'
import HomePageVariantListItem from './HomePageVariantListItem'

interface Props{
    variants: any
  
  }

function HomePageVariantList({variants}: Props) {
  return (
    <ul
    className=' flex space-x-4 overflow-x-auto '
    >
      {
        variants && variants.length > 0 
        ?
        variants.map((variant:any) =>
        <HomePageVariantListItem
        key={variant?._id}
        imageUrl={variant?.mainImage ? urlFor(variant?.mainImage).url()! : `/Images/hado.jpg`}
        name={variant?.product?.name}
        description={variant?.product?.category?.name}
        price={variant?.product?.price}
        color={variant?.color?.value}
        _id={variant?._id}
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

export default HomePageVariantList
