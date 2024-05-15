import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import logo from '../images/Logo.svg';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const navLinks = ["Home", "About", "Menu", "Reservations", "Order", "Login"];

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }

    return (
        <header className="flex justify-between items-center max-w-5xl mx-auto my-5 px-2 w-full">
            <Link to="/" className="shrink-0">
                <img src={logo} alt="Logo" className="cursor-pointer" />
            </Link>
            <div>
                <button className={`menu-icon block lg:hidden ${menuOpen ? 'text-white' : 'text-black'}`} onClick={toggleMenu}>
                    <GiHamburgerMenu size={30} />
                </button>
                <ul className={`nav-links ${menuOpen ? "flex" : "hidden"} flex-col absolute lg:static lg:flex lg:flex-row lg:items-center top-full right-0 w-full lg:w-auto bg-gray-900 lg:bg-transparent transition-all duration-300 ease-in-out z-30`}>
                    {navLinks.map((link, index) => (
                        <li key={index} className="text-white hover:text-gray-200 lg:text-black lg:hover:text-gray-700 p-2 lg:p-4">
                            <a href="/" className="no-underline hover:underline">{link}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </header>
    );
}

export default Header;
