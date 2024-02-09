import React from 'react'
import LogoJordan from './LogoJordan'
import MainNavJordan from './MainNavJordan'
import { ShoppingBagIcon } from '@heroicons/react/24/outline'

function HeaderJordan() {
  return (
    <header
    className='z-30 w-full flex justify-around items-center px-6 lg:px-44 py-4 h-32 backgroundOrangeNavBar text-white/60'
    >
        <LogoJordan/>
        <MainNavJordan/>   
        <ShoppingBagIcon className='icon-button hover:text-white' /> 
    </header>
  )
}

export default HeaderJordan
