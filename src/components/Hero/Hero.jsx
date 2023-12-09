import React from 'react'
import Header from './Header'

export default function Hero() {
  return (
    <div id='hero' className='relative min-h-[90vh] breakpoint1:min-h-screen text-white'>
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
        className='absolute hidden breakpoint1:block inset-0 -z-10 h-full w-full object-cover'
      />

      <Header />  {/* Nav */}

    <div className='absolute inset-0 top-20 bottom-48 breakpoint1:bottom-72 place-content-center grid'>

        <h1 className='fluid-heading-1 font-fraunces font-bold leading-tight uppercase [letter-spacing:0.5rem]   text-center mx-6'>We are creatives</h1>
        {/* <img src="/images/icon-arrow-down.svg" alt="arrow down" className='absolute left-[48%] -bottom-[100%]' /> */}
    </div>

    </div>
  )
}
