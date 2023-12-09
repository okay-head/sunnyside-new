import React from 'react'
import Container from '../../shared/Container'

export default function Testimonials() {
  const Card = ({ src, alt, body, author, designation }) => (
    <article className='mt-14 flex flex-col gap-4'>
      <div>
        <img src={src} alt={alt} className='mx-auto w-20 rounded-full' />
      </div>
      <div className='mx-auto max-w-sm text-neutral-blue-700'>{body}</div>
      <div>
        <div className='font-fraunces font-black'>{author}</div>
        <div className='text-sm text-neutral-blue-100'>{designation}</div>
      </div>
    </article>
  )

  const data = [
    {
      src: '/images/image-emily.jpg',
      alt: 'Emily',
      body: 'We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.',
      author: 'Emily R.',
      designation: 'Marketing Director',
    },
    {
      src: '/images/image-jennie.jpg',
      alt: 'Jennie',
      body: 'Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!',
      author: 'Jennie F.',
      designation: 'Business owner',
    },
    {
      src: '/images/image-thomas.jpg',
      alt: 'Thomas',
      body: 'Sunnysides enthusiasm coupled with their keen interest in our brands success made it a satisfying and enjoyable experience.',
      author: 'Thomas S.',
      designation: 'Chief operating officer',
    },
  ]

  return (
    <div className='testimonials py-12 md:py-28'>
      <Container classvars='!max-w-7xl'>
        <h2 className=' font-fraunces text-xl font-bold uppercase tracking-[0.3em] text-neutral-blue-100'>
          Client Testimonials
        </h2>

        <section className='testimonial-cards grid-cols-3 md:grid md:gap-8'>
          {data.map(({ src, alt, body, author, designation }, i) => (
            <Card
              key={i}
              src={src}
              alt={alt}
              body={body}
              author={author}
              designation={designation}
            />
          ))}
        </section>
      </Container>
    </div>
  )
}
