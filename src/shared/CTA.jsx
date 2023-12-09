import React from 'react'

export default function CTA({id,children,classvars=''}) {
  return (
    <a href='#' id={id} className={`py-3 uppercase px-5 rounded-full hover:bg-[#ffffff5c] ${classvars}`}>{children}</a>
  )
}
