import React from 'react';

const Category = ({category}) => {
    console.log(category.image)
    return (
        
        <div className={`relative h-[200px] duration-100`}>
            <div className='absolute top-[30%] left-[30%] '>
                <h1 className='text-slate-600 bg-white p-5 text-2xl font-bold left-4'>{category.name}</h1>
            </div>
            <img className='h-full w-full ' src={category.image} alt="" />
        </div>
    );
};

export default Category;