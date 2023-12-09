import React from 'react'
import CTA from '../../shared/CTA'

/* REFACTORRR */
export default function Header() {
  return (
    <header className=' relative mx-6 flex pt-6 items-center'>
      <a href='#' id='logo' className='me-auto'>
        <img src='/images/logo.svg' alt='logo' />
      </a>
      <nav id='mobile-nav' className='flex md:hidden'>
        <div className='group'>
          <img src='/images/icon-hamburger.svg' alt='hamburger icon' className='cursor-pointer'/>
          <div className='submenu hidden group-hover:block absolute inset-0 top-10 z-10'>
            <div className=' text-neutral-blue-300 flex flex-col bg-white text-center w-full font-bold gap-8 py-12'>
              <p><CTA id={'about-mob'} classvars='hover:bg-primary-yellow-700 hover:text-[black]'>About</CTA></p>
              <p><CTA id={'services-mob'} classvars='hover:bg-primary-yellow-700 hover:text-[black]'>Services</CTA></p>
              <p><CTA id={'projects-mob'} classvars='hover:bg-primary-yellow-700 hover:text-[black]'>Projects</CTA></p>
              <p><CTA id={'contact-mob'} classvars='hover:bg-primary-yellow-700 hover:text-[black]'>Contact</CTA></p>
                </div>
          </div>
        </div>
      </nav>
      <nav id='desktop-nav' className='hidden md:flex font-semibold'>
        <CTA id={'about-dktop'} classvars='normal-case'>About</CTA>
        <CTA id={'services-dktop'} classvars='normal-case'>Services</CTA>
        <CTA id={'projects-dktop'} classvars='normal-case'>Projects</CTA>
        <CTA id={'contact-dktop'} classvars='font-fraunces'>Contact</CTA>
      </nav>
    </header>
  )
}
