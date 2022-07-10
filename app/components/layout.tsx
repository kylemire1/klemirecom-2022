import { Link } from '@remix-run/react'
import React from 'react'
import Footer from './footer'

const Layout = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div>
      <nav className='container flex justify-between py-8'>
        <div>
          <Link to='/'>
            <h1 className='mr-4 text-2xl font-semibold'>Kyle Lemire</h1>
          </Link>
        </div>
        <ul className='flex items-center justify-center gap-7'>
          <li>
            <Link to='/#experience'>Experience</Link>
          </li>
          <li>
            <Link to='/#about'>About</Link>
          </li>
          <li>
            <Link to='/contact'>Contact</Link>
          </li>
        </ul>
      </nav>
      {children}
      <Footer />
    </div>
  )
}

export default Layout
