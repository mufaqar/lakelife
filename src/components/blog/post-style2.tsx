import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const PostStyle2 = ({ data }: any) => {
    return (
        <div>
            <div className='md:h-[300px] h-[200px]'>
                <Image src={data?.img} alt='feature' width={735} height={640} className='h-full w-full' />
            </div>
            <div className='mt-4'>
                <p className='text-sm font-semibold text-primary uppercase mb-2'>
                    {data?.categ}
                </p>
                {data?.info &&
                    <ul className='flex gap-2 mb-2'>
                        <li className='text-sm font-medium text-black'>
                            {data?.info.publish}
                        </li>
                        <li className='text-sm font-medium text-black'>
                            by {data?.info.author}
                        </li>
                    </ul>
                }
                <Link href="#" className='text-xl font-bold text-black hover:text-primary uppercase'>
                    {data?.title}
                </Link>
                <p className='text-sm font-medium text-black mt-4'>
                    {data?.excerpt}
                </p>
            </div>
        </div>
    )
}

export default PostStyle2