import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

type Props = {
    title: string;
    image?: string;
    className?: string
}
export default function GridOption({ title, image, className }: Props) {
    return (
        <Link
            href={{
                pathname: '/search',
                query: { q: title },
            }}
            className={cn('relative grid-option' , className)}
        >
            <h2 className='text-lg font-bold'>
            {title}
            </h2>

            {image &&  (
            <Image 
            src={image}
            alt={title}
            layout='fill'
            className='object-cover opacity-20 rounded-md'
            />
            )}
        </Link>
    )
}
