import React from 'react';
import ProductStore from "../../store/ProductStore.js";
import CategoriesSkeleton from "../../skeleton/categories-skeleton.jsx";
import {Link} from "react-router-dom";

const Categories = () => {
    const {CategoryList}=ProductStore();


    if(CategoryList===null){
        return <CategoriesSkeleton/>
    }
    else {
        return (
            <div className="section">
                <div className="container">
                    <div className="row">
                        <h1 className="headline-4 text-center my-2 p-0 font-releway fw-semibold">Top Categories</h1>
                        <span className="fs-6 mb-5 text-center">Explore a World of Choices Across Our Most Popular <br />Shopping Categories </span>
                        {
                            CategoryList.map((item,i)=>{
                                return ( <div key={i} className="col-3 text-center col-md-8r p-1">
                                    <Link to={`/by-category/${item['_id']}`} className="card bg-white shadow">
                                        <div className="flex-center flex-column bg-white ">
                                            <div className='p-2' style={{width:"100px", height:"100px"}}>
                                                <img className="rounded-3 w-100 h-100 object-fit-cover" src={item.categoryImg} alt={item.categoryName}/>
                                            </div>
                                            <p className="bodySmal ">{item.categoryName}</p>
                                        </div>
                                    </Link>
                                </div>)
                            })
                        }
                    </div>
                </div>
            </div>
        );
    }

};

export default Categories;