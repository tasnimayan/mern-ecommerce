import ProductImages from "./ProductImages.jsx";
import ProductStore from "../../store/ProductStore.js";
import DetailsSkeleton from "../../skeleton/details-skeleton.jsx";
import parse from 'html-react-parser';
import {useEffect, useState} from "react";
import Reviews from "./Reviews.jsx";
import CartSubmitButton from "../cart/CartSubmitButton.jsx";
import CartStore from "../../store/CartStore.js";
import WishStore from "../../store/WishStore.js";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";
import StarRatings from 'react-star-ratings';


const Details = () => {
    const [quantity,SetQuantity]=useState(1);
    
    const {Details, DetailsRequest}=ProductStore();
    const {CartFormChange,CartForm,CartSaveRequest,CartListRequest}=CartStore()
    const {WishSaveRequest,}=WishStore()

    const {id} = useParams()
    useEffect(()=>{
        (async ()=>{
        window.scrollTo(0, 0);
            await DetailsRequest(id)
        })()
    },[])

    const incrementQuantity=()=>{
        SetQuantity(quantity=>quantity+1)
    }

    const decrementQuantity=()=>{
        if(quantity>1){
            SetQuantity(quantity=>quantity-1)
        }
    }
    
    const AddCart = async (productID) => {
        CartForm.productID = productID
        let res = await CartSaveRequest(CartForm);

        if(res){
            toast.success("Added to cart");
            await  CartListRequest();
        }
    }
    
    const AddToWish = async (id) => {
        let payload = {productId: id, qty:'1'}
        let res = await WishSaveRequest(payload);

        if(res){
            toast.success("Added to wishlist");
        }
    }

    if(!Details){
        return <DetailsSkeleton/>
    }
    else {
        return (
            <div>
                <div className="container mt-2 bg-white">
                    <div className="row">
                        <div className="col-md-7 p-3">
                            <ProductImages/>
                        </div>
                        <div className="col-md-5 p-3">
                            <h4>{Details.title}</h4>
                            <div className="box-review">
                                <span className="order-num me-4"><i className="bi bi-fire text-danger" aria-hidden="true"></i> 0 sold. Only 5451 remain</span>
                                <div className="d-inline-block float-end">
                                    <StarRatings rating={parseFloat(Details.star)} starRatedColor="gold" starDimension="12px" starSpacing="1px"/>
                                    <a href="" >0 reviews</a>  
                                </div>
                            </div>
                            {
                                Details['discount']?(
                                    <p className="bodyXLarge">Price: <strike class="bodySmal text-danger">${Details['price']}</strike> ${Details['discountPrice']} </p>
                                ):(
                                    <span className="bodyXLarge">Price: ${Details['price']}</span>
                                )
                            }

                            <p className="text-muted bodySmal my-1">Category: {Details['category']['categoryName']}</p>
                            <p className="text-muted bodySmal my-1">Brand: {Details['brand']['brandName']}</p>
                            <p className="bodySmal mb-2 mt-1">{Details['shortDes']}</p>
                            <div className="row">
                                <div className="col-4 p-2">
                                    <label className="bodySmal">Size</label>
                                    <select value={CartForm.size} onChange={(e)=>{CartFormChange('size',e.target.value)}}  className="form-control my-2 form-select">
                                        <option value="">Size</option>
                                        {
                                            Details['details']['size'].map((item,i)=>{
                                                return  <option value={item}>{item}</option>
                                            })
                                        }
                                    </select>
                                </div>
                                
                                <div className="col-4  p-2">
                                    <label className="bodySmal">Color</label>
                                    <select value={CartForm.color} onChange={(e)=>{CartFormChange('color',e.target.value)}} className="form-control my-2 form-select">
                                        <option value="">Color</option>
                                        {
                                            Details['details']['color'].map((item,i)=>{
                                                return  <option value={item}>{item}</option>
                                            })
                                        }
                                    </select>
                                </div>
                                <div className="col-4  p-2">
                                    <label className="bodySmal">Quantity</label>
                                    <div className="input-group my-2">
                                        <button onClick={decrementQuantity} className="btn btn-outline-secondary">-</button>
                                        <input value={quantity} type="text" className="form-control bg-light text-center" readOnly />
                                        <button onClick={incrementQuantity}  className="btn btn-outline-secondary">+</button>
                                    </div>
                                </div>
                                <div className="col-4  p-2">
                                    <CartSubmitButton onClick={async ()=>{await AddCart(Details['_id'])}} className="btn w-100 btn-orange" text="Add to Cart"/>
                                </div>
                                <div className="col-4  p-2">
                                    <button className="btn w-100 btn-olive" onClick={async ()=>{await AddToWish(Details['_id'])}}>Add to Wish</button>
                            
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="row mt-3">
                        <div className="col-9">
                            <ul className="nav nav-pills gap-4 bg-gray p-2 flex-center" id="myTab" role="tablist">
                                <li className="nav-item border border-2 rounded-3" role="presentation">
                                    <button className="nav-link active" id="Speci-tab" data-bs-toggle="tab" data-bs-target="#Speci-tab-pane" type="button" role="tab" aria-controls="Speci-tab-pane" aria-selected="true">Description</button>
                                </li>
                                <li className="nav-item border border-2 rounded-3" role="presentation">
                                    <button className="nav-link" id="Review-tab" data-bs-toggle="tab" data-bs-target="#Review-tab-pane" type="button" role="tab" aria-controls="Review-tab-pane" aria-selected="false">Review</button>
                                </li>
                            </ul>
                            <div className="tab-content" id="myTabContent">
                                <div className="tab-pane fade show active" id="Speci-tab-pane" role="tabpanel" aria-labelledby="Speci-tab" tabIndex="0">
                                    {
                                        parse(Details?.details['des'])
                                    }
                                </div>
                                <div className="tab-pane fade" id="Review-tab-pane" role="tabpanel" aria-labelledby="Review-tab" tabIndex="0">
                                <Reviews productId={id}/>
                                </div>
                            </div>

                        </div>
                        <div className="col-3 border">

                        </div>
                        
                    </div>
                </div>
            </div>
        );
    }

};
export default Details;