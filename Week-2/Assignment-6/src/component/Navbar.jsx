import React from 'react';
import './Navbar.css';
import { FcHome, FcAbout, FcServices } from 'react-icons/fc';
import { GrMail } from 'react-icons/gr';

const Navbar = () => {
  return (
    <nav className="nav-container">
      <a href="../build">Website Title / Logo</a>
      <div className="nav-items">
        <a href="#Home">
          Home
          <FcHome size={25} />
        </a>
        <a href="#About">
          About
          <FcAbout size={25} />
        </a>
        <a href="#Services">
          Services
          <FcServices size={25} />
        </a>
        <a href="#Contact">
          Contact
          <GrMail size={25} />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
