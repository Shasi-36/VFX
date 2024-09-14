import React, { useState } from 'react'

const SideNav = () => {
    const [show,setShow]=useState(false)
    return (
        <div className='sidenavcontainer'>
       
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
       )
}

export default SideNav
