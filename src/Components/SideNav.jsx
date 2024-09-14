
import { Link } from 'react-router-dom'
import { links } from '../Routes/routes'
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from 'react';
const SideNav = () => {
  const [show,setShow]=useState(false)

  const clickHandler=(e)=>{
    setShow(!show)
  }
    return (
      <>
        <div className={show ? "sidenavshow":"sidenav"}>
       
         <div className="sidenavsection">
             <ul className='sidenavitems'>
             {
           links.length>0 && links.map((list, index)=>{
             return <Link className='sideitem' key={index} to={list.to}>{list.link}</Link>
           })
          }
             </ul>
         </div>
     
        </div>
            <div className="hamburger" onClick={clickHandler}>
            <GiHamburgerMenu />
            </div>
            </>
       )
}

export default SideNav
