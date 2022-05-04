import React from 'react'
import { Link } from 'react-router-dom';
import "./Navbar.css"

function Navbar() {
  return (
    <div>
       <nav className='nav'>
        <ul>
            <div className='header'>
                <Link to = "/" className='item'>Home</Link>
                <Link to = "/governance" className='item'><span>Governance</span></Link>
                <Link to = "/transfer" className='item'>Transfer</Link>
                <Link to = "/about" className='item'>About Us</Link>
            </div>
        </ul>
    </nav>
    </div>
  )
}

export default Navbar