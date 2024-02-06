import Head from 'next/head'
import React from 'react'
import Header from './Header'
import { Inter } from 'next/font/google'
import AboutNav from './AboutNav'
import Footer from './Footer'
import Loading from './Loading'


function Layout({children}:any) {
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
        <title>{'Nike'}</title>
        <link rel="icon" href="/Logos/Nike.png" />
      </Head>

<Loading/>

<AboutNav/>
<Header/>

    <main
    className='flex flex-col flex-1 w-full overflow-x-hidden'
    >
      {children}
    </main>
      

<Footer/>

     

    </div>
  
  )
}

export default Layout
