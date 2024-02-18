import React, {useEffect} from 'react';
import WishStore from "../../store/WishStore.js";
import CartStore from "../../store/CartStore.js";
import LegalContentSkeleton from "../../skeleton/legal-content-skeleton.jsx";
import '../../assets/css/cartList.style.css'
import { toast } from 'react-hot-toast';
import FullPageLoader from '../../skeleton/FullPageLoader.jsx';
import { Link } from 'react-router-dom';



const WishLists = () => {
    const {WishListRequest, WishList, WishCount, RemoveFromWishRequest,isWishSubmit} = WishStore();
    const {CartForm, CartSaveRequest,isCartSubmit} = CartStore()

    useEffect(() => {
        (async ()=>{
           await WishListRequest()
        })()
    }, [WishCount]);

    if(WishList === null){
        return <LegalContentSkeleton/>
    }

    const AddToCart = async (id)=>{
        CartForm.productID = id
        let res = await CartSaveRequest(CartForm)
        if(res){
            toast.success("Product added to cart")
        }
        else{
            toast.error("Something went wrong!")
        }
    }

    const RemoveFromWish = async (id)=> {
        let res = await RemoveFromWishRequest(id)
        if(res){
            toast.success("Product Removed")
        }
        else{
            toast.error("Something went wrong!")
        }
    }

    return (
        <div className="container py-5">
            {
                isWishSubmit || isCartSubmit ?<FullPageLoader /> : null
            }
            <div className="row">
                <div className="col-md-8 wish bg-gray rounded-4">
                    <div className="title">
                        <div className="row">
                            <div className="col"><h4><b>My Wish List</b></h4></div>
                            <div className="col align-self-center text-end text-muted">{WishCount} items</div>
                        </div>
                    </div>
                    <hr />
                    {
                        WishList.map((item, idx) => {
                            return (
                                <div className="row border-bottom" key={idx}>
                                    <div className="row main align-items-center">
                                        <div className="col-2">
                                            <img className="img-fluid cart-img" src={item.image}/>
                                        </div>
                                        <div className="col">
                                            <Link to={`/details/${item._id}`} >
                                                {/* <div className="row text-muted">Shirt</div> */}
                                                <p className="row">{item.title}</p>
                                            </Link>
                                        </div>
                                        
                                        <div className="col-2 text-center">&#36; {item.discount? item.discountPrice: item.price}
                                        </div>
                                        <div className="col-1">
                                            <button className="btn btn-sm fs-6 btn-warning" onClick={async ()=>{
                                                await AddToCart(item._id)}}>
                                                    <i className="bi bi-cart-check"></i>
                                            </button>
                                        </div>
                                        <div className="col-1">
                                            <button className="btn btn-sm btn-danger fs-6" onClick={async ()=>{
                                                await RemoveFromWish(item._id)
                                                await WishListRequest()
                                                
                                                }}>
                                                <i className="bi bi-trash"></i>
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

                <div className="col-md-4 px-lg-5 fs-sm mt-4 mt-md-0">
                    <div className='border p-4 rounded-1 bg-white mx-4'>
                        <div className='row feature'>
                            <div className="col-3"><i className="bi bi-truck fs-3"></i></div>
                            <div className="col-9">
                                <p>FREE DELIVERY</p>
                                <p>On order over $49.99</p>
                            </div>
                        </div>
                        <hr/>

                        <div className='row feature'>
                            <div className="col-3"><i className="bi bi-shield fs-3"></i></div>
                            <div className="col-9">
                                <p>ORDER PROTECTION</p>
                                <p>secured information</p>
                            </div>
                        </div>
                        <hr/>

                        <div className='row feature'>
                            <div className="col-3"><i className="bi bi-ticket fs-3"></i></div>
                            <div className="col-9">
                                <p>PROMOTION GIFT</p>
                                <p>special offers!</p>
                            </div>
                        </div>
                        <hr /> 

                        <div className='row feature'>
                            <div className="col-3"><i className="bi bi-currency-exchange fs-3"></i></div>
                            <div className="col-9">
                                <p>MONEY BACK</p>
                                <p>return over 30 days</p>
                            </div>
                        </div>

                    </div>
                    
                </div>
            </div>
            
        </div>
    );
};

export default WishLists;
