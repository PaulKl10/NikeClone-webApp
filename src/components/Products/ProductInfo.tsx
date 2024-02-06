import React from 'react'

function ProductInfo({name='Jordan 1', category='Chaussures', description='desc', price=199.99}:any) {
  return (
    <div
        className='flex flex-col py-3 space-y-1'
        >
            <h3
            className='font-medium '
            >
                {name}
            </h3>

            <p
            className='opacity-80 '
            >
                {category}
            </p>

            <p
            className='font-medium pt-1'
            >
                {price?.toFixed(2)} {'€'}
            </p>

            <p
            className='text-sm '
            >
                {description}
            </p>
        </div>
  )
}

export default ProductInfo
