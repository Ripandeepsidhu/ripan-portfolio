import React from "react";
import './header.css';
import {NavLink,Link} from "react-router-dom";
const Header = () => {
    return(
        <nav className="header">
            <div><h1>R.</h1></div>
            <div className="list">
                <Link  className="listitem" to="/">Home</Link>
                <NavLink  className="listitem" to="/about">About</NavLink>
                <NavLink  className="listitem" to="/myworks">My Works</NavLink>
            </div>
            <button className="contact-btn">Contact me</button>
        </nav>
    )
}
export default Header;