import React, {useEffect, useState} from 'react';
import cartStore from "../../store/CartStore.js";
import LegalContentSkeleton from "../../skeleton/legal-content-skeleton.jsx";



import '../../assets/css/cartList.style.css'
import FullPageLoader from '../../skeleton/FullPageLoader.jsx';

const CartList = () => {
    const [quantity,SetQuantity]=useState(1);

    const {CartListRequest,CartList,CartCount,CreateInvoiceRequest, RemoveFromCartRequest, isCartSubmit}=cartStore();

    useEffect(() => {
        (async ()=>{
           await CartListRequest()
        })()
    }, []);

    const incrementQuantity=()=>{
        SetQuantity(quantity=>quantity+1)
    }

    const decrementQuantity=()=>{
        if(quantity>1){
            SetQuantity(quantity=>quantity-1)
        }
    }

    if(CartList==null){
        return <LegalContentSkeleton/>
    }

    let total = 0;
    CartList.forEach(element => {
        if(element.product.discount){
            total += parseFloat(element.product.discountPrice)
        }
        else{
            total += parseFloat(element.product.price)
        }
    })
    return (
        <div className="container py-5">
            {
                isCartSubmit ?<FullPageLoader/> : null
            }
            <div className="row">
                <div className="col-md-8 cart bg-gray rounded-start-4">
                    <div className="title">
                        <div className="row">
                            <div className="col"><h4><b>My Cart</b></h4></div>
                            <div className="col align-self-center text-right text-muted">{CartCount} items</div>
                            <div className='col align-self-center'>
                                <p className="mb-0"><span className="text-muted">Sort by:</span>
                                    <a href="#!" className="text-body">price <i className="bi bi-caret-down mt-1"></i></a>
                                </p>
                            </div>
                        </div>
                    </div>
                    <hr />
                    {
                        CartList.map((item, idx) => {
                            return (
                                <div className="row border-bottom" key={idx}>
                                    <div className="row main align-items-center">
                                        <div className="col-2">
                                            <img className="img-fluid cart-img" src={item.product.image}/>
                                        </div>
                                        <div className="col-5">
                                            <div className="row text-muted">Shirt</div>
                                            <div className="row">{item.product.title}</div>
                                        </div>
                                        
                                        <div className="col-2 p-0">
                                            <div className="input-group input-group-sm">
                                                <button onClick={decrementQuantity} className="btn border">-</button>
                                                <input value={quantity} type="text" className="form-control shadow-none  text-center" readOnly/>
                                                <button onClick={incrementQuantity} className="btn border">+</button>
                                            </div>
                                        </div>
                                        
                                        <div className="col-2 text-center">&#36; {item.product.discount? item.product.discountPrice: item.product.price}
                                        </div>
                                        <div className="col-1">
                                            <button className="btn btn-sm btn-outline-danger fw-bold" onClick={async ()=>{await RemoveFromCartRequest(item.productID)}}>&#10005;
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                    
                    
                    
                    <div className="back-to-shop">
                        <a href="/" className='border btn btn-sm'>&larr; Back to shop
                        </a>
                    </div>
                </div>
                <div className="col-md-4 summary">
                    <div><h5><b>Summary</b></h5></div>
                    <hr />
                    <div className="row">
                        <div className="col ps-0">ITEMS {CartCount}</div>
                        <div className="col text-right">&#36; {total}
                        </div>
                    </div>
                    <form>
                        <p>SHIPPING</p>
                        <select>
                            <option className="text-muted">Standard-Delivery- &#36;1.00</option>
                            <option className="text-muted">Fast-Delivery- &#36;2.00</option>
                        </select>
                        <p>VOUCHER CODE</p>
                        <div>
                            <div className="input-group input-group-sm">
                                <input type="text" className="form-control shadow-none" placeholder="Enter your code"/>
                                <button className="btn btn-sm btn-success">Apply</button>
                            </div>
                        </div>
                    </form>
                    <div className="row border-top" style={{borderTop: "1px solid rgba(0,0,0,.1)", padding: "2vh 0"}}>
                        <div className="col">TOTAL PRICE</div>
                        <div className="col text-right">&#36; {total}</div>
                    </div>
                    
                    <button onClick={async ()=>{await CreateInvoiceRequest()}} className="btn btn-success w-100">CHECKOUT</button>
                </div>
            </div>
            
        </div>
    );
};

export default CartList;
