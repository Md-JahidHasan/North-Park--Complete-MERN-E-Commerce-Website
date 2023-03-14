import React from 'react';

const Category = ({category}) => {
    console.log(category.image)
    return (
        
        <div className={`relative `}>
            <div className='absolute top-[50%] left-[40%] '>
                <h1 className='text-slate-600 bg-white  text-2xl font-bold left-4'>{category.name}</h1>
            </div>
            <img className='h-[200px] w-full' src={category.image} alt="" />
        </div>
    );
};

export default Category;