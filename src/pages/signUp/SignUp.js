import { async } from '@firebase/util';
import React, { useContext, useState } from 'react';
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const SignUp = () => {

    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';

    // ========== Password show / Hide handling in password field ========= 
    const [showPassword, setShowPassword] = useState(false);
    const handleShowPassword = () =>{
        setShowPassword(preve => !preve)
    }
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const handleShowConfirmPassword = () =>{
        setShowConfirmPassword(preve => !preve)
    }


    const { createUser, updateUser } = useContext(AuthContext)


    // =========== Handle form data =============
    const [data, setData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        profileImage: "",
        role: "Customer"
    })


    const handleOnChange = (e) =>{
        const {name, value} = e.target;
        setData((prev)=>{
            return {
                ...prev,
                [name]: value
            }
        })
    }
    // console.log(process.env.REACT_APP_SERVER_DOMAIN, process.env.REACT_APP_imgbb_API_key);
    
    
    // =========== handle profile image upload ===========
    const handlUploadProfileImage = (e) => {
        const imageHostKey = process.env.REACT_APP_imgbb_API_key;
        const photo = e.target.files[0];
        const formData = new FormData();
        formData.append('image', photo);

        const url = `https://api.imgbb.com/1/upload?&key=${imageHostKey}`

        fetch(url, {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(imgData =>{
            console.log(imgData.data.display_url);
            setData((preve)=>{
                return {
                    ...preve,
                    profileImage: imgData.data.display_url
                }
            })
            console.log("Data after image upload=", data);
        })
        // console.log(e.target.files[0]);
    }
    
    // ============= form submit =============
    const handleSubmit = async(e) =>{
        e.preventDefault();
        const { firstName, lastName, email, password, confirmPassword} = data;

        if( firstName && lastName && email && password && confirmPassword){
                if(password === confirmPassword){
                    createUser(email, password)
                    .then(result=>{
                        const user = result.user;
                        console.log(user);
                        
                        const userInfo = {
                            displayName: firstName + ' ' + lastName,
                            photoURL: data.profileImage
                        }
                        updateUser(userInfo)
                        .then(()=>{
                            updateDataToDB();
                            navigate(from, { replace: true })
                        })
                        .catch(error => {
                            console.error(error)
                        })
                        
                    })
                    .catch(error => {
                        console.error(error)
                    })
                    
                }else{
                alert("Password doesn't match with confirm password...")
                }
            }else{
                alert("Please enter required field")
            }
        }
        
    const updateDataToDB = async()=>{
        const fetchData = await fetch(`${process.env.REACT_APP_SERVER_DOMAIN}/signup`, {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        })
        const responseData = await fetchData.json()
        console.log(responseData);
        alert(responseData.message);
        setData({
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            confirmPassword: "",
            profileImage: "",
            role: "Customer"
        })
    }


    return (
        <div className='p-2 md:p-4'>
            <div className='bg-[#BADFE7] w-full max-w-sm m-auto shadow-md hover:shadow-sm flex  flex-col p-2 rounded-sm'>
                
                <h1 className='text-center text-2xl font-bold text-[#6FB3B8] drop-shadow-sm mt-6'>Sign Up</h1>
                
                    <div className='m-auto rounded-full drop-shadow-md mt-2 overflow-hidden relative shadow-md hover:shadow-sm'>
                    

                    <label htmlFor="profileImage">
                        {
                            data.profileImage ? <img className='w-28 h-28' src={data?.profileImage} alt="" /> : <img className='w-28 h-28' src="https://animated-gif-creator.com/images/01/animated-4-gif-images-download_74.gif" alt="" />
                        }
                        <div className='absolute bottom-0 w-full text-center bg-slate-500 hover:bg-[#388087] bg-opacity-80 p-1 cursor-pointer'>
                            <p className='text-xs font-bold text-white'>Upload</p>
                            <p className='text-xs font-bold text-white'>Photo</p>
                        </div>
                        <input onChange={handlUploadProfileImage} accept='image/*' className='hidden' type="file" name="profileImage" id="profileImage" />
                    </label>
                    </div>
                    
                
                <form onSubmit={handleSubmit} action="" className='w-full py-3  flex flex-col '>

                    <label htmlFor="firstName">First Name</label>
                    <input
                        id='firstName'
                        name='firstName'
                        className='w-full p-1 rounded-sm mt-1 mb-2 bg-white focus-within:outline focus-within:outline-[#388087] border-none'
                        type="text"
                        required
                        value={data.firstName}
                        onChange={handleOnChange}
                    />

                    <label htmlFor="lastName">Last Name</label>
                    <input
                        id='lastName'
                        name='lastName'
                        className='w-full p-1 rounded-sm mt-1 mb-2 bg-white focus-within:outline focus-within:outline-[#388087] border-none'
                        type="text"
                        required
                        value={data.lastName}
                        onChange={handleOnChange}
                    />

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

                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <div className='flex items-center rounded-sm mt-1 mb-2 bg-white focus-within:outline focus-within:outline-1 focus-within:outline-[#388087]'>
                        <input
                            id='confirmPassword'
                            name='confirmPassword'
                            className={`w-full p-1 border-none outline-none ${data.password !== data.confirmPassword && 'text-red-500 bg-red-100'} `}
                            type={showConfirmPassword ? 'text' : 'password'}
                            required
                            value={data.confirmPassword}
                            onChange={handleOnChange}
                        />
                        <span onClick={handleShowConfirmPassword} className='flex text-xl mr-2'>
                            {
                                showConfirmPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />
                            }
                        </span>
                    </div>
                    
                    <button className='w-full m-auto max-w-[150px] bg-[#6FB3B8] hover:bg-[#388087] font-medium text-xl hover:text-white py-1 rounded-full mt-4'>Sign up</button>
                    
                </form>
                <p className='text-sm mt-3 mb-4'>Already have an account? Please <Link to='/login' className='text-[#388087] font-bold border-b-[1px] border-[#388087]'>Login</Link></p>
            </div>
        </div>
    );
};

export default SignUp;