import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navbar from '../components/navbar/Navbar';

const DashbordLayout = () => {
    return (
        <div>
            <Navbar></Navbar>

            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer-np" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center bg-teal-200">

                    {/* <!-- Page content here --> */}

                    <Outlet></Outlet>

                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer-np" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                        {/* <!-- Sidebar content here --> */}
                        <li><Link to='/dashboard'>My Orders</Link></li>
                        <li><Link to='/dashboard/addProduct'>Add Product</Link></li>
                        <li><Link to='/dashboard/allProducts'>All Product</Link></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashbordLayout;