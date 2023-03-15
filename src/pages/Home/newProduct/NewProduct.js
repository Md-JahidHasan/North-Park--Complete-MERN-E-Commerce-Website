import React from 'react';

const NewProduct = ({product}) => {
    return (
        <div>
            <div>
                <img src={product.image} alt="" />
            </div>
            <div>
                <h1>{product.name}</h1>
                <p>{product.price}</p>
            </div>
        </div>
    );
};

export default NewProduct;