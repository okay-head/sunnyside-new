import { SocialIcon } from 'react-social-icons'

export default function Footer() {
  return (
    <footer className='bg-primary-cyan-300'>
      <div className='footer-container mx-auto flex flex-col gap-8 max-w-sm text-center py-16 text-primary-cyan-700'>
        <div>
          <img src='/images/logo.png' alt='logo' className='w-[192px] h-[36] mx-auto' />
          {/* <img src='/images/logo.svg' alt='logo' className='w-[192px] h-[37.15] mx-auto' /> */}
        </div>
        <div className='flex gap-12 w-max mx-auto font-semibold'>
          <a href='#' className='hover:text-white'>About</a>
          <a href='#' className='hover:text-white'>Service</a>
          <a href='#' className='hover:text-white'>Projects</a>
        </div>
        <div className='mt-6 social-icons'>
        <SocialIcon url="www.facebook.com" bgColor='transparent' fgColor='hsl(167, 40%, 24%)' />
        <SocialIcon url="www.instagram.com" bgColor='transparent' fgColor='hsl(167, 40%, 24%)' />
        <SocialIcon url="www.twitter.com" bgColor='transparent' fgColor='hsl(167, 40%, 24%)' />
        <SocialIcon url="www.pinterest.com" bgColor='transparent' fgColor='hsl(167, 40%, 24%)' />
        </div>
      </div>
    </footer>
  )
}
