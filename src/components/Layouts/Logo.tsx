import Link from 'next/link'
import React from 'react'

function Logo() {
  return (
    <div
      className='w-80 h-full'
      >
        
            <Link
            href="/"
            title='Nike'
            className="flex w-40 h-full hover:opacity-60 bg-slate-200">
              {/* <span className='hidden'>{"Nike"}</span> */}
                {/* <JordanIcon width="100%" height="100%" viewBox="0 0 250 250" fill='currentColor'/> */}
            </Link>
        
      </div>
  )
}

export default Logo
