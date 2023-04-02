import React, { useState } from 'react';
import { RiSearchLine } from "react-icons/ri";
import { HiOutlineShoppingCart } from 'react-icons/hi';
import { AiOutlineHeart } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/np-logo.png'


const TopNavbar = () => {

    const [input, setInput] = useState('')
    const handleSubmit =(e)=>{
        e.preventDefault()
        console.log(e);
    }
    return (
        <div className='navbar bg-[#002828] px-4 py-3'>
            <div className='flex items-center navbar-start'>
                <div className='border-[1px] border-yellow-500 rounded-[15px] overflow-hidden w-12 h-12 mx-3'>
                    <img src={logo} alt="" />
                </div>
                <h1 className='text-[#FCD12A] font-serif text-xl sm:text-2xl md:text-3xl'>Noth Park</h1>
            </div>

            {/*========= Search Field ==========*/}
            <div className='hidden md:flex navbar-center w-2/5'>
                <form className='flex items-center w-full' onSubmit={handleSubmit}>
                    <input
                        className="bg-white outline-none border-none h-10 px-8 rounded-l w-full"
                        type="search"
                        name="search"
                        placeholder="Search Product"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                    />
                    <button
                        className='bg-[#FCD12A] h-10 px-4 rounded-r'
                        type='submit'
                    >
                        <RiSearchLine className='text-[#000033] text-2xl'></RiSearchLine>
                    </button>
                </form>
            </div>


            <div className="navbar-end">

                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle">
                        <div className="indicator">
                            <AiOutlineHeart className=' text-2xl text-[#FCD12A] hover:scale-125 hover:drop-shadow-[0_1px_1px_#00918f] duration-100'></AiOutlineHeart>
                            
                        </div>
                    </label>
                    <div tabIndex={0} className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">
                        <div className="card-body">
                            <span className="font-bold text-lg">8 Items</span>
                            <span className="text-info">Subtotal: $999</span>
                            <div className="card-actions">
                                <button className="btn bg-[#002828] btn-block">View wishlist</button>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle">
                        <div className="indicator hover:scale-125 hover:drop-shadow-[0_1px_1px_#00918f] duration-100">
                            <HiOutlineShoppingCart className='text-2xl text-[#FCD12A] '></HiOutlineShoppingCart>
                            <span className="badge badge-sm indicator-item bg-red-500 hover:scale-110">8</span>
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
                
                
            </div>
        </div>
    );
};

export default TopNavbar;