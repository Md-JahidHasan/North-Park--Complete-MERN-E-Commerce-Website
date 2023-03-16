import React from 'react';
import { Link } from 'react-router-dom';

const NewProduct = ({product}) => {
    return (
        <Link to='/product/1'>
            <div>
                <img src={product.image} alt="" />
            </div>
            <div>
                <h1>{product.name}</h1>
                <p>{product.price}</p>
            </div>
        </Link>
    );
};

export default NewProduct;