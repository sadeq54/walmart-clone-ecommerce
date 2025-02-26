import { ProductResult } from '@/types/searchTypes'
import { Badge } from '@/components/ui/badge'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {  Star } from 'lucide-react'

export default function Product({product}:{
    product:ProductResult
}) {
  return (
    <Link
    href={{
        pathname:"/product",
        query:{url: product.general.url}
    }}
    className='flex flex-col relative border rounded-md h-full  p-5'
    >
       
    <Image 
    src={product.general.image}
    alt={product.general.title}
    width={200}
    height={200}
    className='mx-auto object-cover'
    />
    <p className='text-xl font-bold'>
        {product.price.currency}     
        {` ${product.price.price}`}
    </p>

    {product.general.badge && (
        <Badge className='w-fit absolute top-1 right-1'>
            {product.general.badge}
        </Badge>
        
    )}

    <p className='font-light'>{product.general.title}</p>

    {product.rating && (
       <p className='text-yellow-500 text-sm flex gap-1 items-center'>
        {product.rating.rating}  <Star size={16} />
        <span className='text-gray-400 ml-2'>({product.rating.count})</span>
       </p>
    )}
    
    </Link>
  )
}
