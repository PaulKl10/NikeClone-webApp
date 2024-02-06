import React from 'react'
import FooterSecondarySitemap from './FooterSecondarySitemap'
import FooterMainSitemap from './FooterMainSitemap'

function FooterSitemap() {
  return (
    <div
      className='flex space-x-10 w-[65%] justify-between'
      >
        <FooterMainSitemap/>
        <FooterSecondarySitemap
        title={`Aide`}
        titleLink={``}
        urlList={[
          {
            title: 'Statue de commande',
            url:'/'
          },
          {
            title: 'Statue de commande',
            url:'/'
          },
          {
            title: 'Statue de commande',
            url:'/'
          },
          {
            title: 'Statue de commande',
            url:'/'
          },

        ]}
        />

<FooterSecondarySitemap
        title={`A propos de Nike`}
        titleLink={``}
        urlList={[
          {
            title: 'Statue de commande',
            url:'/'
          },
          {
            title: 'Statue de commande',
            url:'/'
          },
          {
            title: 'Statue de commande',
            url:'/'
          },
          {
            title: 'Statue de commande',
            url:'/'
          },

        ]}
        />

<FooterSecondarySitemap
        title={`Rejoins-nous`}
        titleLink={``}
        urlList={[
          {
            title: 'Statue de commande',
            url:'/'
          },
          {
            title: 'Statue de commande',
            url:'/'
          },
          {
            title: 'Statue de commande',
            url:'/'
          },
          {
            title: 'Statue de commande',
            url:'/'
          },

        ]}
        />
      </div>
  )
}

export default FooterSitemap
