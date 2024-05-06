import React from 'react'
import { NavLink } from 'react-router-dom'
import { IoHomeSharp } from "react-icons/io5";
import { FaWarehouse } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { RiInformation2Fill } from "react-icons/ri";


export default function Navbar() {
  return (
    <nav style={{display: 'flex', alignItems: 'center'}}>
        <IoHomeSharp style={{fontSize: '16px'}}/>
        <NavLink style={{marginRight: '30px'}} className='navbar' to='residential'>
          Residential
        </NavLink>
        <FaWarehouse style={{fontSize: '18px'}}/> 
        <NavLink style={{marginRight: '30px'}} className='navbar' to='commercial'>
          Commercial
        </NavLink>
        <FaPhone style={{fontSize: '15px'}}/>
        <NavLink style={{marginRight: '30px'}} className='navbar' to='contact'>
          Contact
        </NavLink>
        <RiInformation2Fill style={{fontSize: '20px'}}/>
        <NavLink className='navbar' to='about'>
          AboutUs
        </NavLink>
    </nav>
  )
}
