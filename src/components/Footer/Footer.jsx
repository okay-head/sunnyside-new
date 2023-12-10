import { SocialIcon } from 'react-social-icons'

export default function Footer() {
  return (
    <footer className='bg-primary-cyan-300'>
      <div className='footer-container mx-auto flex max-w-sm flex-col gap-8 py-16 text-center text-primary-cyan-700'>
        <div>
          <img
            src='/images/logo.png'
            alt='logo'
            className='mx-auto h-[36] w-[192px]'
          />
          {/* <img src='/images/logo.svg' alt='logo' className='w-[192px] h-[37.15] mx-auto' /> */}
        </div>

        {/* Could loop this over too. But seems like an overkill */}
        <div className='mx-auto flex w-max gap-12 font-semibold'>
          <a href='#' className=' transition-all duration-200 hover:text-white'>
            About
          </a>
          <a href='#' className=' transition-all duration-200 hover:text-white'>
            Service
          </a>
          <a href='#' className=' transition-all duration-200 hover:text-white'>
            Projects
          </a>
        </div>
        <div className='social-icons mt-6'>
          <SocialIcon
            url='www.facebook.com'
            bgColor='transparent'
            fgColor='hsl(167, 40%, 24%)'
          />
          <SocialIcon
            url='www.instagram.com'
            bgColor='transparent'
            fgColor='hsl(167, 40%, 24%)'
          />
          <SocialIcon
            url='www.twitter.com'
            bgColor='transparent'
            fgColor='hsl(167, 40%, 24%)'
          />
          <SocialIcon
            url='www.pinterest.com'
            bgColor='transparent'
            fgColor='hsl(167, 40%, 24%)'
          />
        </div>
      </div>
    </footer>
  )
}
