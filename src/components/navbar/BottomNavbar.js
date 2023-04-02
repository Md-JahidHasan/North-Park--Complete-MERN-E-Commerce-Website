import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Navbar.css'
import { RiSearchLine } from 'react-icons/ri';

const BottomNavbar = () => {


    const [input, setInput] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(e);
    }


    return (
        <div className='bottom-nav bg-[#FCD12A] flex items-center justify-between'>

            {/* =========== For Large Screen =========== */}
            <div className='md:flex items-center relative hidden  px-8 lg:px-16'>
                <GiHamburgerMenu className='text-xl absolute'></GiHamburgerMenu>
                <select className="bg-[#FCD12A] outline-none ">
                    <option disabled selected>BROWSE CATEGORIES</option>
                    <option>Jeans</option>
                    <option>Shirts</option>
                    <option>T-Shirts</option>
                    <option>Shoes</option>
                </select>
                <ul className='flex'>
                    <li className='border-l-2 ml-2 border-[#002828] py-2 px-2 lg:px-4 '>Home</li>
                    <li className=' py-2 px-2 lg:px-4 '>Shop</li>
                    <li className=' py-2 px-2 lg:px-4 '>About</li>
                    <li className=' py-2 px-2 lg:px-4 '>Contact</li>
                    <li className=' py-2 px-2 lg:px-4 '><Link to='/dashboard'>Dashboard</Link></li>
                </ul>
            </div>


            {/* =========== For Small Screen =========== */}
            <div className='md:hidden'>
                <div className="dropdown main-navbar bg-amber-400">
                    <label tabIndex={0} className="btn btn-ghost ">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-yellow-400 rounded-box w-52">
                        <li><Link to='/'>Home</Link></li>
                        <li tabIndex={0}>
                            <a className="justify-between">
                                Category<svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                            </a>
                            <ul className="p-2">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </li>
                        <li><a>Shop</a></li>
                        <li><a>Blog</a></li>
                        <li><a>About</a></li>
                        <li><a>Contact</a></li>
                        <li><label htmlFor="dashboard-drawer-np" className="btn btn-primary drawer-button lg:hidden">Open drawer</label></li>
                    </ul>
                </div>
            </div>

            <div className=' w-3/4 sm:w-2/3 md:hidden'>
                <form className='flex items-center w-full' onSubmit={handleSubmit}>
                    <input
                        className="bg-white outline-none border-none h-8 px-8 rounded-l w-full"
                        type="search"
                        name="search"
                        placeholder="Search Product"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                    />
                    <button
                        className='bg-white h-8 px-4 rounded-r'
                        type='submit'
                    >
                        <RiSearchLine className='text-[#000033] text-2xl'></RiSearchLine>
                    </button>
                </form>
            </div>

            <div className='p-3 md:px-8 lg:px-16'>
                <FaUserAlt className='scale-110 drop-shadow-xl'></FaUserAlt>
            </div>
            
        </div>
    );
};

export default BottomNavbar;