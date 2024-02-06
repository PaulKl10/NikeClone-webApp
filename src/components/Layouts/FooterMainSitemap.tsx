import Link from 'next/link'
import React from 'react'

function FooterMainSitemap() {
  return (
    <ul
    className='flex flex-col gap-2'
    >
      <li
      className=''>
        <Link
        href={'#'}
        className='footer-main-link text-sm'
        >
        {`Cartes cadeaux`}
        </Link>
      </li>

      <li
      className=''>
        <Link
        href={'#'}
        className='footer-main-link text-sm'
        >
        {`Cartes cadeaux`}
        </Link>
      </li>

      <li
      className=''>
        <Link
        href={'#'}
        className='footer-main-link text-sm'
        >
        {`Cartes cadeaux`}
        </Link>
      </li>

      <li
      className=''>
        <Link
        href={'#'}
        className='footer-main-link text-sm'
        >
        {`Cartes cadeaux`}
        </Link>
      </li>
    </ul>
  )
}

export default FooterMainSitemap
