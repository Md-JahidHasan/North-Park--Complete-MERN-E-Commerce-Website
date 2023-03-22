import React from 'react';
import NewProduct from './NewProduct';

const NewProducts = () => {
    const products = [
        {
            id:1,
            model: "JP-1200",
            name: "Jeans",
            rating: 5,
            review: ["Good in quality, and color is awesome", "Better than picture"],
            type: "Casual",
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzs-IS5D1udFe24CZk8Oe585mETFn9WRPPPg&usqp=CAU",
            size:['M', 'L', 'XL', 'XXL'],
            price:1500,
            stockItem:20,
            category:"Jeans",
            categoryId:11,
            details: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia sequi consequuntur quam" ,
            composition: "Cotton",
            style: "Semi-narrow",
            properties:"Lorem ipsum dolo"
        },
        {
            id:2,
            model: "SH-3500",
            name: "Shoe",
            rating: 5,
            review: ["Good in quality, and color is awesome", "Better than picture"],
            type: "Formal",
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDZqCoi2fV-0fQXJL8P1Z_7YwAJER9hf6KzA&usqp=CAU",
            size:['10', '12', '14', '16'],
            price:3500,
            stockItem:15,
            category: "Shoes",
            categoryId:44,
            details: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia sequi consequuntur quam",
            composition: "Cotton",
            style: "Semi-narrow",
            properties: "Lorem ipsum dolo"
        },
        {
            id:3,
            model: "ST-3500",
            name: "Shart",
            rating: 5,
            review: ["Good in quality, and color is awesome", "Better than picture"],
            type: "Slim fit",
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7xXc09QDMAXGGQAM1yaB8F_2btL_YhQmbaQ&usqp=CAU",
            size:['M', 'L', 'XL', 'XXL'],
            price:1900,
            stockItem:20,
            category: "Shirts",
            categoryId:22,
            details: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia sequi consequuntur quam",
            composition: "Cotton",
            style: "Semi-narrow",
            properties: "Lorem ipsum dolo"
        },
        {
            id:4,
            model: "PS-1300",
            name: "Polo Shirt",
            rating: 5,
            review: ["Good in quality, and color is awesome", "Better than picture"],
            type: "Casual",
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS9LnpkQ3wSa2u7MS8Rb0Sa9dMMn5TAL6WaA&usqp=CAU",
            size:['M', 'L', 'XL', 'XXL'],
            price:1300,
            stockItem:20,
            category: "T-Shirts",
            categoryId:11,
            details: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia sequi consequuntur quam",
            composition: "Cotton",
            style: "Semi-narrow",
            properties: "Lorem ipsum dolo"
        },
        {
            id:5,
            model: "SH-1300",
            name: "Shoe",
            rating: 5,
            review: ["Good in quality, and color is awesome", "Better than picture"],
            type: "Formal",
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQTxJL4s-i74dFD1v8j-EpPZjmlbTRIoUVvw&usqp=CAU",
            size:['M', 'L', 'XL', 'XXL'],
            price:1300,
            stockItem:25,
            category: "Shoes",
            categoryId:44,
            details: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia sequi consequuntur quam",
            composition: "Cotton",
            style: "Semi-narrow",
            properties: "Lorem ipsum dolo"
        },
        {
            id:6,
            model: "PS-1300",
            name: "Polo Shirt",
            rating: 5,
            review: ["Good in quality, and color is awesome", "Better than picture"],
            type: "Casual",
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFQwGVH2oTBizomeLlkAUvlhI1h1y-MHJX1Q&usqp=CAU",
            size:['M', 'L', 'XL', 'XXL'],
            price:1300,
            stockItem:20,
            category: "T-Shirts",
            categoryId:11,
            details: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia sequi consequuntur quam",
            composition: "Cotton",
            style: "Semi-narrow",
            properties: "Lorem ipsum dolo"
        }
    ]
    return (
        <div>
            <div className="divider font-bold my-12">WHAT'S NEW</div>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center  gap-8 mx-10'>
                {
                    products.map(product => <NewProduct key={product.id} product={product}></NewProduct>)
                }
            </div>
        </div>
    );
};

export default NewProducts;