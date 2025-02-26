import { Skeleton } from '@/components/ui/skeleton'
import React from 'react'

export default function loading() {
    return (
        <div className="p-10">
            <h1 className="text-3x1 font-bold mb-2">Sraping Results</h1>
            <h2 className="mb-5 text-gray-400">
                    we wont be long..
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                <Skeleton className='w-[300px] h-[400px]' />
                <Skeleton className='w-[300px] h-[400px]' />
                <Skeleton className='w-[300px] h-[400px]' />
                <Skeleton className='w-[300px] h-[400px]' />
                <Skeleton className='w-[300px] h-[400px]' />
                <Skeleton className='w-[300px] h-[400px]' />
                <Skeleton className='w-[300px] h-[400px]' />
                <Skeleton className='w-[300px] h-[400px]' />
                <Skeleton className='w-[300px] h-[400px]' />
            </ul>

        </div>
    )
}
