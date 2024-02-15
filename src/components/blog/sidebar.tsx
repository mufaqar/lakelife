import React from 'react'
import PostStyle3 from './post-style3'
import { Posts } from '@/const/posts'
import NewsLetter from '../newsletter'
import Link from 'next/link'
import { FaInstagram, FaFacebookF, FaPinterestP, FaTiktok, FaYoutube } from 'react-icons/fa'

const Sidebar = () => {
    return (
        <div className='flex flex-col gap-7'>
            <div>
                <h3 className='text-base font-bold text-black uppercase mb-3'>
                    POPULAR POSTS
                </h3>
                <div className='flex flex-col gap-7'>
                    {Posts?.slice(0, 3).map((_item: any, _idx: any) => {
                        return (
                            <div key={_idx} className='bg-white shadow-lg p-2'>
                                <PostStyle3 data={_item} />
                            </div>
                        )
                    })}
                </div>
            </div>
            <div>
                <h3 className='text-base font-bold text-black uppercase mb-3'>
                    NEWSLETTER
                </h3>
                <NewsLetter />
            </div>
            <div>
                <h3 className='text-base font-bold text-black uppercase mb-3'>
                    FOLLOW ME
                </h3>
                <ul className='flex gap-2'>
                    <li>
                        <Link href="#" className='inline-flex items-center justify-center w-10 h-10 rounded-full text-2xl bg-primary text-white hover:bg-secondary'>
                            <FaInstagram />
                        </Link>
                    </li>
                    <li>
                        <Link href="#" className='inline-flex items-center justify-center w-10 h-10 rounded-full text-2xl bg-primary text-white hover:bg-secondary'>
                            <FaFacebookF />
                        </Link>
                    </li>
                    <li>
                        <Link href="#" className='inline-flex items-center justify-center w-10 h-10 rounded-full text-2xl bg-primary text-white hover:bg-secondary'>
                            <FaPinterestP />
                        </Link>
                    </li>
                    <li>
                        <Link href="#" className='inline-flex items-center justify-center w-10 h-10 rounded-full text-2xl bg-primary text-white hover:bg-secondary'>
                            <FaTiktok />
                        </Link>
                    </li>
                    <li>
                        <Link href="#" className='inline-flex items-center justify-center w-10 h-10 rounded-full text-2xl bg-primary text-white hover:bg-secondary'>
                            <FaYoutube />
                        </Link>
                    </li>
                </ul>
            </div>
            <div>
                <h3 className='text-base font-bold text-black uppercase mb-3'>
                    ADVERTISEMENT
                </h3>
                <div className='h-[300px] w-full border-double border-4 border-primary flex items-center justify-center'>
                    <p className='text-sm font-medium text-primary'>
                        Banner Ad 300x300
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Sidebar