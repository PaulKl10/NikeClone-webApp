import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface Props {
    imageUrl: string
    name: string
    description: string
    price: number
}

function HomePageNewProductListItem({imageUrl = '', name = '', description = '', price = 0}: Props) {
  return (
    <li
    className='w-96'
    >
     <Link
     href={`/products/oneProduct`}
     className='flex flex-col'
     >
        <div
        className='relative w-full h-[430px] bg-black/10'
        >
            {imageUrl && imageUrl.length > 0 ?
                <Image
                src={`/Images/${imageUrl}`}
                fill
                className='object-cover'
                alt=''
                />

                :

                <span>{`Pas d'image`}</span>
                }
        </div>

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
                {description}
            </p>

            <p
            className='font-medium pt-1'
            >
                {price.toFixed(2)} {'€'}
            </p>
        </div>
    </Link> 
    </li>
  )
}

export default HomePageNewProductListItem
