import React from 'react';
import './Categories.css';

const Category = ({category}) => {
    // console.log(category.image)
    return (
        
        <div style={{backgroundImage:`url(${category?.image})`}} className={` h-[100px] md:h-[200px] duration-100 bg-cover flex items-center justify-center rounded-sm category_card`}>
            <div className='border-2 border-teal-400 hover:bg-slate-400 category_div'>
                <h1 className='m-2 md:m-6 bg-[#013535] p-2 md:p-3 text-lg font-bold left-4 text-white'>{category.name}</h1>
            </div>
            {/* <img className='h-full w-full ' src={category.image} alt="" /> */}
        </div>
    );
};

export default Category;