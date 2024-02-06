import Link from 'next/link'
import React from 'react'

function FooterSecondarySitemap({title, titleLink, urlList}:any) {
  return (
    <div
    className='flex flex-col gap-2'
    >
      <h5
      className=''>
        <Link
        href={titleLink}
        className='footer-main-link'
        >
        {title}
        </Link>
      </h5>

      <ul
      className='flex flex-col gap-2'
      >
        {urlList && urlList.length > 0 && 
        urlList?.map((url:any) =>
        <li
        key={urlList?.indexOf(url)}
      className=''>
        <Link
        href={url?.url}
        className='text-xs opacity-50 hover:opacity-100'
        >
        {url?.title}
        </Link>
      </li>
        )

        }
      </ul>
    </div>
  )
}

export default FooterSecondarySitemap
