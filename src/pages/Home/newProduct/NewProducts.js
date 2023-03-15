import React from 'react';
import NewProduct from './NewProduct';

const NewProducts = () => {
    const products = [
        {
            id:1,
            name: "Jeans",
            type: "Narrow",
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzs-IS5D1udFe24CZk8Oe585mETFn9WRPPPg&usqp=CAU",
            size:['M', 'L', 'XL', 'XXL'],
            price:1500,
            stockItem:20,
            categoryId:11
        },
        {
            id:2,
            name: "Shoe",
            type: "Formal",
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDZqCoi2fV-0fQXJL8P1Z_7YwAJER9hf6KzA&usqp=CAU",
            size:['10', '12', '14', '16'],
            price:3500,
            stockItem:15,
            categoryId:44
        },
        {
            id:3,
            name: "Shart",
            type: "Slim fit",
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7xXc09QDMAXGGQAM1yaB8F_2btL_YhQmbaQ&usqp=CAU",
            size:['M', 'L', 'XL', 'XXL'],
            price:1900,
            stockItem:20,
            categoryId:22
        },
        {
            id:4,
            name: "Polo Shirt",
            type: "Casual",
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS9LnpkQ3wSa2u7MS8Rb0Sa9dMMn5TAL6WaA&usqp=CAU",
            size:['M', 'L', 'XL', 'XXL'],
            price:1300,
            stockItem:20,
            categoryId:11
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
        <div>
            <div className="divider font-bold mt-6">WHAT'S NEW</div>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center  gap-8'>
                {
                    products.map(product => <NewProduct key={product.id} product={product}></NewProduct>)
                }
            </div>
        </div>
    );
};

export default NewProducts;