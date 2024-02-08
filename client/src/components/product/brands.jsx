import React from 'react';
import ProductStore from "../../store/ProductStore.js";
import BrandsSkeleton from "../../skeleton/brands-skeleton.jsx";
import {Link} from "react-router-dom";

const Brands = () => {
    const {BrandList}=ProductStore();

    if(BrandList===null){
        return <BrandsSkeleton/>
    }
    else {
        return (
            <div className="section">
                <div className="container">
                    <div className="row">
                        <h1 className="headline-4 text-center my-2 p-0 font-releway fw-semibold">Top Brands</h1>
                        <span className="fs-6 mb-5 text-center">Choose Across Our Most Popular <br />Shopping Brands </span>
                        {
                            BrandList.map((item,i)=>{
                                return (
                                    <div key={i} className="col-3 text-center col-md-8r p-1">
                                        <Link to={`/by-brand/${item['_id']}`} className="card bg-white">
                                            <div className="flex-center flex-column bg-white ">
                                                <div className='p-2' style={{width:"100px", height:"100px"}}>
                                                    <img className="rounded-3 w-100 h-100 object-fit-contain" src={item.brandImg} alt={item.brandName}/>
                                                </div>
                                                <p className="bodySmal ">{item.brandName}</p>
                                                
                                            </div>
                                        </Link>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        );
    }


};

export default Brands;