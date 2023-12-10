import React from 'react'
import CTA from '../../shared/CTA'

/* REFACTORRR */
export default function Header() {
  const navElements = ['About', 'Services', 'Projects', 'Contact']

  return (
    <header className=' relative mx-6 flex items-center pt-6'>
      <a href='#' id='logo' className='me-auto'>
        <img src='/images/logo.svg' alt='logo' />
      </a>
      {/* mobile nav */}
      <nav id='mobile-nav' className='flex md:hidden'>
        <div className='group'>
          <img
            src='/images/icon-hamburger.svg'
            alt='hamburger icon'
            className='cursor-pointer'
          />
          {/* Hack for hover. Checkout later. Use border */}
          <div className='submenu absolute inset-0 top-8 z-10 hidden  h-max pt-16 group-hover:block'>
            <div className='relative flex w-full flex-col gap-8 bg-white py-7 text-center font-bold text-neutral-blue-300'>
              <div className='triangle absolute -top-[12%] left-[93.2%]'></div>
              {navElements.map((x, i) => (
                <p key={i}>
                  <CTA
                    id={`${x.toLowerCase()}-mob`}
                    classvars={`hover:bg-primary-yellow-700 hover:text-black ${
                      x === 'Contact' ? 'font-fraunces' : 'normal-case'
                    }`}
                  >
                    {x}
                  </CTA>
                </p>
              ))}
            </div>
          </div>
        </div>
      </nav>
      {/* desktop nav */}
      <nav id='desktop-nav' className='hidden font-semibold md:flex'>
        {navElements.map((x, i) => (
          <CTA
            key={i}
            id={`${x.toLowerCase()}-dktop`}
            classvars={`font-bold ${
              x === 'Contact' ? 'uppercase font-fraunces' : 'normal-case'
            }`}
          >
            {x}
          </CTA>
        ))}
      </nav>
    </header>
  )
}
