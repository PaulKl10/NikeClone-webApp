import { sanityClient } from '@/sanity';
import ProductView from '@/src/views/ProductView'
import { GetStaticProps } from 'next';
import React from 'react'

interface Props{
  product: any
}

function Product({product}:any) {

  console.log(product)

  return (
    <ProductView product={product}/>
  )
}

export default Product

export async function getStaticPaths({locales}: any) {
    
  const query = `*[_type == "product"]{
      _id,
      slug {
          current
      }
  } `;

  const products = await sanityClient.fetch(query);
  
const paths = products
.map((product: any ) =>({
 
    params: { slug: product?.slug?.current },
    // locale, //locale should not be inside `params`
  })
)
.flat();

return {
    paths,
    fallback: false
}
}
 
export const getStaticProps: GetStaticProps = async ({params}:any) => {
    
  const productQuery= `*[_type == "product" && slug.current == $slug ][0] {
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
  
  }`

  const product = await sanityClient.fetch(productQuery, {
    slug: params?.slug,
})

if(!product){
    return {
        notFound: true
    }
}
  
  return {
   props: {
    product,
  },
  revalidate: 10
 };
};