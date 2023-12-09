import React from 'react'

export default function Heading2({children, classvars='text-black'}) {
  return (
    <h2 className={`text-3xl font-fraunces font-black ${classvars}`}>{children}</h2>
  )
}
