"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import { CiSearch } from "react-icons/ci";
import { BsMinecartLoaded } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

const Header = () => {
  const [open, setOpen] = useState(false)
  return (
    <header className='relative z-50'>
      <div className='bg-primary py-2'>
        <div className='container mx-auto px-3 flex items-center'>
          <div className='md:w-3/5 w-full'>
            <p className='text-sm font-medium text-white md:text-end text-center'>
              Explore the World of Annie | <Link href="#" className='font-bold underline hover:no-underline'>Shop Now</Link>
            </p>
          </div>
          <div className='md:w-2/5 w-full md:block hidden'>
            <ul className='divide-x flex items-center justify-end'>
              <li>
                <Link href="#" className='px-2 text-xs font-medium text-white'>
                  HELP
                </Link>
              </li>
              <li>
                <Link href="#" className='px-2 text-xs font-medium text-white'>
                  FIND STORES
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className='bg-white md:h-16 h-12 border-b border-gray-300'>
        <div className='container mx-auto px-3 flex items-center h-full'>
          <nav className='md:h-full w-2/6'>
            <button onClick={() => setOpen(!open)} className='cursor-pointer text-2xl md:hidden block'>
              {open ? (<IoMdClose />) : (<FaBars />)}
            </button>
            <ul className={`h-full w-full flex md:flex-row flex-col md:items-center md:static absolute left-0 right-0 md:bg-transparent z-50  ${open ? " top-20 bg-primary py-0 h-full" : "-top-[300%]"}`}>
              <li className='md:h-full h-fit md:w-fit w-full'>
                <Link href="#" className='text-sm font-semibold md:text-black text-white hover:text-white h-full w-full hover:bg-secondary flex md:items-center md:justify-center py-4 px-4'>
                  MEN
                </Link>
              </li>
              <li className='md:h-full h-fit md:w-fit w-full'>
                <Link href="#" className='text-sm font-semibold md:text-black text-white hover:text-white h-full w-full hover:bg-secondary flex md:items-center md:justify-center py-4 px-4'>
                  WOMEN
                </Link>
              </li>
              <li className='md:h-full h-fit md:w-fit w-full'>
                <Link href="#" className='text-sm font-semibold md:text-black text-white hover:text-white h-full w-full hover:bg-secondary flex md:items-center md:justify-center py-4 px-4'>
                  EXPLORE
                </Link>
              </li>
              <li className='md:h-full h-fit md:w-fit w-full'>
                <Link href="#" className='text-sm font-semibold md:text-black text-white hover:text-white h-full w-full hover:bg-secondary flex md:items-center md:justify-center py-4 px-4'>
                  LAST CALL
                </Link>
              </li>
            </ul>
          </nav>
          <div className='w-3/6 text-center'>
            <Link href="/" className='md:text-3xl text-2xl font-bold text-primary text-center'>
              Lake Life
            </Link>
          </div>
          <div className='w-2/6'>
            <ul className='flex items-center justify-end gap-4'>
              <li>
                <CiSearch className='text-3xl' />
              </li>
              <li className='md:block hidden'>
                <Link href="#" className='text-sm font-semibold text-black hover:text-secondary'>
                  LOG IN
                </Link>
              </li>
              <li>
                <BsMinecartLoaded className='text-3xl' />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header