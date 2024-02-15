import React from 'react'
import PostStyle2 from './post-style2'
import PostStyle3 from './post-style3'
import Link from 'next/link'
import PostStyle4 from './post-style4'

const CategorySec2 = ({ data, cstm_class }: any) => {
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
                <div className='grid md:grid-cols-3 gap-7'>
                    {data.post?.map((_item: any, _idx: any) => {
                        return (
                            <PostStyle4 key={_idx} data={_item} />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default CategorySec2