import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navbar from '../components/navbar/Navbar';

const DashbordLayout = () => {
    return (
        <div>
            <Navbar></Navbar>

            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer-np" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center bg-[#002828]">

                    {/* <!-- Page content here --> */}

                    <Outlet></Outlet>

                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer-np" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-amber-400 text-base-content ">
                        {/* <!-- Sidebar content here --> */}
                        <li><Link to='/dashboard'>My Orders</Link></li>
                        <li><Link to='/dashboard/addProduct'>Product Upload</Link></li>
                        <li><Link to='/dashboard/allProducts'>All Products</Link></li>
                        <li><Link to='/dashboard/wishLists'>My Wishlist</Link></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashbordLayout;