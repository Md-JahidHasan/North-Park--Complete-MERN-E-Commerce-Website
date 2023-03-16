import React from 'react';

const Category = ({category}) => {
    console.log(category.image)
    return (
        
        <div style={{backgroundImage:`url(${category?.image})`}} className={` h-[200px] duration-100  flex items-center justify-center`}>
            <div className='border-2 border-teal-400'>
                <h1 className='text-slate-600 m-6 bg-white p-3 text-xl font-bold left-4'>{category.name}</h1>
            </div>
            {/* <img className='h-full w-full ' src={category.image} alt="" /> */}
        </div>
    );
};

export default Category;