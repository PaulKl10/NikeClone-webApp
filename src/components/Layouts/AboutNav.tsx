import Link from 'next/link'
import React from 'react'

function AboutNav() {
  return (
    <div
      className='w-full px-12 py-2 bg-black bg-opacity-5 flex justify-between items-center'
      >
        <div
        className='flex flex-row space-x-3'
        >
            <div
            className='w-7 h-7 bg-black rounded-full'
            >

            </div>

            <div
            className='w-7 h-7 bg-black rounded-full'
            >

            </div>
        </div>

        <nav
        className=''
        >
            <ul
            className='flex space-x-3 divide-x-2 divide-black items-center'
            >
                <li
                className='pl-3 text-xs font-medium'
                >
                    <Link
                    href={'/'}
                    className='hover:text-[#757575] hover:underline'
                    >
                    <span>
                        {`Trouver un magasin`}
                    </span>
                    </Link>
                </li>
                <li
                className='pl-3 text-xs font-medium'
                >
                <Link
                    href={'/'}
                    className='hover:text-[#757575] hover:underline'
                    >
                    <span>
                        {`Aide`}
                    </span>
                    </Link>
                </li>
                <li
                className='pl-3 text-xs font-medium'
                >
                <Link
                    href={'/'}
                    className='hover:text-[#757575] hover:underline'
                    >
                    <span>
                        {`Nous rejoindre`}
                    </span>
                    </Link>
                </li>
                <li
                className='pl-3 text-xs font-medium'
                >
                <Link
                    href={'/'}
                    className='hover:text-[#757575] hover:underline'
                    >
                    <span>
                        {`S'identifier`}
                    </span>
                    </Link>
                </li>
            </ul>

        </nav>
      </div>
  )
}

export default AboutNav
