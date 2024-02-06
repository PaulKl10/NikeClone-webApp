import Link from 'next/link'
import React from 'react'
import JordanIcon from '../../../public/Icons/x.svg'

function FooterSocialLinks() {
  return (
    <ul
    className='flex items-center gap-3 '
    >
      <li
      className='flex w-8 h-8 rounded-full bg-white/50 flex-shrink-0 hover:bg-white
      transform ease-in-out duration-300
      '
      >
        <Link
        href={`/`}
        className='w-full'
        >
        
        </Link>
        
      </li>

      <li
      className='flex w-8 h-8 rounded-full bg-white/50 flex-shrink-0 hover:bg-white
      transform ease-in-out duration-300
      '
      >
        <Link
        href={`/`}
        className='w-full'
        >
        
        </Link>
        
      </li>

      <li
      className='flex w-8 h-8 rounded-full bg-white/50 flex-shrink-0 hover:bg-white
      transform ease-in-out duration-300
      '
      >
        <Link
        href={`/`}
        className='w-full'
        >
         {/* <JordanIcon width="100%" height="100%" viewBox="0 0 250 250" fill='currentColor'/> */}
        </Link>
        
      </li>

      <li
      className='flex w-8 h-8 rounded-full bg-white/50 flex-shrink-0 hover:bg-white
      transform ease-in-out duration-300
      '
      >
        <Link
        href={`/`}
        className='w-full'
        >
        
        </Link>
        
      </li>
    </ul>
  )
}

export default FooterSocialLinks
