import React from 'react'

interface Props{
    product:any
}

function ProductInfo({product}:any) {
  return (
    <div
        className='flex flex-col py-3 space-y-1'
        >
            <h3
            className='font-medium '
            >
                {product?.name}
            </h3>

            <p
            className='opacity-80 '
            >
                {product?.category?.name}
            </p>

            <p
            className='font-medium pt-1'
            >
                {product?.price} {'€'}
            </p>

            <p
            className='text-sm '
            >
                {product?.description}
            </p>
        </div>
  )
}

export default ProductInfo
