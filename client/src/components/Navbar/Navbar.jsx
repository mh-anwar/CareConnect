// navbar component

import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <div className="navbar-container">
            <a className="accent" href="/">
                (icon)
                CareConnect
            </a>
            <div className="navbar__right">
                <a href="/\">Home</a>
                <a href="/Appointments">Appointments</a>
                <a href="/Clinics">Clinics</a>
                <a href="/Login">Login</a>
            </div>
        </div>
    )
}

export default Navbar;