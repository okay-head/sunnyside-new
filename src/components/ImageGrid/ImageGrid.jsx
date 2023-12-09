import React from 'react'

export default function ImageGrid() {
  return (
    <section className='image-grid grid grid-cols-2 grid-rows-2 md:grid-cols-4 md:grid-rows-none'>
      {/* mobile */}
      <img
        src='/images/mobile/image-gallery-milkbottles.jpg'
        alt='milkbottles'
        className='1 lg:hidden'
      />
      <img
        src='/images/mobile/image-gallery-orange.jpg'
        alt='orange'
        className='2 lg:hidden'
      />
      <img
        src='/images/mobile/image-gallery-cone.jpg'
        alt='cone'
        className='3 lg:hidden'
      />
      <img
        src='/images/mobile/image-gallery-sugar-cubes.jpg'
        alt='sugar-cubes'
        className='4 lg:hidden'
      />

      {/* desktop */}
      <img
        src='/images/desktop/image-gallery-milkbottles.jpg'
        alt='milkbottles'
        className='1 hidden lg:block'
      />
      <img
        src='/images/desktop/image-gallery-orange.jpg'
        alt='orange'
        className='2 hidden lg:block'
      />
      <img
        src='/images/desktop/image-gallery-cone.jpg'
        alt='cone'
        className='3 hidden lg:block'
      />
      <img
        src='/images/desktop/image-gallery-sugarcubes.jpg'
        alt='sugar-cubes'
        className='4 hidden lg:block'
      />
    </section>
  )
}
