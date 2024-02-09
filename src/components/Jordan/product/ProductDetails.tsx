import { ArrowDownIcon } from '@heroicons/react/16/solid'
import { ShoppingCartIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import React from 'react'

interface Props{
  name: string,
  image: string
}

function ProductDetails({name, image}: Props) {
  return (
    <div className='flex flex-col justify-center items-center mb-32'>
      <div className='w-full p-56 relative'>
          <Image
            src={`/images/${image}`}
            alt={name}
            fill
            className='object-contain'
          />
      </div>
      <div className='w-[50%] h-52 bg-white -mt-32'>
        <div className='flex justify-around py-10 items-end h-full relative'>
            <div className='border border-black/50 rounded-full px-4 py-2 flex flex-around gap-4'>
                <div className='text-xl'>10US</div>
                <ArrowDownIcon className='w-5 text-orange-600 cursor-pointer' />
            </div>
            <div className='flex items-center'>
                <div className='flex flex-col'>
                    <div className='line-through text-xl text-end text-orange-600'>179.00€</div>
                    <div className='text-4xl'>79.00€</div>
                </div>
            </div>
            <div className='bg-gray-800 p-5 absolute -right-10 cursor-pointer'>
                <ShoppingCartIcon className='w-10 text-white'/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails
