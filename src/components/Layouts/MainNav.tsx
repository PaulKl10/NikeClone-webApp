import Link from 'next/link'
import React from 'react'

function MainNav() {
  return (
    <nav
        className=''
        >
            <ul
            className='hidden lg:flex space-x-3 items-center'
            >
                <li
                className=' '
                >
                    <Link
                    href={'/'}
                    className='nav-link'
                    >
                    <span>
                        {`Trouver un magasin`}
                    </span>
                    </Link>
                </li>
                <li
                className=''
                >
                <Link
                    href={'/'}
                    className='nav-link'
                    >
                    <span>
                        {`Aide`}
                    </span>
                    </Link>
                </li>
                <li
                className=''
                >
                <Link
                    href={'/'}
                    className='nav-link'
                    >
                    <span>
                        {`Nous rejoindre`}
                    </span>
                    </Link>
                </li>
                <li
                className=''
                >
                <Link
                    href={'/'}
                    className='nav-link'
                    >
                    <span>
                        {`S'identifier`}
                    </span>
                    </Link>
                </li>
            </ul>

        </nav>
  )
}

export default MainNav
