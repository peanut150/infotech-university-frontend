import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";

import "./navbar.css";
import Logo from "./logoUni.png";
import NavBarButton from '../navbar button';

export default function Navbar() {

    const [Mobile, setMobile] = useState(false)

    return (
        <nav className='navbar'>
            <img src={Logo} alt='Logo' />
            <h3 className='schoolName'>INFOTECH UNIVERSITY</h3>

            <ul className={Mobile? "nav-links-mobile" : "nav-links"} onClick={() => setMobile(false)}>
                <Link to='/'>
                    <li>Home</li>
                </Link>

                <Link to='/about'>
                    <li>About</li>
                </Link>

                <Link to='/contact'>
                    <li>Contact</li>
                </Link>

                <Link to='/signup'>
                    <li> <NavBarButton /> </li>
                </Link>
            </ul>

                <button className='mobile-menu-icon' onClick={() => setMobile(!Mobile)}>
                    {Mobile? <ImCross /> : <FaBars />}
                </button>
        </nav>
    )
}
