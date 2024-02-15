import Link from 'next/link'
import React from 'react'
import { FaFacebookF, FaInstagram, FaPinterestP, FaTiktok, FaYoutube } from "react-icons/fa";
import NewsLetter from '../newsletter';

const Footer = () => {
  return (
    <footer className='bg-primary pt-16'>
      <div className='container mx-auto px-3 grid md:grid-cols-5 grid-cols-1 gap-16'>
        <div className='md:col-span-2 max-w-[450px]'>
          <h6 className='text-2xl font-bold text-white uppercase mb-2'>
            ABOUT ME
          </h6>
          <p className='text-sm font-medium text-white mb-6'>
            Sed ut perspiciatis unde omnis iste natus voluptatem fringilla tempor dignissim at, pretium et arcu. Sed ut perspiciatis unde omnis iste tempor dignissim at, pretium et arcu natus voluptatem fringilla.
          </p>
          <h6 className='text-2xl font-bold text-white uppercase mb-5'>
            JOIN OUR NEWSLETTER
          </h6>
          <NewsLetter />
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
        <div className='md:col-span-3 grid md:grid-cols-3 grid-cols-1 gap-8'>
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