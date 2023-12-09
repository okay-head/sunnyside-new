import React from 'react'
import Header from './Header'

export default function Hero() {
  return (
    <div
      id='hero'
      className='relative min-h-[90vh] text-white breakpoint1:min-h-screen'
    >
      {/* bg image */}
      {/* mob */}
      <img
        src='/images/mobile/image-header.jpg'
        alt='background image for hero'
        className='absolute inset-0 -z-10 h-full object-cover breakpoint1:hidden'
      />
      {/* larger */}
      <img
        src='/images/desktop/image-header.jpg'
        alt='background image for hero'
        className='absolute inset-0 -z-10 hidden h-full w-full object-cover breakpoint1:block'
      />
      <Header /> {/* Nav */}
      <div className='absolute inset-0 bottom-48 top-20 grid place-content-center breakpoint1:bottom-72'>
        <h1 className='fluid-heading-1 mx-6 text-center font-fraunces font-bold uppercase   leading-tight [letter-spacing:0.5rem]'>
          We are creatives
        </h1>
        {/* <img src="/images/icon-arrow-down.svg" alt="arrow down" className='absolute left-[48%] -bottom-[100%]' /> */}
      </div>
    </div>
  )
}
