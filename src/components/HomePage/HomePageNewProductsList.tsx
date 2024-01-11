import React from 'react'
import HomePageNewProductListItem from './HomePageNewProductListItem'

function HomePageNewProductsList() {
  return (
    <ul
    className=' flex space-x-4 overflow-x-auto '
    >
      <HomePageNewProductListItem
      imageUrl=''
      name='Air Jordan 1'
      description='Chaussure jordan'
      price={50}
      />
      <HomePageNewProductListItem
      imageUrl='Hado.jpg'
      name=' Jordan 1'
      description='Chaussure jordan'
      price={50}
      />
      <HomePageNewProductListItem
      imageUrl='Hado.jpg'
      name='Air Jordan 1'
      description='Chaussure jordan'
      price={50}
      />
      <HomePageNewProductListItem
      imageUrl='Hado.jpg'
      name='Air Jordan 1'
      description='Chaussure jordan'
      price={500}
      />
    </ul>
  )
}

export default HomePageNewProductsList
