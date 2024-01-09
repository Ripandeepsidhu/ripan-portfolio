import React from "react";
import './header.css';
import {NavLink,Link} from "react-router-dom";
const Header = () => {
    return(
        <nav className="header">
            <div><h1>R.</h1></div>
            <div className="list">
                <Link activeClass='active'  className="listitem" to="/">Home</Link>
                <NavLink activeClass='active'  className="listitem" to="/about">About</NavLink>
                <NavLink activeClass='active'  className="listitem" to="/myworks">My Works</NavLink>
                <NavLink activeClass='active' className="listitem" to="/contactme">Contact Me</NavLink>
            </div>
        
        </nav>
    )
}
export default Header;