import React from 'react'

const NewsLetter = () => {
  return (
    <form className='flex md:flex-row flex-col items-end gap-1'>
      <div className='w-full'>
        <label htmlFor='email' className='text-sm font-bold text-black uppercase hidden'>
          Email Address:
        </label>
        <input
          name='email'
          id='email'
          type='email'
          placeholder='ADD YOUR EMAIL ADDRESS'
          className='w-full h-14 px-3 py-1 text-xs font-semibold placeholder:text-gray-500 rounded border border-gray-200 focus:outline-none' />
      </div>
      <button type='submit' className='md:max-w-24 w-full h-14 rounded border border-white hover:border-secondary text-center text-sm font-semibold text-white uppercase bg-primary hover:bg-secondary'>
        Sign up
      </button>
    </form>
  )
}

export default NewsLetter