import React from 'react'
import { NavLink } from 'react-router-dom'


export default function Navbar() {
  return (
    <nav>
        <NavLink style={{marginRight: '30px'}} className='navbar' to='residential'>
            Residential
        </NavLink>
        <NavLink className='navbar' to='commercial'>
            Commercial
        </NavLink>
    </nav>
  )
}
