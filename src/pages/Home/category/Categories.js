import React from 'react';
import Category from './Category';

const Categories = () => {
    const categories = [
        { id: 22, name: 'SHIRTS', image: 'https://images.unsplash.com/photo-1603251578711-3290ca1a0187?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60' },
        { id: 11, name: 'JEANS', image:'https://d2w9m16hs9jc37.cloudfront.net/dimg/blog/2021/02/pexels_karolina_grabowska_4210860.jpg'},
        { id: 33, name: 'T-SHIRTS', image:'https://images.unsplash.com/photo-1523381294911-8d3cead13475?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'},
        { id: 44, name: 'SHOES', image:'https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c2hvZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60'}
    ]
    return (
        <div className='grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 lg:gap-7 mt-4 mx-2 lg:mx-4'>
            {
                categories.map(category=><Category key={category.id} category={category} ></Category>)
            }
        </div>
    );
};

export default Categories;