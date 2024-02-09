import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline'
import React from 'react'
import ProductName from './product/productName'
import ProductDetails from './product/ProductDetails'

function Carousel() {
  return (
    <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <div className='flex flex-col w-full justify-center'>
            <div className='text-center pt-20 pb-0 text-white text-6xl flex justify-center items-center gap-10 w-full'>
                <a href="#slide3" >
                <ArrowLeftIcon className='w-10 text-white' />
                </a>
                <ProductName name={"Jordan 1 Off White Blue"} />
                <a href="#slide2">
                <ArrowRightIcon className='w-10 text-white' />
                </a>
            </div>
            <ProductDetails name={"Jordan 1 Off White Blue"} image={"Air_Jordan_1.webp"} />
          </div>
        </div> 
        <div id="slide2" className="carousel-item relative w-full">
          <div className='flex flex-col w-full justify-center'>
            <div className='text-center pt-20 pb-0 text-white text-6xl flex justify-center items-center gap-10 w-full'>
                <a href="#slide1">
                <ArrowLeftIcon className='w-10 text-white' />
                </a>
                <ProductName name={"Jordan 1 Off White Red"}/>
                <a href="#slide3">
                <ArrowRightIcon className='w-10 text-white' />
                </a>
            </div>
            <ProductDetails name={"Jordan 1 Off White Red"} image={"Air_Jordan_1_Red.webp"} />
          </div>    
        </div> 
        <div id="slide3" className="carousel-item relative w-full">
          <div className='flex flex-col w-full justify-center'>
            <div className='text-center pt-20 pb-0 text-white text-6xl flex justify-center items-center gap-10 w-full'>
                <a href="#slide2">
                <ArrowLeftIcon className='w-10 text-white' />
                </a>
                <ProductName name={"Jordan 1 Off White White"}/>
                <a href="#slide1">
                <ArrowRightIcon className='w-10 text-white' />
                </a>
            </div>
            <ProductDetails name={"Jordan 1 Off White White"} image={"Air_Jordan_1_White.webp"}/>
          </div>           
        </div> 
      </div>
  )
}

export default Carousel
