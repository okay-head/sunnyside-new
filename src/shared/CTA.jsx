import React from 'react'

export default function CTA({ id, children, classvars = '' }) {
  return (
    <a
      href='#'
      onClick={(e) => e.preventDefault()}
      id={id}
      className={`rounded-full px-5 py-3 uppercase transition-all hover:bg-[#ffffff5c] ${classvars}`}
    >
      {children}
    </a>
  )
}
