import React from 'react';
import Banner from './Banner';
import Categories from './category/Categories';
import NewProducts from './newProduct/NewProducts';
import PoplarItems from './popularItems/PoplarItems';
import ShopNowBanner from './ShopNowBanner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Categories></Categories>
            <NewProducts></NewProducts>
            <ShopNowBanner></ShopNowBanner>
            <PoplarItems></PoplarItems>
        </div>
    );
};

export default Home;