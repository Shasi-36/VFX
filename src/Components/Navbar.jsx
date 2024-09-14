import React, { useState } from 'react'

import { Link } from 'react-router-dom'
import {links} from "../Routes/routes"





const Navbar = () => {

  
  return (
    <>
    
   <div className='navcontainer'>
    <div className="logo">
        logo
    </div>
    <div className="Navsection">
        <ul className='navitems'>
        {
      links.length>0 && links.map((list, index)=>{
        return <Link className='item' key={index} to={list.to}>{list.link}</Link>
      })
     }
        </ul>
    </div>
   
 
   </div>
 
   </>
  )
}

export default Navbar
