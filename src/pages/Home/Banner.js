import React from 'react';
import { Autoplay, Navigation, Pagination } from 'swiper';
// import Swiper from 'swiper';
import 'swiper/css';
import { Swiper, SwiperSlide } from "swiper/react";


const Banner = () => {
    return (
        <div className='z-10 h-[80%]'>
            <Swiper
                spaceBetween={0}
                centeredSlides={true}
                autoplay={{
                    delay: 1500,
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
                    <img className='w-full  h-[500px]' src="https://img.freepik.com/free-photo/handsome-young-man-with-bristle-wearing-white-sweater-pointing-fingers-upper-right-corner-smiling-showing-christmas-banner-standing-red-background_1258-84946.jpg?size=626&ext=jpg&ga=GA1.2.1111496724.1678781276&semt=ais" alt="" />
                </SwiperSlide>
                <SwiperSlide className='bg-[#F6F6F2] '>
                    <img className='w-full  h-[500px]' src="https://img.freepik.com/free-photo/young-man-sunglasses-white-tshirt-posing-isolated-blue-studio-background-neon-light_155003-45792.jpg?size=626&ext=jpg&ga=GA1.1.1111496724.1678781276&semt=ais" alt="" />
                </SwiperSlide>
                <SwiperSlide className='bg-[#F6F6F2] '>
                    <img className='w-full  h-[500px]' src="https://img.freepik.com/free-photo/portrait-curly-haired-young-man-with-copy-space_23-2148892101.jpg?size=626&ext=jpg&ga=GA1.2.1111496724.1678781276&semt=ais" alt="" />
                </SwiperSlide>
                <SwiperSlide className='bg-[#F6F6F2] '>
                    <img className='w-full  h-[500px]' src="https://img.freepik.com/free-photo/fulllength-attractive-korean-guy-black-clothes-showing-thumbsup-holding-shopping-bags-yellow-b_1258-113844.jpg?size=626&ext=jpg&ga=GA1.2.1111496724.1678781276&semt=ais" alt="" />
                </SwiperSlide>
                <SwiperSlide className='bg-[#F6F6F2] '>
                    <img className='w-full  h-[500px]' src="https://img.freepik.com/free-photo/portrait-handsome-confident-stylish-hipster-lambersexual-model-sexy-man-dressed-jeans-jacket-fashion-male-isolated-grey-wall-studio_158538-26501.jpg?size=626&ext=jpg&ga=GA1.1.1111496724.1678781276&semt=ais" alt="" />
                </SwiperSlide>
                
                
            </Swiper>
        </div>
    );
};

export default Banner;