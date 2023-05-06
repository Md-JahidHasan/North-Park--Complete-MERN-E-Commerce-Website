import React from 'react';

const AddProduct = () => {
    return (
        <div className='min-h-screen text-center'>
            <h1 className='text-yellow-200 m-4 text-2xl'>Upload New Product</h1>

            <form className='text-gray-400' action="">

                {/* <label htmlFor="name">Product Name</label> */}
                <input type="text" placeholder="Product Name" className="input " />

                <select className="select ml-1">
                    <option disabled selected>Select Category</option>
                    <option>Shirt</option>
                    <option>T-Shirt</option>
                    <option>Jeans</option>
                    <option>Shoe</option>
                </select>

                <div className='h-24 my-1 w-full bg-slate-300 rounded'>

                </div>

            </form>
        </div>
    );
};

export default AddProduct;