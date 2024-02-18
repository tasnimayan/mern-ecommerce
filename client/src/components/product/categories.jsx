import React from 'react';
import ProductStore from "../../store/ProductStore.js";
import CategoriesSkeleton from "../../skeleton/categories-skeleton.jsx";
import {Link} from "react-router-dom";
import SectionHeadline from './SectionHeadline.jsx';

const Categories = () => {
    const {CategoryList}=ProductStore();


    if(CategoryList===null){
        return <CategoriesSkeleton/>
    }
    else {
        return (
            <div>
                <div className="container py-5">
                    <div className="row">
                        <SectionHeadline text="shop by categories" />
                        {
                            CategoryList.map((item,i)=>{
                                return ( <div key={i} className="col-3 text-center col-md-8r p-1">
                                    <Link to={`/by-category/${item['_id']}`} className="card bg-gray category">
                                        <div className="flex-center flex-column ">
                                            <div className='p-2' style={{width:"100px", height:"100px"}}>
                                                <img className="rounded-3 w-100 h-100 object-fit-cover" src={item.categoryImg} alt={item.categoryName}/>
                                            </div>
                                            <p className="fs-md my-2 hover">{item.categoryName}</p>
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