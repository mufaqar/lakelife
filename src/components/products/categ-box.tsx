import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const CategoryBox = ({ data }: any) => {
  return (
    <div className='rounded-xl bg-black relative'>
      <div>
        <Image src={data?.img} alt='feature' width={600} height={750} className='h-full w-full object-cover rounded-xl' />
      </div>
      <div className='absolute top-0 bg-gradient-to-b from-transparent via-transparent to-black/50 w-full h-full flex flex-col gap-2 justify-end px-5 py-4 rounded-xl'>
        <Link href="#" className='md:text-2xl text-xl font-bold text-white uppercase'>
          {data?.categ}
        </Link>
        <Link href="#" className='text-base font-medium text-white uppercase underline hover:no-underline'>
          Shop All
        </Link>
      </div>
    </div>
  )
}

export default CategoryBox