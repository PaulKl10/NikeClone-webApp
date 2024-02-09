import React from 'react'
import ProductMainImage from './ProductMainImage'
import ProductInfo from './ProductInfo'
import Image from 'next/image';
import { urlFor } from '@/sanity';
import Link from 'next/link';

interface Props{
  product: any
}

function ProductTopSection({product}: any) {
  return (
    <div className="flex justify-center w-screen my-3">
      <div className="relative w-[600px] h-[600px]">
        <Image src={product?.mainImage ? urlFor(product?.mainImage).url()! : `/Images/hado.jpg`} alt={product?.name} fill />
      </div>
      <div className="flex flex-col px-3 text-xl items-start space-y-4 w-[400px]">
        <div className="flex flex-col">
          <p className="font-medium">{product?.name}</p>
          <p className="text-gray-400">{product?.category.name}</p>
          <p className='text-sm text-justify'>
            {product?.description}
          </p>
          <p className="text-2xl font-medium py-3">{product?.price}€</p>
        </div>
        <div className="flex space-x-3">
          <div className="relative w-[70px] h-[70px]">
            <Image src={product?.mainImage ? urlFor(product?.mainImage).url()! : `/Images/hado.jpg`} alt={product?.name} fill />
          </div>
          <div className="relative w-[70px] h-[70px]">
            <Image src={product?.mainImage ? urlFor(product?.mainImage).url()! : `/Images/hado.jpg`} alt={product?.name} fill />
          </div>
        </div>
        <div className="flex flex-col w-full text-base">
          <div className="flex justify-between">
            <p>Sélectionner la taille</p>
            <p className="text-gray-400">Guide des tailles</p>
          </div>
          <div className="grid grid-cols-3 text-center gap-1">
            <div className="p-3 border border-1 rounded">EU 38.5</div>
            <div className="p-3 border border-1 rounded">EU 39</div>
            <div className="p-3 border border-1 rounded">EU 39.5</div>
            <div className="p-3 border border-1 rounded">EU 38.5</div>
            <div className="p-3 border border-1 rounded">EU 39</div>
            <div className="p-3 border border-1 rounded">EU 39.5</div>
            <div className="p-3 border border-1 rounded">EU 38.5</div>
            <div className="p-3 border border-1 rounded">EU 39</div>
            <div className="p-3 border border-1 rounded">EU 39.5</div>
            <div className="p-3 border border-1 rounded">EU 38.5</div>
            <div className="p-3 border border-1 rounded">EU 39</div>
            <div className="p-3 border border-1 rounded">EU 38.5</div>
            <div className="p-3 border border-1 rounded">EU 39</div>
            <div className="p-3 border border-1 rounded">EU 38.5</div>
            <div className="p-3 border border-1 rounded">EU 39</div>
            <div className="p-3 border border-1 rounded">EU 39.5</div>
          </div>
        </div>
        <div className="flex flex-col space-y-2 justify-center items-center text-xl w-[400px]">
          <Link
            href={""}
            className="py-4 w-full bg-black text-white rounded-full text-center"
          >
            Ajouter au panier
          </Link>
          <Link
            href={""}
            className="py-4 w-full border border-1 rounded-full text-center"
          >
            Ajouter aux favoris
          </Link>
        </div>
        <div className="flex flex-col text-base space-y-5">
          <div className="flex flex-col space-y-2">
            <p>Retrait gratuit</p>
            <p>Trouver un magasin</p>
            <p>Option « click and collect » disponible au moment du paiement</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductTopSection
