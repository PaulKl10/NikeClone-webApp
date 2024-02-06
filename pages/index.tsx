import HomePageView from '@/src/views/HomePageView'
import { sanityClient } from '@/sanity' 

interface Props{
  products: any
}

export default function Home({products}:Props) {
  console.log(products)
  return (
    <HomePageView/>
  )
}

// This gets called on every request
export async function getServerSideProps() {
  //Fetch Product query
  const productQuery = `
  *[_type == "product"]`

  // Fetch data from external API
  const products = await sanityClient.fetch(productQuery)
  
  // Pass data to the page via props
  return { props: 
    { 
      products 
    } }
}