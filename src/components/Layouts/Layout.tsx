import Head from 'next/head'
import React from 'react'
import Header from './Header'
import { Inter } from 'next/font/google'
import AboutNav from './AboutNav'
import Footer from './Footer'

const inter = Inter({ subsets: ['latin'] })

function Layout({children}:any) {
  return (
    <div 
    className={`w-screen min-h-screen flex flex-col flex-1 overflow-x-hidden
    ${inter?.className}
   `}>
      <Head>
      
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content={'keywords'} />
        <meta name="description" content={'description'} />
        <meta charSet="utf-8" />
        <title>{'Nike'}</title>
        <link rel="icon" href="/Logos/nike.png" />
      </Head>

{/* <Loading/> */}

<AboutNav/>
<Header/>

    <main
    className='flex flex-col flex-1'
    >
      {children}
    </main>
      

<Footer/>

     

    </div>
  
  )
}

export default Layout
