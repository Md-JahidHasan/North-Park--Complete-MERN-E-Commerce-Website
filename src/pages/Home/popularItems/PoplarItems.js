import React from 'react';
import NewProduct from '../newProduct/NewProduct';

const PoplarItems = () => {
    const products = [
        {
            id: 1,
            name: "Jeans",
            type: "Narrow",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzs-IS5D1udFe24CZk8Oe585mETFn9WRPPPg&usqp=CAU",
            size: ['M', 'L', 'XL', 'XXL'],
            price: 1500,
            stockItem: 20,
            categoryId: 11
        },
        {
            id: 3,
            name: "Shart",
            type: "Slim fit",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7xXc09QDMAXGGQAM1yaB8F_2btL_YhQmbaQ&usqp=CAU",
            size: ['M', 'L', 'XL', 'XXL'],
            price: 1900,
            stockItem: 20,
            categoryId: 22
        },
        {
            id: 5,
            name: "Shoe",
            type: "Formal",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQTxJL4s-i74dFD1v8j-EpPZjmlbTRIoUVvw&usqp=CAU",
            size: ['10', '12', '14', '16'],
            price: 3500,
            stockItem: 15,
            categoryId: 44
        },
        {
            id: 6,
            name: "Jeans",
            type: "Narrow",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFQwGVH2oTBizomeLlkAUvlhI1h1y-MHJX1Q&usqp=CAU",
            size: ['M', 'L', 'XL', 'XXL'],
            price: 1500,
            stockItem: 20,
            categoryId: 11
        },
    ]
    return (
        <div className='pb-10 mx-6'>
            <div className=" divider font-bold my-6">THE MOST POPULAR ITEMS</div>

            <div className='grid  md:grid-cols-2 gap-4'>
                <div className='grid md:grid-cols-2 gap-y-8 justify-items-center'>
                    {
                        products.map(product => <NewProduct key={product.id} product={product}></NewProduct>)
                    }

                </div>
                <div className='mr-4 bg-[url("https://images.unsplash.com/photo-1604868189265-219ba7bf7ea3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=400&q=60")] bg-cover'>

                </div>
            </div>
        </div>
    );
};

export default PoplarItems;