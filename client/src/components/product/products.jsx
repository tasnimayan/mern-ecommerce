import React from 'react';
import ProductStore from "../../store/ProductStore.js";
import ProductsSkeleton from "../../skeleton/products-skeleton.jsx";
import ProductCard from './ProductCard.jsx';
import SectionHeadline from './SectionHeadline.jsx';
const Products = () => {
    const {ListByRemark,ListByRemarkRequest}=ProductStore();
    return (
        <div className="py-5 bg-white">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div>
                            <SectionHeadline text="our products">
                            <ul className="nav nav-tabs justify-content-center border-0 fs-md fw-normal float-end"  id="pills-tab" role="tablist">
                                    <li className="nav-item " role="presentation">
                                        <button onClick={()=>{ListByRemarkRequest("new")}} className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-new" type="button" role="tab" aria-controls="pills-home" aria-selected="true">All Products</button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button onClick={()=>{ListByRemarkRequest("trending")}} className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-trending" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Trending</button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button onClick={()=>{ListByRemarkRequest("popular")}} className="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-popular" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Popular</button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button onClick={()=>{ListByRemarkRequest("top")}} className="nav-link" id="pills-disabled-tab" data-bs-toggle="pill" data-bs-target="#pills-top" type="button" role="tab" aria-controls="pills-disabled" aria-selected="false">Top</button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button onClick={()=>{ListByRemarkRequest("special")}} className="nav-link" id="pills-disabled-tab" data-bs-toggle="pill" data-bs-target="#pills-special" type="button" role="tab" aria-controls="pills-disabled" aria-selected="false">Special</button>
                                    </li>
                                </ul>
                            </SectionHeadline>

                            <div className="tab-content" id="pills-tabContent">
                                <div className="tab-pane fade show active" id="pills-new" role="tabpanel" aria-labelledby="pills-home-tab" tabIndex="0">
                                    {
                                        ListByRemark===null?(<ProductsSkeleton/>):(
                                            <div className="container">
                                                <div className="row">
                                                    {
                                                        ListByRemark.map((item,i)=>{
                                                            return <ProductCard item={item} key={i} />
                                                        })
                                                    }

                                                </div>
                                            </div>
                                        )
                                    }



                                </div>
                                <div className="tab-pane fade" id="pills-trending" role="tabpanel" aria-labelledby="pills-profile-tab" tabIndex="0">
                                    {
                                        ListByRemark===null?(<ProductsSkeleton/>):(
                                            <div className="container">
                                                <div className="row">
                                                    {
                                                        ListByRemark.map((item,i)=>{
                                                            return <ProductCard item={item} key={i} />
                                                        })
                                                    }

                                                </div>
                                            </div>
                                        )
                                    }

                                </div>
                                <div className="tab-pane fade" id="pills-popular" role="tabpanel" aria-labelledby="pills-contact-tab" tabIndex="0">
                                    {
                                        ListByRemark===null?(<ProductsSkeleton/>):(
                                            <div className="container">
                                                <div className="row">
                                                    {
                                                        ListByRemark.map((item,i)=>{
                                                            return <ProductCard item={item} key={i} />
                                                        })
                                                    }

                                                </div>
                                            </div>
                                        )
                                    }

                                </div>
                                <div className="tab-pane fade" id="pills-top" role="tabpanel" aria-labelledby="pills-disabled-tab" tabIndex="0">
                                    {
                                        ListByRemark===null?(<ProductsSkeleton/>):(
                                            <div className="container">
                                                <div className="row">
                                                    {
                                                        ListByRemark.map((item,i)=>{
                                                            return <ProductCard item={item} key={i} />
                                                        })
                                                    }

                                                </div>
                                            </div>
                                        )
                                    }

                                </div>
                                <div className="tab-pane fade" id="pills-special" role="tabpanel" aria-labelledby="pills-disabled-tab" tabIndex="0">
                                    {
                                        ListByRemark===null?(<ProductsSkeleton/>):(
                                            <div className="container">
                                                <div className="row">
                                                    {
                                                        ListByRemark.map((item,i)=>{
                                                            return <ProductCard item={item} key={i} />
                                                        })
                                                    }

                                                </div>
                                            </div>
                                        )
                                    }

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Products;