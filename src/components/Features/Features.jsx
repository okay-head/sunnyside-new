import React from 'react'
import Heading2 from '../../shared/Heading2'
import Container from '../../shared/Container'

export default function Features() {
  return (
    <section className='features feature-grid'>
      {/* Both sub sections are similar in structure, use multiline editing */}
      <div className='egg order-2'>
        <img
          src='/images/mobile/image-transform.jpg'
          alt='egg'
          className='md:hidden'
        />
        <img
          src='/images/desktop/image-transform.jpg'
          alt='egg'
          className='hidden w-full md:block'
        />
      </div>
      <div className='order-1 grid place-items-center'>
        <Container classvars='lg:text-left'>
          {/* breakpoint */}
          <div className='text-content flex flex-col gap-4 py-12'>
            <Heading2>Transform your brand</Heading2>
            <p className=' text-neutral-blue-300'>
              We are a full-service creative agency specializing in helping
              brands grow fast. Engage your clients through compelling visuals
              that do most of the marketing for you.
            </p>
            <p>
              <a
                href=''
                onClick={(e) => e.preventDefault()}
                className='rounded-sm border-b-[6px] border-primary-yellow-200 px-2 font-fraunces text-sm font-bold uppercase transition-all duration-300 hover:border-primary-yellow-700'
              >
                Learn more
              </a>
            </p>
          </div>
        </Container>
      </div>
      <div className='lamp order-3'>
        <img
          src='/images/mobile/image-stand-out.jpg'
          alt='lamp'
          className='md:hidden'
        />
        <img
          src='/images/desktop/image-stand-out.jpg'
          alt='lamp'
          className='hidden w-full md:block'
        />
      </div>
      <div className='order-4 grid place-items-center'>
        <Container classvars='lg:text-left'>
          {/* breakpoint */}
          <div className='text-content flex flex-col gap-4 py-12'>
            <Heading2>Stand out to the right audience</Heading2>
            <p className=' text-neutral-blue-300'>
              Using a collaborative formula of designers, researchers,
              photographers, videographers. and copywriters, we'll build and
              extend your brand in digital places.
            </p>
            <p>
              <a
                href=''
                onClick={(e) => e.preventDefault()}
                className='rounded-sm border-b-[6px] border-primary-softred-200 px-2 font-fraunces text-sm font-bold uppercase transition-all duration-300 hover:border-primary-softred-700'
              >
                Learn more
              </a>
            </p>
          </div>
        </Container>
      </div>

      {/* Both sub sections are similar in structure, use multiline editing */}
      <div className='cherry relative order-5 grid grid-rows-3'>
        <div></div>
        <div></div>
        <Container>
          {/* breakpoint */}
          <div className='text-content flex flex-col gap-4 py-12 pt-6'>
            <Heading2 classvars='text-primary-cyan-700'>
              Graphic Design
            </Heading2>
            <p className='text-primary-cyan-700'>
              Great design makes you memorable. We deliver artwork that
              underscores your brand message and captures potential clients'
              attention.
            </p>
          </div>
        </Container>
      </div>
      <div className='orange relative order-6 grid grid-rows-3'>
        <div></div>
        <div></div>
        <Container>
          {/* breakpoint */}
          <div className='text-content flex flex-col gap-4 py-12 pt-6'>
            <Heading2 classvars='text-primary-darkblue'>Photography</Heading2>
            <p className='text-primary-darkblue'>
              Increase your credibility by getting the most stunning,
              high-quality photos that improve your business image.
            </p>
          </div>
        </Container>
      </div>
    </section>
  )
}
