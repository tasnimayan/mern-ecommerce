import React, {useEffect, useRef, useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import UserStore from "../../store/UserStore.js";
import CartStore from "../../store/CartStore.js";
import './layout.style.css'



const AppNavBar = () => {
    const [visible, setVisible] = useState(false);
    const [position, setPosition] = useState(0);
    const [search, setSearch] = useState('');
    const navigate=useNavigate()
    const {isLogin,UserLogoutRequest}=UserStore();
    const {CartCount,CartListRequest}=CartStore();


    const onLogout=async ()=>{
        await UserLogoutRequest()
        sessionStorage.clear();
        localStorage.clear();
        navigate("/");
    }
    
    useEffect(() => {
        (async ()=>{
            if(isLogin()){
                await  CartListRequest();
            }
        })()
    }, []);

    return (
        <>
            <div className="container-fluid text-white p-2 bg-theme">
                <div className="container">
                    <div className="row justify-content-around">
                        <div className="col-6">
                            <span>
                                <span className="f-12">
                                    <i className="bi bi-envelope"></i>&nbsp;support@shopinz.com
                                </span>
                                <span className="f-12 mx-2">
                                    <i className="bi bi-telephone"></i>&nbsp;01645800408
                                </span>
                            </span>
                        </div>
                        <div className="col-6">
                            <span className="float-end">
                                <span className="bodySmal mx-2">
                                    <i className="bi bi-whatsapp"></i>
                                </span>
                                <span className="bodySmal mx-2">
                                    <i className="bi bi-youtube"></i>
                                </span>
                                <span className="bodySmal">
                                    <i className="bi bi-facebook"></i>
                                </span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <nav className="navbar sticky-top bg-white navbar-expand-lg navbar-light py-3 font-raleway fw-semibold border-bottom">
                <div className="container-fluid">
                    <Link className="navbar-brand me-auto ms-3" to="/">
                        <h2>Shopin<span className=' text-warning'>Z</span></h2>
                    </Link>

                    <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#nav06" aria-controls="nav06" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>



                    <div className="collapse navbar-collapse d-lg-flex justify-content-between flex-row-reverse" id="nav06">

                        <div className="d-flex align-items-center">
                            <div className="input-group border rounded-2">
                                <input  onChange={(e)=>setSearch(e.target.value)} className="form-control border-0 searchbox" type="search" placeholder="Search" aria-label="Search"/>
                                <Link to={search.length>0?`/by-keyword/${search}`:`/`} className="btn search" type="submit">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ width: 24, height: 24 }}>
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                    </svg>
                                </Link>
                            </div>

                            {
                                isLogin()?(

                                    <>
                                        <Link to="/cart" type="button" className="btn ms-2 btn-light position-relative">
                                            <i className="bi text-dark bi-bag"></i>
                                            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-theme lh-sm">
                                                {
                                                    CartCount > 9 ? "9+" : CartCount
                                                }
                                            <span className="visually-hidden">unread messages</span>
                                            </span>

                                        </Link>
                                        <Link to="/wish" type="button" className="btn ms-2 btn-light d-flex">
                                            <i className="bi text-dark bi-heart"></i>
                                        </Link>
                                        
                                        <div className=' position-relative mx-3'>
                                            <img src="./src/assets/images/profile_placeholder.png" 
                                                onClick={()=>{setVisible(!visible)}} 
                                                className="border border-2 d-flex rounded-circle object-fit-cover border-success" 
                                                style={{width:"40px", height:'40px'}}>
                                            </img>
                                            
                                            {
                                            visible ? (<div className='pop-up position-absolute end-0 top-100 mt-1 border py-3 px-4 bg-white rounded'>
                                                            <div className='text-center fs-6' style={{width:"8rem"}}>
                                                                <Link to="/profile" className='nav-link'>Profile</Link>
                                                                <hr className='my-1'/>
                                                                <button onClick={onLogout} className="nav-link w-100">Logout</button>
                                                                <hr className='my-1'/>
                                                            </div>
                                                        </div>) : (<></>)
                                            }
                                            
                                        </div>
                                    </>
                                ):(
                                    <>
                                        <Link to="/login" type="button" className="btn ms-2 btn-light position-relative">
                                            <i className="bi text-dark bi-bag"></i>
                                        </Link>
                                        <Link to="/login" type="button" className="btn ms-2 btn-light d-flex">
                                            <i className="bi text-dark bi-heart"></i>
                                        </Link>
                                        <Link className="ms-3" to="/login">Login</Link>
                                        <div className='ms-3'>|</div>
                                        <Link className="ms-3" to="/register">Register</Link>
                                    </>
                                )
                            }

                        </div>


                        <ul className="navbar-nav mt-3 mt-lg-0 mb-3 mb-lg-0 ms-lg-3">
                            <span className="nav-item me-4">
                                <Link className="nav-link" to={`/remark/${'new'}`}>New Arrival</Link>
                            </span>
                            <span className="nav-item me-4">
                                <Link className="nav-link" to={`/men`}>Men</Link>
                            </span>
                            <span className="nav-item me-4">
                                <Link className="nav-link" to={`/women`}>Women</Link>
                            </span>
                            <span className="nav-item me-4">
                                <Link className="nav-link" to={`/remark/${'trending'}`}>Best Seller</Link>
                            </span>
                        </ul>
                        
                    </div>
                </div>
            </nav>

            
        </>
    );
};

export default AppNavBar;