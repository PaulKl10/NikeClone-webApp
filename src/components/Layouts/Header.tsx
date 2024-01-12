import React from 'react'
import MainNav from './MainNav'
import Search from './Search'
import Logo from './Logo'

function Header() {
  return (
    <header
    className='w-full flex justify-between items-center px-6 lg:px-12 py-4 h-20'
    >
        <Logo/>

        <MainNav/>
            
        <Search/>

    </header>
  )
}

export default Header
