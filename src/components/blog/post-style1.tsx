import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const PostStyle1 = ({ data }: any) => {
    return (
        <div className='flex md:flex-row flex-col gap-7'>
            <div className='md:w-1/2 w-full'>
                <Image src={data?.img} alt='feature' width={735} height={640} className='h-full w-full' />
            </div>
            <div className='md:w-1/2 w-full'>
                <p className='text-sm font-semibold text-primary uppercase mb-3'>
                    {data?.categ}
                </p>
                <Link href="#" className='text-xl font-bold text-black uppercase'>
                    {data?.title}
                </Link>
                <p className='text-sm font-medium text-black my-5'>
                    {data?.excerpt}
                </p>
                <Link href="#" className="text-sm font-bold text-white text-center uppercase bg-primary hover:bg-secondary hover:text-white flex items-center justify-center px-4 py-3.5 max-w-[360px] w-full rounded">
                    Read the Full Story
                </Link>
            </div>
        </div>
    )
}

export default PostStyle1