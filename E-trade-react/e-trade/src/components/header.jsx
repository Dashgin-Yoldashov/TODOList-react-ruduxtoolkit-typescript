import React, { useState } from 'react'
import '../css/header.css'
import { Link, Outlet, Router } from 'react-router-dom'
import CustomizedBadges from '../MUI/BadgeUI'
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { color } from 'framer-motion';
import { useAccordion } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
function header() {
  const[search,setSearch] =useState();
  const{products}= useSelector((store)=>store.product)
  products && products.find((product)=>product.name === search)
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
                        <Box
                          component="form"
                          sx={{
                            '& > :not(style)': { m: 1, width: '35ch',color: 'white' } 
                          }}
                          noValidate
                          autoComplete="off"
                        >
                          <TextField onChange={(text)=>setSearch(text.value)} sx={{
                            '& > :not(style)': { color: 'white', fontSize: 14 } 
                          }} id="standard-basic" label="Click for search" variant="standard" />
                        </Box>
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
