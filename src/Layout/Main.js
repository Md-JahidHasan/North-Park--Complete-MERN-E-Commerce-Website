import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/footer/Footer';
import BottomNavbar from '../components/navbar/BottomNavbar';
import TopNavbar from '../components/navbar/TopNavbar';

const Main = () => {
    return (
        <div>
            <TopNavbar></TopNavbar>
            <BottomNavbar></BottomNavbar>
            <main className='bg-[#F6F6F2] min-h-[calc(100vh)]'>
                <Outlet></Outlet>
            </main>
            <Footer></Footer>
        </div>
    );
};

export default Main;