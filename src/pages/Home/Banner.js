import React from 'react';
import { Autoplay, Navigation, Pagination } from 'swiper';
// import Swiper from 'swiper';
import 'swiper/css';
import { Swiper, SwiperSlide } from "swiper/react";
import redShoe from '../../assets/images/product-image/red-shoe.png';


const Banner = () => {
    return (
        <div className='z-10 '>
            <Swiper
                spaceBetween={0}
                centeredSlides={true}
                autoplay={{
                    delay: 7500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                
                <SwiperSlide className='bg-[#F6F6F2] '>
                    <div className='relative '>
                        <div className='w-full md:w-3/4  h-[350px] '>
                            <img className='w-full m-4 h-full  md:rounded-md hidden md:flex' src="https://img.freepik.com/free-photo/handsome-young-man-with-bristle-wearing-white-sweater-pointing-fingers-upper-right-corner-smiling-showing-christmas-banner-standing-red-background_1258-84946.jpg?size=626&ext=jpg&ga=GA1.2.1111496724.1678781276&semt=ais" alt="" />

                            <img className='w-full md:hidden h-[350px]' src="https://images.unsplash.com/photo-1568561300108-e0c35b5f7c1c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60" alt="" />
                        </div>
                        <div className='absolute top-[30%] right-[-15%]   md:top-[-17%] md:right-[-10%]'>
                            <img className='w-[400px] md:w-[690px] ' src={redShoe} alt="" />
                        </div>
                        <div className='absolute top-[1%] md:top-[20%] flex flex-col items-start md:items-end md:left-[29%] p-12'>
                            <h1 className='text-4xl text-white font-bold my-4'>Pick The Best Sneakers</h1>
                            <p className='text-slate-200 '>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            <p className='text-slate-200'> Nisi id nes ciunt optio recusandae quo.</p>
                            <button className='px-6 py-2 font-bold my-6 ml-8 md:mr-8 rounded-br-2xl md:rounded-br-sm md:rounded-tl-2xl rounded-sm bg-[#FCD12A] text-[#002828] shadow-xl hover:shadow-none hover:bg-[#002828] hover:text-[#FCD12A] duration-150 '>Buy Now</button>
                        </div>
                    </div>
                </SwiperSlide>
                {/* <SwiperSlide className='bg-[#F6F6F2] '>
                    <div>
                        <img className='w-full  h-[400px]' src="https://img.freepik.com/free-photo/young-man-sunglasses-white-tshirt-posing-isolated-blue-studio-background-neon-light_155003-45792.jpg?size=626&ext=jpg&ga=GA1.1.1111496724.1678781276&semt=ais" alt="" />
                        <div className='absolute top-[30%] flex flex-col items-end md:left-[40%] '>
                            <h1 className='text-4xl text-gray-400 font-bold my-6'>More Luxury and Treading</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            <p> Nisi id nes ciunt optio recusandae quo. Nostrum, ducimus.</p>
                            <button className='bg-white px-6 py-2 font-bold my-6'>Buy Now</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='bg-[#F6F6F2] '>
                    <div>
                        <img className='w-full  h-[400px]' src="https://img.freepik.com/free-photo/portrait-curly-haired-young-man-with-copy-space_23-2148892101.jpg?size=626&ext=jpg&ga=GA1.2.1111496724.1678781276&semt=ais" alt="" />
                        <div className='absolute top-[30%] flex flex-col items-end md:left-[40%] '>
                            <h1 className='text-4xl text-gray-400 font-bold my-6'>More Luxury and Treading</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            <p> Nisi id nes ciunt optio recusandae quo. Nostrum, ducimus.</p>
                            <button className='bg-white px-6 py-2 font-bold my-6'>Buy Now</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='bg-[#F6F6F2] '>
                    <div>
                        <img className='w-full  h-[400px]' src="https://img.freepik.com/free-photo/fulllength-attractive-korean-guy-black-clothes-showing-thumbsup-holding-shopping-bags-yellow-b_1258-113844.jpg?size=626&ext=jpg&ga=GA1.2.1111496724.1678781276&semt=ais" alt="" />
                        <div className='absolute top-[30%] flex flex-col items-end md:left-[40%] '>
                            <h1 className='text-4xl text-gray-400 font-bold my-6'>More Luxury and Treading</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            <p> Nisi id nes ciunt optio recusandae quo. Nostrum, ducimus.</p>
                            <button className='bg-white px-6 py-2 font-bold my-6'>Buy Now</button>
                        </div>

                    </div>
                </SwiperSlide>
                <SwiperSlide className='bg-[#F6F6F2] '>
                    <div>
                        <img className='w-full  h-[400px]' src="https://img.freepik.com/free-photo/portrait-handsome-confident-stylish-hipster-lambersexual-model-sexy-man-dressed-jeans-jacket-fashion-male-isolated-grey-wall-studio_158538-26501.jpg?size=626&ext=jpg&ga=GA1.1.1111496724.1678781276&semt=ais" alt="" />
                        <div className='absolute top-[30%] flex flex-col items-end md:left-[40%] '>
                            <h1 className='text-4xl text-gray-400 font-bold my-6'>More Luxury and Treading</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            <p> Nisi id nes ciunt optio recusandae quo. Nostrum, ducimus.</p>
                            <button className='bg-white px-6 py-2 font-bold my-6'>Buy Now</button>
                        </div>
                        
                    </div>
                </SwiperSlide>
                <SwiperSlide className='bg-[#F6F6F2] '>
                    <div>
                        <img className='w-full  h-[400px]' src="https://img.freepik.com/free-photo/medium-shot-young-gentleman-with-suit_23-2149126960.jpg?size=626&ext=jpg&ga=GA1.2.1111496724.1678781276&semt=ais" alt="" />
                        <div className='absolute top-[30%] flex flex-col items-start md:left-[17%] '>
                            <h1 className='text-4xl text-gray-400 font-bold my-6'>More Luxury and Treading</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            <p> Nisi id nes ciunt optio recusandae quo. Nostrum, ducimus.</p>
                            <button className='bg-white px-6 py-2 font-bold my-6'>Buy Now</button>
                        </div>
                        
                    </div>
                </SwiperSlide> */}
                
                
            </Swiper>
        </div>
    );
};

export default Banner;