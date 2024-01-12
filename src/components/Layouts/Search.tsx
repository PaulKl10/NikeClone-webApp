import { MagnifyingGlassIcon } from '@heroicons/react/16/solid'
import { HeartIcon, ShoppingBagIcon } from '@heroicons/react/24/outline'
import React from 'react'
import NavDrawer from './NavDrawer'

function Search() {
  return (
    <div
        className='flex items-center w-80 gap-3 justify-end lg:justify-between'
        >
            <div
            className='hidden lg:flex flex-1 space-x-3 items-center bg-black/5 rounded-full px-3 py-2 '
            >
                <MagnifyingGlassIcon 
                className='w-7'/>

                <span
                className='opacity-20'
                >{`Rechercher`}
                </span>
            </div>

            <HeartIcon 
            className='icon-button '
            />

            <ShoppingBagIcon 
            className='icon-button '
            />

            <NavDrawer/>
        </div>
  )
}

export default Search
