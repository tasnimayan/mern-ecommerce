import React from 'react';
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <div>
            <div className="bg-white shadow-sm bg-white font-raleway border-top">
                <div className="container py-5">
                    <div className="row">
                        <div className="col-md-2 col-sm-6">
                            <h1 className="bodyMedium fw-semibold">Men</h1>
                            <p className="my-2">
                                <Link className="nav-link" to="/about">Jeans</Link>
                            </p>
                            <p className="my-2">
                                <Link className="nav-link" to="/refund">Jumpers</Link>
                            </p>
                            <p className="my-2">
                                <Link className="nav-link" to="/privacy">Leather</Link>
                            </p>
                            <p className="my-2">
                                <Link className="nav-link" to="/terms">Boots</Link>
                            </p>
                            <p className="my-2">
                                <Link className="nav-link" to="/terms">Shorts</Link>
                            </p>
                            <p className="my-2">
                                <Link className="nav-link" to="/terms">Accessories</Link>
                            </p>
                        </div>
                        <div className="col-md-2 col-sm-6">
                            <h1 className="bodyMedium fw-semibold">Women</h1>
                            <p className="my-2">
                                <Link className="nav-link" to="/about">Dresses</Link>
                            </p>
                            <p className="my-2">
                                <Link className="nav-link" to="/refund">Shirts</Link>
                            </p>
                            <p className="my-2">
                                <Link className="nav-link" to="/privacy">Jackets</Link>
                            </p>
                            <p className="my-2">
                                <Link className="nav-link" to="/terms">Coats</Link>
                            </p>
                        </div>
                        <div className="col-md-2 col-sm-6">
                            <h1 className="bodyMedium fw-semibold">Legals</h1>
                            <p className="my-2">
                                <Link className="nav-link" to="/about">About</Link>
                            </p>
                            <p className="my-2">
                                <Link className="nav-link" to="/refund">Refund Policy</Link>
                            </p>
                            <p className="my-2">
                                <Link className="nav-link" to="/privacy">Privacy Policy</Link>
                            </p>
                            <p className="my-2">
                                <Link className="nav-link" to="/terms">Terms</Link>
                            </p>
                            <p className="my-2">
                                <Link className="nav-link" to="/faq">FAQ's</Link>
                            </p>
                        </div>
                        <div className="col-md-2 col-sm-6">
                            <h1 className="bodyMedium fw-semibold">Information</h1>
                            <p className="my-2">
                                <Link className="nav-link" to="/how-to-buy">How to buy</Link>
                            </p>
                            <p className="my-2">
                                <Link className="nav-link" to="/contact">Contact</Link>
                            </p>
                            <p className="my-2">
                                <Link className="nav-link" to="/complain">Complain</Link>
                            </p>
                        </div>
                        <div className="col-md-4">
                            <h1 className="bodyMedium fw-semibold">About</h1>
                            <p>ShopinZ is one of the best online shopping store that features diverse products at affordable prices. </p>
                            <img className="w-75" src="https://www.uiu.ac.bd/wp-content/uploads/2021/02/Card-Logo-Pay-With-01-1.png" />
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="bg-dark py-3 text-center">
                <p className="text-white m-0" style={{fontSize:"12px"}}>All Rights Reserved @ Tasnim Ayan</p>
            </div>
        </div>
    );
};

export default Footer;