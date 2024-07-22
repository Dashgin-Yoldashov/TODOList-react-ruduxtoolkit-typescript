import React from 'react'
import '../css/header.css'
import { Link, Outlet, Router } from 'react-router-dom'
import CustomizedBadges from '../MUI/BadgeUI'

function header() {
  return (
    <> 
        <nav className='navbar'>
            <div className='container'>
                <div>
                    <h1><Link className='link' to="/">Trade</Link></h1>
                </div>
                <div className='navbar-collapse' id="navbarNav">
                    <ul className='navbar-nav'>
                      <li className='nav-item'>
                        <Link className='link' to="/buy">Buy</Link>
                      </li>
                      <li className='nav-item'>
                        <Link className='link' to="/sell">Sell</Link>
                      </li>
                      <li className='nav-item'>
                        <Link className='link' to="/rent">Rent</Link>
                      </li>
                      <li className='nav-item'>
                        <Link className='link' to="/badge"><CustomizedBadges/></Link>
                      </li>
                    </ul>
                </div>
            </div>
        </nav>
        <Outlet/>
    </>
  )
}

export default header
