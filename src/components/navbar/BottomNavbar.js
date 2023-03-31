import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import './Navbar.css'

const BottomNavbar = () => {
    return (
        <div className='bottom-nav lg:px-16'>
            <div className='flex items-center relative'>
                <GiHamburgerMenu className='text-xl absolute'></GiHamburgerMenu>
                <select className="">
                    <option disabled selected>BROWSE CATEGORIES</option>
                    <option>Jeans</option>
                    <option>Shirts</option>
                    <option>T-Shirts</option>
                    <option>Shoes</option>
                </select>
                <ul className='flex'>
                    <li className='border-l-2 border-slate-700'>Home</li>
                    <li>Shop</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Dashboard</li>
                </ul>
            </div>
            <div>

            </div>
            
        </div>
    );
};

export default BottomNavbar;