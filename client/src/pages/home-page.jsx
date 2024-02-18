import React, {useEffect} from 'react';
import Layout from "../components/layout/layout.jsx";
import Brands from "../components/product/brands.jsx";
import ProductStore from "../store/ProductStore.js";
import FeatureStore from "../store/FeatureStore.js";
import Slider from "../components/product/slider.jsx";
import Features from "../components/features/features.jsx";
import Categories from "../components/product/categories.jsx";
import Products from "../components/product/products.jsx";
import TopRatedCarousel from '../components/product/TopRatedCarousel.jsx';
import Subscribe from './../components/subscribe/Subscribe';
import TrendingSlider from '../components/product/TrendingSlider.jsx';
import CouponCard from '../components/product/CouponCard.jsx';
import OfferSlider from '../components/product/OfferSlider.jsx';

const HomePage = () => {

    const {BrandListRequest,CategoryListRequest,SliderListRequest,ListByRemarkRequest}=ProductStore();
    const {FeatureListRequest}=FeatureStore();


    useEffect(() => {
        (async ()=>{
             await SliderListRequest();
              await FeatureListRequest();
              await CategoryListRequest();
              await ListByRemarkRequest("new");
              await BrandListRequest()
        })()
    }, []);


    return (
        <Layout>
            <Slider/>
            <Features/>
            <TrendingSlider />
            <Categories/>
            <CouponCard />
            <Products/>
            <OfferSlider />
            <Brands/>
            <TopRatedCarousel />
            <Subscribe />
        </Layout>
    );
};

export default HomePage;