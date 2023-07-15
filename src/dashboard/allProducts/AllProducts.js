import React from 'react';
import { useSelector } from 'react-redux';
import Product from './Product';

const AllProducts = () => {
    const {products, isLoading, isError, error} = useSelector((state)=>state.products);
    console.log(products);
    let content;

    if(!isError && !isLoading && products.length > 0){
        content = <div className="overflow-x-auto pb-8">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Job</th>
                        <th>Favorite Color</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {/* rows */}
                    {
                        products.map(product => <tr>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={product.image} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">{product.name}</div>
                                        <div className="text-sm opacity-50">Price: {product.price}Tk</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                Quantity:{product.stockItem}
                                <br />
                                <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
                            </td>
                            <td>Purple</td>
                            <th>
                                <button className="btn btn-ghost btn-xs">details</button>
                            </th>
                        </tr>)
                    }
                    
                </tbody>
                

            </table>
        </div>
    }
    return (
        <div className='min-h-screen'>
            <h1 className='text-amber-400 font-bold text-center text-xl p-6'>All Products</h1>
            {
                content
            }
        </div>
    );
};

export default AllProducts;