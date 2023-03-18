import React, { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const LogIn = () => {
    // ========== Password show / Hide handling in password field ========= 
    const [showPassword, setShowPassword] = useState(false);
    const handleShowPassword = () => {
        setShowPassword(preve => !preve)
    }

    const [data, setData] = useState({
        email: "",
        password: ""
    })
    const handleOnChange = (e) =>{
        const {name, value} = e.target;
        setData((prev)=>{
            return {
                ...prev,
                [name] : value
            }
        })
    }
console.log('login', data);

    const handleSubmit = () =>{

    }

    return (
        <div className='p-2 md:p-4'>
            <div className='bg-[#BADFE7] w-full max-w-sm m-auto shadow-md hover:shadow-sm flex  flex-col p-2 rounded-sm'>

                <div className='m-auto'>
                    <img className='w-12 h-12 rounded-full drop-shadow-md mt-6' src="https://cdn.dribbble.com/users/166512/screenshots/4725462/untitled-2.gif" alt="" />
                </div>
                <h1 className='text-center text-2xl font-bold text-[#6FB3B8] drop-shadow-sm'>Sign up</h1>

                <form onSubmit={handleSubmit} action="" className='w-full py-3  flex flex-col '>


                    <label htmlFor="email">Email</label>
                    <input
                        id='email'
                        name='email'
                        className='w-full p-1 rounded-sm mt-1 mb-2 bg-white focus-within:outline focus-within:outline-[#388087] border-none'
                        type="email"
                        required
                        value={data.email}
                        onChange={handleOnChange}
                    />


                    <label htmlFor="password">Password</label>
                    <div className='flex items-center rounded-sm mt-1 mb-2 bg-white focus-within:outline focus-within:outline-1 focus-within:outline-[#388087]'>
                        <input
                            id='password'
                            name='password'
                            className='w-full p-1 border-none outline-none'
                            type={showPassword ? 'text' : 'password'}
                            required
                            value={data.password}
                            onChange={handleOnChange}
                        />
                        <span onClick={handleShowPassword} className='flex text-xl mr-2'>
                            {
                                showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />
                            }
                        </span>
                    </div>

                    <button className='w-full m-auto max-w-[150px] bg-[#6FB3B8] hover:bg-[#388087] font-medium text-xl hover:text-white py-1 rounded-full mt-4'>Sign up</button>

                </form>
                <p className='text-sm mt-3 mb-4'>Already have an account? Please <Link to='/signup' className='text-[#388087] font-bold border-b-[1px] border-[#388087]'>Sign up</Link></p>
            </div>
        </div>
    );
};

export default LogIn;