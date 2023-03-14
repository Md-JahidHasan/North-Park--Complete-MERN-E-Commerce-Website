import React from 'react';
import Category from './Category';

const Categories = () => {
    const categories = [
        { id:1, name: 'Jeans', image:'https://images.unsplash.com/photo-1637069585336-827b298fe84a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGplYW5zJTIwZmFicmljfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60'},
        { id: 2, name: 'Shirts', image:'https://images.unsplash.com/photo-1603251578711-3290ca1a0187?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60'},
        { id: 3, name: 'T-Shirts', image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0Ye9rR9e1Uv2XakyLh-ryUGuvRuvjCtB8tvkTOiUkld-cgKXw2CI7Zm9wJ8s2b6hiKYU&usqp=CAU'},
        { id: 4, name: 'Shoes', image:'https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c2hvZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60'}
    ]
    return (
        <div className='grid grid-cols-4 gap-4 mt-4 lg:mx-4'>
            {
                categories.map(category=><Category key={category.id} category={category} ></Category>)
            }
        </div>
    );
};

export default Categories;