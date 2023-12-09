import React from 'react'

export default function Heading2({ children, classvars = 'text-black' }) {
  return (
    <h2 className={`font-fraunces text-3xl font-black ${classvars}`}>
      {children}
    </h2>
  )
}
