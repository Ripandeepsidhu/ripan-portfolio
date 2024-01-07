import React from "react";
import './header.css';
import {Link} from "react-scroll";
const Header = () => {
    return(
        <nav className="header">
            <div><h1>R.</h1></div>
            <div className="list">
            <Link className="listitem">Home</Link>
                <Link className="listitem">About</Link>
                <Link className="listitem">Portfolio</Link>
            </div>
            <button className="contact-btn">Contact me</button>
        </nav>
    )
}
export default Header;