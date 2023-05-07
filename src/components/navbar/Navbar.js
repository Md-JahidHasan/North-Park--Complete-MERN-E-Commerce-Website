import React, { useContext } from 'react';
import logo from '../../assets/images/np-logo.png'
import { RiSearchLine } from "react-icons/ri";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import './Navbar.css';


const Navbar = () => {
    const { logOutUser, user } = useContext(AuthContext);
    // console.log(user);
    const handleLogout = () =>{
        logOutUser()
        .then(()=>{

        })
        .catch(()=>{

        })
    }
    return (
        <div className="navbar z-20 bg-amber-400">
            <div className="navbar-start">

                {/* ========= for small screen ========== */}
                <div className="dropdown main-navbar">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
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
                        <li><Link to='/shop'>Shop</Link></li>
                        <li><a>Blog</a></li>
                        <li><a>About</a></li>
                        <li><a>Contact</a></li>
                        <li><label htmlFor="dashboard-drawer-np" className="btn btn-primary drawer-button lg:hidden">Open drawer</label></li>
                    </ul>
                </div>

                {/* =========== Name and logo =========== */}
                <div className='border-[1px] lg:ml-8 border-[#002828] bg-[#002828] rounded-[15px] overflow-hidden w-12 sm:w-14 h-12 sm:h-14 mx-2 sm:mx-3'>
                    <img className='h-full' src={logo} alt="" />
                </div>
                <h1 className=" normal-case sm:text-2xl font-serif text-[#002828] font-bold">North Park</h1>

            </div>


            <div className="navbar-center hidden lg:flex main-navbar">
                <ul className="menu menu-horizontal px-1">
                    <li><Link to='/'>Home</Link></li>
                    <li tabIndex={0}>
                        <a>
                            Category<svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                        </a>
                        <ul className="p-2 z-30">
                            <li><a>Shirt</a></li>
                            <li><a>Pant</a></li>
                            <li><a>T-Shirt</a></li>
                            <li><a>Shoe</a></li>
                        </ul>
                    </li>
                    <li><Link to='/shop'>Shop</Link></li>
                    <li><a>About</a></li>
                    <li><a>Contact</a></li>
                    <li><Link to='/dashboard'>Dashboard</Link></li>
                </ul>
            </div>
            <div className="navbar-end">
                <div>
                    <RiSearchLine className='text-2xl'></RiSearchLine>
                </div> 
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle">
                            <div className="indicator">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                <span className="badge badge-sm indicator-item">8</span>
                            </div>
                    </label>
                    <div tabIndex={0} className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">
                        <div className="card-body">
                            <span className="font-bold text-lg">8 Items</span>
                            <span className="text-info">Subtotal: $999</span>
                            <div className="card-actions">
                                    <button className="btn btn-primary btn-block">View cart</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img alt='' src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" />
                        </div>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li>
                            <a className="justify-between">
                                    Profile
                                <span className="badge">New</span>
                            </a>
                        </li>
                            <li><a>**{user?.displayName}</a></li>
                            <li><Link to='/signup'>SignUp</Link></li>
                            <li><Link to='/login'>Login</Link></li>
                            <li><button onClick={handleLogout}>Logout</button></li>
                        </ul>
                </div>
            </div>
        </div>
    );
};


export default Navbar;