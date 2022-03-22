import React from 'react';
import logoImage from '../../images/Logo.svg'
import './Header.css'

const Header = () => {
    return (
        <nav className='main-header'>
            <img src={logoImage} alt="Logo-Image" />
            <ul>
                <li><a href="">Shop</a></li>
                <li><a href="">Order</a></li>
                <li><a href="">Order Review</a></li>
                <li><a href="">Manage Inventory</a></li>
            </ul>
        </nav>
    );
};

export default Header;