import Image from 'next/image'
import React from 'react'

function ProductMainImage({imageUrl= `/Images/hado.jpg`} : any) {
  return (
    <div
    className='relative w-1/3 h-[500px] rounded-xl overflow-hidden'
    >
      {imageUrl && imageUrl.length > 0 ?
                <Image
                src={imageUrl}
                fill
                className='object-cover'
                alt=''
                />

                :

                <span>{`Pas d'image`}</span>
                }
    </div>
  )
}

export default ProductMainImage
