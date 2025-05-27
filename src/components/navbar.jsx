import React, { act, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { HiBars2 } from "react-icons/hi2";
import { IoMdClose } from "react-icons/io";


import './navbar.css'

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
        <div className='menu-items' style={{width: '100%'}}>
          <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', padding: '0 2rem 0 2rem'}}>
            <h2>{pageTitle}</h2>
            <img src='src/assets/logo.svg'style={{position: 'absolute', left: '50%', transform: 'translateX(-50%)', height: '80px', width: '80px' }}></img>
            <div onClick={handleClick}>
              {active === false ? <HiBars2 className='nav-buttons'/> : <IoMdClose className='nav-buttons'/>}
            </div>
          </div>
        </div>
        <div className='menu-selection'>
          <NavLink className={active === false ? 'temp' : 'menu-links'} style={{ '--i': 0}} to='/'>
            Home
          </NavLink>
          <NavLink className={active === false ? 'temp' : 'menu-links'} style={{ '--i': 1}} to='residential'>
            Residential
          </NavLink>
          <NavLink className={active === false ? 'temp' : 'menu-links'} style={{ '--i': 2}} to='commercial'>
            Commercial
          </NavLink>
          <NavLink className={active === false ? 'temp' : 'menu-links'} style={{ '--i': 3}} to='contact'>
            Contact
          </NavLink>
          <NavLink className={active === false ? 'temp' : 'menu-links'} style={{ '--i': 4}} to='about'>
            AboutUs
          </NavLink>
        </div>
        <div className='navbar-items'>
          <NavLink style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }} to='/'>
            <img src='src/assets/logo.svg' style={{ height: '30px', width: '30px' }}></img>
            <p style={{ whiteSpace: 'nowrap'}}>GE Painters</p>
          </NavLink>
        </div>
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
      </div>
    </nav>
  )
}
