import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/footer/Footer';
import Navbar from '../components/navbar/Navbar';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <main className='bg-[#F6F6F2] min-h-[calc(100vh)]'>
                <Outlet></Outlet>
            </main>
            <Footer></Footer>
        </div>
    );
};

export default Main;