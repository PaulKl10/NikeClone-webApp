import Head from 'next/head'
import React from 'react'
import Footer from '../Layouts/Footer'
import Loading from '../Layouts/Loading'
import HeaderJordan from './HeaderJordan'
import Image from 'next/image'


function LayoutJordan({children}:any) {
  return (
    <div 
    className={`w-full overflow-x-hidden flex flex-col flex-1 overflow-y-auto min-h-screen bg-white
    font-body
   `}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content={'keywords'} />
        <meta name="description" content={'description'} />
        <meta charSet="utf-8" />
        <title>{'Jordan'}</title>
        <link rel="icon" href="/images/jordan.png" />
      </Head>
        <Loading/>
        <HeaderJordan/>
        <main className='flex flex-col flex-1 w-full overflow-x-hidden backgroundMainJordan relative'>
          <Image
            src={`/images/jordan.png`}
            fill
            alt={'Jordan'}
            className="object-cover object-center absolute opacity-15 inset-0 w-full h-full z-0"
          />
          <div className='z-20'>{children}</div>
        </main>
        <Footer/>
    </div>
  
  )
}

export default LayoutJordan
