import React, { useEffect } from 'react';
import Loading from '../../components/loader/Loading';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../features/products/productsSlice';
import ProductCard from '../../components/productCard/ProductCard';

const Shop = () => {


    const dispatch = useDispatch();
    const {searchText} = useSelector((state)=>state.filter)
    useEffect(() => {
        dispatch(fetchProducts({searchText}))
    }, [dispatch, searchText]);
    const { products, isLoading, isError, error } = useSelector((state) => state.products)

    let content;
    
    if (isLoading) content = <Loading></Loading>
    if (!isLoading && isError) content = <div>{error}</div>
    if (!isError && !isLoading && products?.length === 0) {
        content = <div className='text-center my-[20%]'>No products found...</div>
    }
    if (!isError && !isLoading && products?.length > 0) {
        content = <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center  gap-8 mx-10'>
            {
                products.map(product => <ProductCard key={product._id} product={product}></ProductCard>)
            }

        </div>
    }




    return (
        <div className='min-h-screen bg-yellow-500 py-10 '>
            {
                content
            }
        </div>
    );
};

export default Shop;