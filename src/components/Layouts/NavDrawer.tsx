import { Bars3Icon, ChevronRightIcon, XMarkIcon } from '@heroicons/react/16/solid'
import Link from 'next/link'
import React, { useState } from 'react'

function NavDrawer() {
    const [openDrawer, setOpenDrawer] = useState(false)

  return (
    <>
      <button
      onClick={() => setOpenDrawer(true)}
      >
        <Bars3Icon className='icon-button lg:hidden'/>
      </button>

      {openDrawer &&
      <div
      onClick={() => setOpenDrawer(false)}
      className='z-10 bg-black/20 backdrop-blur fixed top-0 left-0 w-full h-screen'
      >
      </div>
      }

      <aside
      className={`fixed top-0 right-0 z-30 h-screen w-5/6 bg-white p-6
      flex flex-col gap-3 transform ease-in-out duration-500
    ${openDrawer ? 'translate-x-0' : 'translate-x-full'}  
    `}
      >
        <div
        className='flex w-full justify-end'
        >
            <button
            onClick={() => setOpenDrawer(false)}
            >
            <XMarkIcon className='w-6'/>
            </button>
        </div>

        <nav
        className='w-full'
        >
            <ul
            className='w-full flex flex-col gap-3'
            >
                <li
                className='w-full '
                >
                    <Link
                    href={'/products'}
                    onClick={() => setOpenDrawer(false)}
                    className='nav-link text-xl flex justify-between items-center'
                    >
                    <span>
                        {`Nouveautés`}
                    </span>

                    <ChevronRightIcon className='w-6'/>
                    </Link>
                </li>

                <li
                className='w-full '
                >
                    <Link
                    href={'/products'}
                    onClick={() => setOpenDrawer(false)}
                    className='nav-link text-xl flex justify-between items-center'
                    >
                    <span>
                        {`Nouveautés`}
                    </span>

                    <ChevronRightIcon className='w-6'/>
                    </Link>
                </li>

                <li
                className='w-full '
                >
                    <Link
                    href={'/products'}
                    onClick={() => setOpenDrawer(false)}
                    className='nav-link text-xl flex justify-between items-center'
                    >
                    <span>
                        {`Nouveautés`}
                    </span>

                    <ChevronRightIcon className='w-6'/>
                    </Link>
                </li>

            </ul>
        </nav>
      </aside>
    </>
  )
}

export default NavDrawer
