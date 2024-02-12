import React, {useEffect} from 'react';
import Layout from "../components/layout/layout.jsx";
import Brands from "../components/product/brands.jsx";
import ProductStore from "../store/ProductStore.js";
import FeatureStore from "../store/FeatureStore.js";
import Slider from "../components/product/slider.jsx";
import Features from "../components/features/features.jsx";
import Categories from "../components/product/categories.jsx";
import Products from "../components/product/products.jsx";
import PosterSlider from '../components/product/PosterSlider.jsx';
import FlashCarousel from '../components/product/FlashCarousel.jsx';
import MostViewedCarousel from '../components/product/MostViewedCarousel.jsx';

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
               <FlashCarousel />
               <Categories/>
               <Products/>
               <PosterSlider />
               <Brands/>
               <MostViewedCarousel />
        </Layout>
    );
};

export default HomePage;