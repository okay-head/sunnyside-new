// text container
export default function Container({ children, classvars = '' }) {
  return (
    <div
      id='container'
      className={`relative mx-6 max-w-md text-center lg:mx-auto ${classvars}`}
    >
      {children}
    </div>
  )
}
