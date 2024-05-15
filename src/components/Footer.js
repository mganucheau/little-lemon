import React from 'react';
import logo from '../images/small_logo.png';
import { Link } from 'react-router-dom';
import { FaPhone, FaEnvelope, FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import { MdLocationOn } from 'react-icons/md';

const navLinks = ["Home", "About", "Menu", "Reservations", "Order", "Login"];

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700  ">
      <div className="max-w-5xl mx-auto  py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <div className='company-info flex flex-col items-start text-start'>
          <img src={logo} alt="Logo" className="w-20 cursor-pointer mb-4" />
        </div>
        <div className="text-start">
          <h3 className="text-lg font-semibold mb-3">Pages</h3>
          <ul className="space-y-2">
            {navLinks.map((link, index) => (
              <li key={index}><Link to="/" className="hover:underline">{link}</Link></li>
            ))}
          </ul>
        </div>
        <div className="text-start">
          <h3 className="text-lg font-semibold mb-3">Keep In Touch</h3>
          <ul className="space-y-2">
            <li className="flex items-center"><MdLocationOn className="mr-2"/>1234 Memorly Lane</li>
            <li className="flex items-center"><FaPhone className="mr-2"/>(555) 555-555</li>
            <li className="flex items-center"><FaEnvelope className="mr-2"/>info@littlelemon.com</li>
          </ul>
        </div>
        <div className="text-start">
          <h3 className="text-lg font-semibold mb-3">Let's Be Friends</h3>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:underline flex items-center"><FaFacebookF className="mr-2"/>Facebook</Link></li>
            <li><Link to="/" className="hover:underline flex items-center"><FaInstagram className="mr-2"/>Instagram</Link></li>
            <li><Link to="/" className="hover:underline flex items-center"><FaTwitter className="mr-2"/>Twitter</Link></li>
          </ul>
        </div>
      </div>
      <div className='final-footer text-center text-white p-3'>
          <p> Little Lemon 2024 © All rights reserved</p>
      </div>
    </footer>
  );
}

export default Footer;