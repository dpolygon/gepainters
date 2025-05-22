import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className='navbar-wrapper'>
      <nav className='navbar'>
          <Link className='navbar-items' to='/'>
            GEPainters
          </Link>
          <NavLink className='navbar-items' to='residential'>
            Residential
          </NavLink>
          <NavLink className='navbar-items' to='commercial'>
            Commercial
          </NavLink>
          <NavLink className='navbar-items' to='contact'>
            Contact
          </NavLink>
          <NavLink className='navbar-items' to='about'>
            AboutUs
          </NavLink>
      </nav>
    </div>
  )
}
