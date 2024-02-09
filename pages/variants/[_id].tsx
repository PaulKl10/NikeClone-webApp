import { sanityClient } from '@/sanity';
import VariantView from '@/src/views/VariantView';
import { GetStaticProps } from 'next';
import React from 'react'

interface Props{
  variant: any
}

function Variant({variant}:any) {

  console.log(variant)

  return (
    <VariantView variant={variant}/>
  )
}

export default Variant

export async function getStaticPaths({locales}: any) {
    
  const query = `*[_type == "variant"]{
      _id
  } `;

  const variants = await sanityClient.fetch(query);
  
const paths = variants
.map((variant: any ) =>({
 
    params: { _id: variant?._id },
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
    
  const variantQuery= `*[_type == "variant" && _id == $_id ][0] {
    _id,
    _createdAt,
    name,
    mainImage,
    gallery,
    color,
    product->{
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
    }
}`

  const variant = await sanityClient.fetch(variantQuery, {
    _id: params?._id,
})

if(!variant){
    return {
        notFound: true
    }
}
  
  return {
   props: {
    variant,
  },
  revalidate: 10
 };
};