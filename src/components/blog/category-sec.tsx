import React from 'react'
import PostStyle2 from './post-style2'
import PostStyle3 from './post-style3'
import Link from 'next/link'

const CategorySec = ({ data, cstm_class }: any) => {
    return (
        <div>
            <div className='flex justify-between items-center'>
                <h2 className='md:text-3xl md:leading-8 text-2xl font-bold text-black uppercase'>
                    {data?.categ}
                </h2>
                <Link href="#" className="text-sm font-bold text-white text-center uppercase bg-secondary hover:bg-primary hover:text-white flex items-center justify-center px-4 py-2 w-fit rounded">
                    View All
                </Link>
            </div>
            <div className={`grid gap-10 mt-10 ${cstm_class}`}>
                <div>
                    {data.post?.slice(0, 1).map((_item: any, _idx: any) => {
                        return (
                            <PostStyle2 key={_idx} data={_item} />
                        )
                    })}
                </div>
                <div className='flex flex-col gap-7'>
                    {data.post?.map((_item: any, _idx: any) => {
                        return (
                            <PostStyle3 key={_idx} data={_item} />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default CategorySec