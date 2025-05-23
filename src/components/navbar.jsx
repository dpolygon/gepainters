import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className='navbar-wrapper'>
      <nav className='navbar'>
          <Link className='navbar-items' to='/'>
            <img src='src/assets/logo.svg' style={{display: 'inline', height: '20px', width: '20px', scale: '1.5', filter: 'invert(100%) sepia(83%) saturate(7500%) hue-rotate(210deg) brightness(115%) contrast(115%)'}}></img>
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
