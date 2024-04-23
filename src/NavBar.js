import React from "react";
import { NavLink } from "react-router-dom";
import './index.css'

function NavBar() {
    return (
        <nav className="navbar">
            <ul>
                <li>
                    <NavLink to="/" activeClassName="active">Home</NavLink>
                </li>
                <li>
                    <NavLink to="src/about" onClick={console.log('about page loaded')} activeClassName="active">About</NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;
