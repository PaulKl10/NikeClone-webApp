import Link from 'next/link'
import React from 'react'
import JordanIcon from '@/public/Icons/x.svg'
import Image from 'next/image'

function LogoJordan() {
  return (
    <div
      className='flex BackgroundOrangeLogoNavBar h-[150%] w-32 justify-center'
      >
          <Link
          href="/jordan"
          title='Jordan'
          className="relative w-20 h-full hover:opacity-60">
            <Image
            src={`/images/jordan.png`}
            fill
            alt={'Jordan'}
            className="object-contain"
            />
          </Link>      
    </div>
  )
}

export default LogoJordan
