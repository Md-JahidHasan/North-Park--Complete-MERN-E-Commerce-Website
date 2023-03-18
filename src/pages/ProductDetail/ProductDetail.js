import React from 'react';
import { AiFillStar } from 'react-icons/ai';
import {BsStarHalf} from 'react-icons/bs';
import {TbCurrencyTaka} from 'react-icons/tb';
import { TbArrowsLeftRight } from 'react-icons/tb';
import {FaTruck} from 'react-icons/fa';
import { RiSecurePaymentLine } from 'react-icons/ri';

const ProductDetail = () => {
    return (
        <div>
            <div className='grid md:grid-cols-2  gap-8 justify-items-center mx-14 py-10'>
                <div className='justify-self-end w-full'>
                    <img className='w-[100%]' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQTxJL4s-i74dFD1v8j-EpPZjmlbTRIoUVvw&usqp=CAU" alt="" />
                </div>

                <div className='justify-self-start'>

                    <h1 className='text-3xl mb-3 font-bold text-gray-600'>Casual Shoe</h1>

                    <div className='flex items-center mb-3'>
                        <p className='flex mr-6'><AiFillStar></AiFillStar><AiFillStar></AiFillStar><AiFillStar></AiFillStar> <BsStarHalf></BsStarHalf></p>
                        <div className='flex'>
                            <p className='mr-4'>Read Reviews </p> | <p className='ml-4'> Write Review</p>
                        </div>
                    </div>

                    <h1 className='flex items-center text-3xl text-gray-700 font-extrabold mb-2'><TbCurrencyTaka /> 1200</h1>

                    <p className='text-sm mb-4'>Tax excluded Delivery: 1 to 3 weeks</p>

                    <div className='flex mb-3'>
                        <p className='mr-4'>CATAGORY: Shoes</p>
                        <p>IN STOCK: 17 items</p>
                    </div>

                    <div className='border-[1px] border-dashed border-gray-500 mb-3'></div>

                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae ex veritatis voluptas neque corporis quam aut rerum eligendi eos accusamus atque provident, quod quae voluptatem officiis vero? Distinctio, omnis odit!</p>

                    <div className='border-[1px] border-dashed border-gray-500 my-3'></div>

                    <div className='my-6'>
                        <div className='flex items-center'>
                            <h2 className='font-bold mr-4'>SIZE :</h2>
                            <p className='border-2 border-teal-200 px-2 mr-1'>S</p>
                            <p className='border-2 border-teal-200 px-2 mr-1'>M</p>
                            <p className='border-2 border-teal-200 px-2 mr-1'>L</p>
                        </div>
                    </div>

                    <div className='my-2 flex items-center'>
                        <input className='border-2 text-2xl border-gray-400 w-16 h-12 p-2' type="number" name="" id="" />
                        <button className='ml-2 h-12 bg-slate-200 px-4' >ADD TO CART</button>
                    </div>

                    <div className='mt-8'>
                        <div className='flex items-center my-3'>
                            <p className='p-3 mr-4 border-[1px] border-gray-500 rounded-full font-bold'><RiSecurePaymentLine className='text-green-400 font-extrabold'></RiSecurePaymentLine></p>
                            <p>Security policy (edit with module Customer reassurance)</p>
                        </div>
                        <div className='flex items-center my-3'>
                            <p className='p-3 mr-4 border-[1px] border-gray-400 rounded-full font-bold'><FaTruck className='text-green-400 font-extrabold'></FaTruck></p>
                            <p>Delivery policy (edit with module Customer reassurance)</p>
                        </div>
                        <div className='flex items-center my-3'>
                            <p className='p-3 mr-4 border-[1px] border-gray-500 rounded-full font-bold'><TbArrowsLeftRight className='text-green-400 font-extrabold'></TbArrowsLeftRight></p>
                            <p>Return policy (edit with module Customer reassurance)</p>
                        </div>
                    </div>

                </div>
            </div>
            <div className='mx-14 mb-10'>
                <h1 className='font-bold text-xl text-slate-500 m-2'>Data Sheet</h1>
                <div>
                    <div className='grid grid-cols-2 gap-2 mb-2'>
                        <p className=' bg-slate-100 py-2 px-4'>Compositions</p>
                        <p className=' bg-slate-100 py-2 px-4'>Cotton</p>
                    </div>
                    <div className='grid grid-cols-2 gap-2 mb-2'>
                        <p className=' bg-slate-50 py-2 px-4 '>Styles</p>
                        <p className=' bg-slate-50 py-2 px-4 '>Casual</p>
                    </div>
                    <div className='grid grid-cols-2 gap-2 mb-2'>
                        <p className=' bg-slate-100 py-2 px-4 '>Properties</p>
                        <p className=' bg-slate-100 py-2 px-4 '>Short Sleeve</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;