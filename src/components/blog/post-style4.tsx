import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const PostStyle4 = ({ data }: any) => {
    return (
        <div className='flex flex-col gap-7'>
            <div className='h-[200px] w-full'>
                <Image src={data?.img} alt='feature' width={735} height={640} className='h-full w-full' />
            </div>
            <div className='w-full'>
                <Link href="#" className='text-base font-bold text-black hover:text-primary uppercase'>
                    {data?.title}
                </Link>
                {data?.info &&
                    <ul className='flex gap-2 mt-3'>
                        <li className='text-xs font-medium text-black'>
                            {data?.info.publish}
                        </li>
                    </ul>
                }
            </div>
        </div>
    )
}

export default PostStyle4