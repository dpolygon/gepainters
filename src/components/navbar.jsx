import React, { act, useState } from 'react'
import './navbar.css'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { HiBars2 } from "react-icons/hi2";
import { IoMdClose } from "react-icons/io";

export default function Navbar() {

  const [active, setActive] = useState(false)
  const handleClick = () => {
    setActive(!active)
    console.log('that tickled')
  }

  const routeTitles = {
    '/': 'Home',
    '/residential': 'Residential',
    '/commercial': 'Commercial',
    '/contact': 'Contact',
    '/about': 'About Us',
  };

  const location = useLocation();
  const pageTitle = routeTitles[location.pathname];



  return (

    <nav className='navbar'>
      <div className={active === false ? 'navbar-content' : 'navbar-content active'}>
        <div className='menu-items' style={{ width: '100%' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', padding: '0 2rem 0 2rem' }}>
            <h2 style={{cursor: 'default'}}>{pageTitle}</h2>
            <img onClick={() => window.location.href = '/'}
              src='src/assets/logo.svg'
              style={{
                position: 'absolute',
                left: '50%',
                transform: 'translateX(-50%)',
                height: '80px',
                width: '80px',
                cursor: 'pointer'
              }}
            />
            <div onClick={handleClick}>
              {active === false ? <HiBars2 className='nav-buttons' /> : <IoMdClose className='nav-buttons' />}
            </div>
          </div>
        </div>
        <div className='menu-selection'>
          <NavLink onClick={handleClick} className={active === false ? 'temp' : 'menu-links'} style={{ '--i': 0, textDecoration: 'none' }} to='/'>
            Home
          </NavLink>
          <NavLink onClick={handleClick} className={active === false ? 'temp' : 'menu-links'} style={{ '--i': 1, textDecoration: 'none' }} to='residential'>
            Residential
          </NavLink>
          <NavLink onClick={handleClick} className={active === false ? 'temp' : 'menu-links'} style={{ '--i': 2, textDecoration: 'none' }} to='commercial'>
            Commercial
          </NavLink>
          <NavLink onClick={handleClick} className={active === false ? 'temp' : 'menu-links'} style={{ '--i': 3, textDecoration: 'none' }} to='contact'>
            Contact
          </NavLink>
          <NavLink onClick={handleClick} className={active === false ? 'temp' : 'menu-links'} style={{ '--i': 4, textDecoration: 'none' }} to='about'>
            About Us
          </NavLink>
        </div>
        <NavLink className='navbar-items' to=''>
          Home
        </NavLink>
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
          About Us
        </NavLink>
      </div>
    </nav>
  )
}
