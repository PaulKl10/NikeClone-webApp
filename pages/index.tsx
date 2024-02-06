import HomePageView from '@/src/views/HomePageView'
import { sanityClient } from '@/sanity' 

interface Props{
  products: any
  variants: any
}

export default function Home({products, variants}:Props) {
  
  
  return (
    <HomePageView
    products={products}
    variants={variants}
    />
  )
}

// This gets called on every request
export async function getServerSideProps() {
  //Fetch Product query
  const productQuery = `
  *[_type == "product"]{
    _id,
    _createdAt,
    name,
    slug,
    mainImage,
    price,
    description,
    category->{
      name
    }
  }`;

  // Fetch data from external API
  const products = await sanityClient.fetch(productQuery)

  //Fetch Product query
  const variantQuery = `
  *[_type == "variant"]{
    product->
    {
      _id,
      _createdAt,
      name,
      slug,
      mainImage,
      price,
      description,
      category->{
        name
      }
    },
    color->{
      value
    },
    mainImage,
    images
  }`;

  // Fetch data from external API
  const variants = await sanityClient.fetch(variantQuery)
  
  // Pass data to the page via props
  return { props: 
    { 
      products,
      variants
    } }
}