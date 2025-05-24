import React, { act, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { HiBars2 } from "react-icons/hi2";
import { IoMdClose } from "react-icons/io";


import './navbar.css'

export default function Navbar() {

  const [active, setActive] = useState(false)
  const handleClick = () => {
    setActive(!active)
    console.log('that tickled')
  }

  return (
      <nav className={active === false ? 'navbar' : 'navbar active'}>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%'}}>
              <Link className='menu-item' style={{alignItems: 'center'}} to='/'>
                  <img src='src/assets/logo.svg' style={{display: 'inline', height: '20px', width: '20px', scale: '1.5'}}></img>
                  <p style={{whiteSpace: 'nowrap', fontSize: '1.7rem', fontWeight: '700', marginLeft: '1rem'}}>G.E. Painters</p>
              </Link>
              {active === false ? <HiBars2 onClick={handleClick} className='menu-item' style={{scale: '2', padding: '2rem'}}/> : <IoMdClose  onClick={handleClick} className='menu-item' style={{scale: '2', padding: '2rem'}}/>}

            </div>
          <Link className='navbar-items fs' to='/'>
            <img src='src/assets/logo.svg' style={{display: 'inline', height: '20px', width: '20px', scale: '1.5', filter: 'invert(100%)'}}></img>
          </Link>
          <NavLink className='navbar-items fs' to='residential'>
            Residential
          </NavLink>
          <NavLink className='navbar-items fs' to='commercial'>
            Commercial
          </NavLink>
          <NavLink className='navbar-items fs' to='contact'>
            Contact
          </NavLink>
          <NavLink className='navbar-items fs' to='about'>
            AboutUs
          </NavLink>
      </nav>
        )
}
