import Link from 'next/link'
import React from 'react'
import { FaFacebookF, FaInstagram, FaPinterestP, FaTiktok, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className='bg-primary pt-16'>
      <div className='container mx-auto px-3 grid md:grid-cols-2 grid-cols-1 gap-12'>
        <div>
          <h6 className='text-2xl font-bold text-white uppercase mb-2'>
            JOIN OUR NEWSLETTER
          </h6>
          <form className='flex md:flex-row flex-col items-end gap-1'>
            <div className='w-full'>
              <label htmlFor='email' className='text-sm font-bold text-white uppercase'>
                Email Address:
              </label>
              <input
                name='email'
                id='email'
                type='email'
                placeholder='ADD YOUR EMAIL ADDRESS'
                className='w-full h-10 px-3 py-1 text-xs font-semibold placeholder:text-gray-500 rounded border border-gray-400 focus:outline-none' />
            </div>
            <button type='submit' className='md:max-w-44 w-full h-10 rounded border border-white hover:border-secondary text-center text-sm font-semibold text-white uppercase bg-transparent hover:bg-secondary'>
              Subscribe
            </button>
          </form>
          <ul className='flex gap-2 mt-6'>
            <li>
              <Link href="#" className='inline-flex items-center justify-center w-10 h-10 rounded-full text-2xl bg-white text-primary hover:bg-secondary hover:text-white'>
                <FaInstagram />
              </Link>
            </li>
            <li>
              <Link href="#" className='inline-flex items-center justify-center w-10 h-10 rounded-full text-2xl bg-white text-primary hover:bg-secondary hover:text-white'>
                <FaFacebookF />
              </Link>
            </li>
            <li>
              <Link href="#" className='inline-flex items-center justify-center w-10 h-10 rounded-full text-2xl bg-white text-primary hover:bg-secondary hover:text-white'>
                <FaPinterestP />
              </Link>
            </li>
            <li>
              <Link href="#" className='inline-flex items-center justify-center w-10 h-10 rounded-full text-2xl bg-white text-primary hover:bg-secondary hover:text-white'>
                <FaTiktok />
              </Link>
            </li>
            <li>
              <Link href="#" className='inline-flex items-center justify-center w-10 h-10 rounded-full text-2xl bg-white text-primary hover:bg-secondary hover:text-white'>
                <FaYoutube />
              </Link>
            </li>
          </ul>
        </div>
        <div className='grid md:grid-cols-4 grid-cols-1 gap-8'>
          <div>
            <h6 className='text-base font-bold text-white uppercase mb-4'>
              Shop
            </h6>
            <ul className='flex flex-col gap-2'>
              <li>
                <Link href="#" className='text-sm font-semibold text-white hover:text-secondary'>
                  MEN
                </Link>
              </li>
              <li>
                <Link href="#" className='text-sm font-semibold text-white hover:text-secondary'>
                  WOMEN
                </Link>
              </li>
              <li>
                <Link href="#" className='text-sm font-semibold text-white hover:text-secondary'>
                  BOOTS
                </Link>
              </li>
              <li>
                <Link href="#" className='text-sm font-semibold text-white hover:text-secondary'>
                  APPAREL
                </Link>
              </li>
              <li>
                <Link href="#" className='text-sm font-semibold text-white hover:text-secondary'>
                  ACCESSORIES
                </Link>
              </li>
              <li>
                <Link href="#" className='text-sm font-semibold text-white hover:text-secondary'>
                  GIFT CARDS
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h6 className='text-base font-bold text-white uppercase mb-4'>
              ABOUT US
            </h6>
            <ul className='flex flex-col gap-2'>
              <li>
                <Link href="#" className='text-sm font-semibold text-white hover:text-secondary'>
                  OUR STORIES
                </Link>
              </li>
              <li>
                <Link href="#" className='text-sm font-semibold text-white hover:text-secondary'>
                  CAREERS
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h6 className='text-base font-bold text-white uppercase mb-4'>
              CONNECT
            </h6>
            <ul className='flex flex-col gap-2'>
              <li>
                <Link href="#" className='text-sm font-semibold text-white hover:text-secondary'>
                  FIND MY STORE
                </Link>
              </li>
              <li>
                <Link href="#" className='text-sm font-semibold text-white hover:text-secondary'>
                  EVENTS
                </Link>
              </li>
              <li>
                <Link href="#" className='text-sm font-semibold text-white hover:text-secondary'>
                  REFER A FRIEND
                </Link>
              </li>
              <li>
                <Link href="#" className='text-sm font-semibold text-white hover:text-secondary'>
                  CORPORATE GIFTS
                </Link>
              </li>
              <li>
                <Link href="#" className='text-sm font-semibold text-white hover:text-secondary'>
                  AFFILIATE PROGRAM
                </Link>
              </li>
              <li>
                <Link href="#" className='text-sm font-semibold text-white hover:text-secondary'>
                  REVIEWS
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h6 className='text-base font-bold text-white uppercase mb-4'>
              HELP
            </h6>
            <ul className='flex flex-col gap-2'>
              <li>
                <Link href="#" className='text-sm font-semibold text-white hover:text-secondary'>
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="#" className='text-sm font-semibold text-white hover:text-secondary'>
                  FIT GUIDE
                </Link>
              </li>
              <li>
                <Link href="#" className='text-sm font-semibold text-white hover:text-secondary'>
                  PRODUCT CARE
                </Link>
              </li>
              <li>
                <Link href="#" className='text-sm font-semibold text-white hover:text-secondary'>
                  RETURNS & EXCHANGES POLICY
                </Link>
              </li>
              <li>
                <Link href="#" className='text-sm font-semibold text-white hover:text-secondary'>
                  START A RETURN
                </Link>
              </li>
              <li>
                <Link href="#" className='text-sm font-semibold text-white hover:text-secondary'>
                  BOOT RESTORATION
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className='conteiner mx-auto px-3 mt-16 py-8 border-t border-white/70'>
        <p className='text-sm font-medium text-white text-center uppercase'>
          2024 lakelifestyle.com ALL RIGHTS RESERVED
        </p>
      </div>
    </footer>
  )
}

export default Footer