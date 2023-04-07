import React from 'react';
import { Link } from 'react-router-dom';
import { AiFillHeart } from 'react-icons/ai';
import { TbCurrencyTaka } from 'react-icons/tb';
import './NewProduct.css';

const NewProduct = ({product}) => {
    return (
        <div className='shadow-md hover:shadow-sm  rounded-sm w-[250px]  product-card'>
            <div>
                <img className='w-full card-image' src={product.image} alt="" />
            </div>
            <div className='flex justify-between p-2'>
                <div>
                    <h1 className='text-xl font-bold'>{product.name}</h1>
                    <p className='flex items-center'>
                        <TbCurrencyTaka></TbCurrencyTaka>{product.price}
                        <span className='text-sm ml-1'> (Incl. VAT)</span>
                    </p>
                </div>
                <div>
                    <AiFillHeart></AiFillHeart>
                </div>
            </div>
            <Link to={`/products/${product._id}`} className='bg-yellow-400 w-full p-2 text-center detail-button'>VIEW DETAIL</Link>
        </div>
    );
};

export default NewProduct;