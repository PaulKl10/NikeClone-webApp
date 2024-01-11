import Link from 'next/link'
import React from 'react'
import JordanIcon from '@/public/Icons/x.svg'
import Image from 'next/image'

function Logo() {
  return (
    <div
      className='flex w-80 h-full'
      >
        
            <Link
            href="/"
            title='Nike'
            className="relative w-20 h-full hover:opacity-60 ">
              {/* <span className='hidden'>{"Nike"}</span> */}
                {/* <JordanIcon width="100%" height="100%" viewBox="0 0 250 250" fill='currentColor'/> */}
<Image
src={`/Logos/Nike.png`}
fill
alt={'Nike'}
className="object-contain"
/>
            </Link>
        
      </div>
  )
}

export default Logo
