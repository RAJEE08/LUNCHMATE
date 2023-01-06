import React from 'react';
import './Navbar.css';
import logo from './logo.png'

 const Navbar = () => {
  return (
     <div className='nav'>
        < img src ={logo} className='logoic' alt='' />
        <div className='topnav'>
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
        </div>
     </div>
  )
}

export default Navbar
