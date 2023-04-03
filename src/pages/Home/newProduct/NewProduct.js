import React from 'react';
import { Link } from 'react-router-dom';

const NewProduct = ({product}) => {
    return (
        <Link to={`/products/${product._id}`}>
            <div>
                <img src={product.image} alt="" />
            </div>
            <div>
                <div>
                    <h1>{product.name}</h1>
                    <p>{product.price}</p>
                </div>
                <div>
                    
                </div>
            </div>
        </Link>
    );
};

export default NewProduct;