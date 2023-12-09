// text container
export default function Container({ children, classvars='' }) {
  return (
    <div
      id='container'
      className={`mx-6 relative text-center max-w-md lg:mx-auto ${classvars}`}
    >
      {children}
    </div>
  )
}
