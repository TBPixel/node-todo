import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Footer from './Footer'

const linkStyles = {
  focus: 'px-3 py-2 rounded-md text-sm font-medium text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700',
  blur: 'px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700',
}

function Shell({ children }) {
  const [mobileMenu, toggleMobileMenu] = useState(false)
  const location = useLocation()

  return (
    <div>
      <div className="bg-gray-800 pb-32">
        <nav className="bg-gray-800">
          <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div className="border-b border-gray-700">
              <div className="flex items-center justify-between h-16 px-4 sm:px-0">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <img className="h-8 w-8" src="https://tailwindui.com/img/logos/workflow-mark-on-dark.svg" alt="Workflow logo" />
                  </div>
                  <div className="hidden md:block">
                    <div className="ml-10 flex items-baseline space-x-4">
                      <Link to="/" className={location.pathname === '/' ? linkStyles.focus : linkStyles.blur}>Home</Link>
                      <Link to="/about" className={location.pathname === '/about' ? linkStyles.focus : linkStyles.blur}>About</Link>
                    </div>
                  </div>
                </div>
                
                <div className="-mr-2 flex md:hidden">
                  <button onClick={() => toggleMobileMenu(!mobileMenu)} className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white">
                    {/* <!-- Menu open: "hidden", Menu closed: "block" --> */}
                    <svg className={`${mobileMenu ? 'hidden' : 'block'} h-6 w-6`} stroke="currentColor" fill="none" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                    {/* <!-- Menu open: "block", Menu closed: "hidden" --> */}
                    <svg className={`${mobileMenu ? 'block' : 'hidden'} h-6 w-6`} stroke="currentColor" fill="none" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className={`${mobileMenu ? 'block' : 'hidden'} border-b border-gray-700 md:hidden`}>
            <div className="px-2 py-3 space-y-1 sm:px-3">
              <Link to="/" className={`block ${location.pathname === '/' ? linkStyles.focus : linkStyles.blur}`}>Home</Link>
              <Link to="/about" className={`block ${location.pathname === '/about' ? linkStyles.focus : linkStyles.blur}`}>About</Link>
            </div>
          </div>
        </nav>
        <header className="py-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl leading-9 font-bold text-white">
              Whats Todo
            </h1>
          </div>
        </header>
      </div>

      <main className="-mt-32">
        <div className="max-w-7xl mx-auto pb-12 px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow px-5 py-6 sm:px-6">
            {children}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default Shell
