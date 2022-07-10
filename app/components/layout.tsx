import { Link, NavLink } from '@remix-run/react'
import React from 'react'
import Footer from './footer'

const Layout = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div>
      <nav className='container flex justify-between py-8'>
        <div>
          <Link to='/'>
            <h1 className='mr-4 text-2xl font-bold'>Kyle Lemire</h1>
          </Link>
        </div>
        <ul className='flex items-center justify-center gap-7'>
          <li>
            <NavLink to='/#experience'>Experience</NavLink>
          </li>
          <li>
            <NavLink to='/#about'>About</NavLink>
          </li>
          <li>
            <NavLink to='/contact'>Contact</NavLink>
          </li>
        </ul>
      </nav>
      {children}
      <Footer />
    </div>
  )
}

export default Layout
