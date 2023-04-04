import React from 'react';
import { Link } from 'react-router-dom';
import { AiFillHeart } from 'react-icons/ai';
import { TbCurrencyTaka } from 'react-icons/tb';

const NewProduct = ({product}) => {
    return (
        <Link className='shadow-lg hover:shadow-sm  rounded-sm' to={`/products/${product._id}`}>
            <div>
                <img className='' src={product.image} alt="" />
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
            <button className='bg-yellow-400 w-full p-2'>ADD TO CART</button>
        </Link>
    );
};

export default NewProduct;