import { urlFor } from '@/sanity'
import Image from 'next/image'
import React from 'react'

interface Props{
  product: any
}

function ProductMainImage({product}:any) {
  return (
    <div
    className='relative w-1/3 h-[500px] rounded-xl overflow-hidden'
    >
      {product &&
                <Image
                src={product?.mainImage ? urlFor(product?.mainImage).url()! : `/Images/hado.jpg`}
                fill
                className='object-cover'
                alt={product?.name}
                />
      }
    </div>
  )
}

export default ProductMainImage
