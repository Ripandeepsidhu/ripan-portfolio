import React from "react";
import './header.css';
import {NavLink,Link} from "react-router-dom";
import { useState } from "react";
const Header=()=>{
    const [menuOpen,setMenuOpen]= useState(false);
    
  
  return(
      <>
     <nav>
        <div>
     <Link className="title" to="/"> R..</Link></div>
     <div className="menu" onClick={() =>
     setMenuOpen(!menuOpen)}>
     <span></span>
     <span></span>
     <span></span>
     </div>
     <ul className={menuOpen ? "open" : "" }>
        
        <li>
          <NavLink activeClass='active' to="/about"> About</NavLink>
        </li>
        <li>
          <NavLink activeClass='active' to="/myworks">My Works</NavLink>
         </li>
         <li>
          <NavLink activeClass='active' to="/contactme">Contact Me</NavLink>
        </li>
      </ul>
      </nav></>
      );
  
  
   };
   export default Header;

   /*{
const Header = () => {
    return(
        <nav className="header">
            <div><h1>R.</h1></div>
           
        <div className="list" className={menuOpen ? "open" : "" }>
                <Link activeClass='active'  className="listitem" to="/">Home</Link>
                <NavLink activeClass='active'  className="listitem" to="/about">About</NavLink>
                <NavLink activeClass='active'  className="listitem" to="/myworks">My Works</NavLink>
                <NavLink activeClass='active' className="listitem" to="/contactme">Contact Me</NavLink>
            </div>
        </nav>
    )
}
   }
   
   
   
   <ul className={menuOpen ? "open" : "" }>
        <li>
          <NavLink to="/register"> Register user</NavLink>
        </li>
        <li>
          <NavLink to="/login">Log in</NavLink>
         </li>
      </ul>
   
   */