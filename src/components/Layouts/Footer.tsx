import React from 'react'
import FooterMainSitemap from './FooterMainSitemap'
import FooterSecondarySitemap from './FooterSecondarySitemap'
import FooterSitemap from './FooterSitemap'
import FooterSocialLinks from './FooterSocialLinks'

function Footer() {
  return (
    <footer
    className='flex flex-col gap-8 p-12 bg-black text-white '
    >
      <div
      className='flex w-full justify-between items-start'
      >
         <FooterSitemap/>
         <FooterSocialLinks/>

      </div>
     
    </footer>
  )
}

export default Footer
