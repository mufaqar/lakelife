import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const PostStyle3 = ({ data }: any) => {
    return (
        <div className='flex md:flex-row flex-col gap-5'>
            <div className='md:w-1/3 w-full'>
                <Image src={data?.img} alt='feature' width={735} height={640} className='h-full w-full' />
            </div>
            <div className='md:w-2/3 w-full'>
                <Link href="#" className='text-sm font-bold text-black hover:text-primary uppercase'>
                    {data?.title.substring(0, 30)}
                </Link>
                {/* <p className='text-sm font-medium text-black mt-4'>
                    {data?.excerpt.substring(0, 60)}...
                </p> */}
                {data?.info &&
                    <ul className='flex gap-2 mt-3'>
                        <li className='text-xs font-medium text-black'>
                            {data?.info.publish}
                        </li>
                        <li className='text-xs font-medium text-black'>
                            by {data?.info.author}
                        </li>
                    </ul>
                }
            </div>
        </div>
    )
}

export default PostStyle3