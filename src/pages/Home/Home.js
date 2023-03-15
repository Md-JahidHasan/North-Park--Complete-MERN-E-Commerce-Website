import React from 'react';
import Banner from './Banner';
import Categories from './category/Categories';
import NewProducts from './newProduct/NewProducts';
import ShopNowBanner from './ShopNowBanner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Categories></Categories>
            <NewProducts></NewProducts>
            <ShopNowBanner></ShopNowBanner>
        </div>
    );
};

export default Home;