import React from 'react';

const Features = () => {
    return (
        <div className="container section">
            <div className="row">

                <div className="col-6 p-2 col-md-3 col-lg-3 col-sm-6">
                    <div className="card shadow-sm">
                        <div className="card-body">
                            <div className="row d-flex flex-column flex-lg-row align-items-center text-center text-lg-start">
                                <div className="col-3">
                                    <img alt="img" className="w-100" src="https://photo.teamrabbil.com/images/2023/10/09/f1.png" />
                                </div>
                                <div className="px-0 col-9">
                                    <h3 className="fs-6 fw-bold">Free Delivery</h3>
                                    <span className="bodySmal">For all orders above $99</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-6 p-2 col-md-3 col-lg-3 col-sm-6">
                    <div className="card shadow-sm">
                        <div className="card-body">
                            <div className="row d-flex flex-column flex-lg-row align-items-center text-center text-lg-start">
                                <div className="col-3">
                                    <img alt="img" className="w-100" src="https://photo.teamrabbil.com/images/2023/10/09/f2.png" />
                                </div>
                                <div className="px-0 col-9">
                                    <h3 className="fs-6 fw-bold">90 Days Return</h3>
                                    <span className="bodySmal">If goods have problem</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-6 p-2 col-md-3 col-lg-3 col-sm-6">
                    <div className="card shadow-sm">
                        <div className="card-body">
                            <div className="row d-flex flex-column flex-lg-row align-items-center text-center text-lg-start">
                                <div className="col-3">
                                    <img alt="img" className="w-100" src="https://photo.teamrabbil.com/images/2023/10/09/f3.png" />
                                </div>
                                <div className="px-0 col-9">
                                    <h3 className="fs-6 fw-bold">Secure Payment</h3>
                                    <span className="bodySmal">100% Secure Payment</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-6 p-2 col-md-3 col-lg-3 col-sm-6">
                    <div className="card shadow-sm">
                        <div className="card-body">
                            <div className="row d-flex flex-column flex-lg-row align-items-center text-center text-lg-start">
                                <div className="col-3">
                                    <img alt="img" className="w-100" src= "https://photo.teamrabbil.com/images/2023/10/09/f4.png" />
                                </div>
                                <div className="px-0 col-9">
                                    <h3 className="fs-6 fw-bold">24/7 Support</h3>
                                    <span className="bodySmal">Dedicated support</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

};

export default Features;