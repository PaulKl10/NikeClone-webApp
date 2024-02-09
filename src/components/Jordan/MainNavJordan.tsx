import Link from 'next/link'
import React from 'react'

function MainNavJordan() {
  return (
    <nav
        className=''
        >
            <ul
            className='hidden lg:flex gap-10 items-center'
            >
                <li
                className=' '
                >
                    <Link
                    href={'/'}
                    className='nav-link hover:text-white'
                    >
                    <span>
                        {`MEN`}
                    </span>
                    </Link>
                </li>
                <li
                className=' '
                >
                    <Link
                    href={'/jordan'}
                    className='nav-link hover:text-white'
                    >
                    <span>
                        {`WOMEN`}
                    </span>
                    </Link>
                </li>
                <li
                className=''
                >
                <Link
                    href={'/'}
                    className='nav-link hover:text-white'
                    >
                    <span>
                        {`BOYS`}
                    </span>
                    </Link>
                </li>
                <li
                className=''
                >
                <Link
                    href={'/'}
                    className='nav-link hover:text-white'
                    >
                    <span>
                        {`GIRLS`}
                    </span>
                    </Link>
                </li>
                <li
                className=''
                >
                <Link
                    href={'/'}
                    className='nav-link hover:text-white'
                    >
                    <span>
                        {`CUSTOMIZE`}
                    </span>
                    </Link>
                </li>
                <li
                className=''
                >
                <Link
                    href={'/'}
                    className='nav-link hover:text-white'
                    >
                    <span>
                        {`NIKE`}
                    </span>
                    </Link>
                </li>
            </ul>

        </nav>
  )
}

export default MainNavJordan
