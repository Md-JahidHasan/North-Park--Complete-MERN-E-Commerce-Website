import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../../../components/loader/Loading';
import { fetchProducts } from '../../../features/products/productsSlice';
import NewProduct from './NewProduct';

const NewProducts = () => {
    const dispatch= useDispatch();
    useEffect(()=>{
        dispatch(fetchProducts())
    }, [dispatch]);
    const {products, isLoading, isError, error} = useSelector((state)=>state.products)
    
    let content;
    if(isLoading) content = <Loading></Loading>
    if(!isLoading && isError) content = <div>{error}</div>
    if(!isError && !isLoading && products?.length === 0){
        content = <div>No videos found...</div>
    }
    if(!isError && !isLoading && products?.length > 0){
        content = <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center  gap-8 mx-10'>
            {
                products.map(product => <NewProduct key={product.id} product={product}></NewProduct>)
            }

        </div>
    }


    return (
        <div className=''>
            <div className="divider font-bold my-12">WHAT'S NEW</div>
            {
                content
            }
        </div>
    );
};

export default NewProducts;