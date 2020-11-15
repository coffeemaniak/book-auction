import React from "react";
import {Link} from "react-router-dom";
import "./header.css";
import logo from "./logo.png";

const Header = () => {
    return(
        <header className="main_header">
            <div className="main_header-left">
            <span><img src={logo} alt="logo" className="header_logo"></img></span>
            <Link to="/" className="header_link">
                Main page
            </Link>
            <Link to="/catalog" className="header_link">
                Catalog
            </Link>
            <Link to="/about" className="header_link">
                About Us
            </Link>
            </div>
            <div className="main_header-right">
                <Link to="/login" className="header_link">
                    Log in
                </Link>
                <Link to="/join" className="header_link"> 
                    Join Us
                </Link>
            </div>
        </header>
    )
}

export default Header;