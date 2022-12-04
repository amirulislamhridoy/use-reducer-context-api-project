import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    return (
        <nav>
            <Link to='/'>Home</Link>
            <Link to='/selected'>Selected</Link>
        </nav>
    );
};

export default Navbar;