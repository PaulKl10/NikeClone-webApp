import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/16/solid'
import React from 'react'
import HomePageVariantList from './HomePageVariantList'

interface Props{
    variants: any
  
  }

function HomePageVariantSection({variants}:Props) {
  return (
    <section
    className="w-full flex flex-col space-y-10 items-start px-12 py-14 overflow-hidden"
    >
      <div
      className='w-full flex items-center justify-between'
      >
        <h2
        className='text-2xl font-medium'
        >
          {`Nos variants`}
        </h2>

        <div
        className='flex space-x-3'
        >
          <button
          className='bg-gray-300 hover:bg-gray-400 flex justify-center items-center w-10 h-10 rounded-full'
          >
            <ChevronLeftIcon className='w-full'/>
          </button>

          <button
          className='bg-gray-300 hover:bg-gray-400 flex justify-center items-center w-10 h-10 rounded-full'
          >
            <ChevronRightIcon className='w-full'/>
          </button>
        </div>
      </div>

      <HomePageVariantList
      variants={variants}
      />
    </section>
  )
}

export default HomePageVariantSection
