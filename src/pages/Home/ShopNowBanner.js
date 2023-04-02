import React from 'react';

const ShopNowBanner = () => {
    return (
        <div className='my-6 bg-[url("https://img.freepik.com/free-photo/jeans-with-sale-label-copy-space_23-2148670056.jpg?size=626&ext=jpg&ga=GA1.1.1111496724.1678781276&semt=ais")] bg-fixed bg-cover  mb-10 ' >
            <div className='backdrop-blur-[2px] h-72 flex flex-col items-center justify-center'>
                <h2 className='text-xl'>ENJOY FREE SHIPPING AND RETURNS</h2>
                <h1 className='text-4xl font-extrabold text-[#002828] '>Shoes, Clothing and More</h1>
                <button className='bg-[#388087] m-4 px-6 py-2 text-white'>SHOP NOW</button>
            </div>
            
        </div>
    );
};

export default ShopNowBanner;