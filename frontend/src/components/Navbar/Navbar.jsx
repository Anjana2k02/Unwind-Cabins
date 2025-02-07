import React, { useState } from 'react';

import './Navbar.css';

import { Link } from 'react-router-dom';
import { FaUser } from "react-icons/fa";
import logo from '../../assets/logo.png';

const Navbar = ({ setShowLogin }) => {
    const [menu, setMenu] = useState("home");

    return (
        <div className='navbar'>
            <img src={logo} alt="Logo" className="logo" />
            <ul className='navbar-menu'>
                <li>
                    <Link to='/' onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>Our cabins</Link>
                </li>
                <li>
                    <a href='#get-inspire' onClick={() => setMenu("menu")} className={menu === "menu" ? "active" : ""}>Get inspired</a>
                </li>
                <li>
                    <a href='#giftastay' onClick={() => setMenu("instructions")} className={menu === "instructions" ? "active" : ""}>Gift a stay</a>
                </li>
                <li>
                    <a href='#footer' onClick={() => setMenu("contact-us")} className={menu === "contact-us" ? "active" : ""}>About Us</a>
                </li>
            </ul>
            <div className="navbar-right">
                
            <button onClick={() => setShowLogin(true)}>  <FaUser />  </button>
            </div>
        </div>
    );
};

export default Navbar;
