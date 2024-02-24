
const Features = () => {
  return (
    <div className="bg-white py-2 pt-5">
        <div className="container rounded-1">
            <div className="row">

                <div className="col-6 p-2 col-md-3 col-lg-3 col-sm-6">
                    <div className="card bg-transparent border shadow-smc">
                        <div className="card-body">
                            <div className="row d-flex flex-column flex-lg-row align-items-center text-center text-lg-start">
                                <div className="col-md-3">
                                    <i className="bi bi-rocket-takeoff fs-2"></i>
                                </div>
                                <div className="px-0 col-9">
                                    <p className="fs-6 fw-bold">Free Delivery</p>
                                    <span className="bodySmal">For all orders above $99</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-6 p-2 col-md-3 col-lg-3 col-sm-6">
                    <div className="card bg-transparent border shadow-smc">
                        <div className="card-body">
                            <div className="row d-flex flex-column flex-lg-row align-items-center text-center text-lg-start">
                                <div className="col-md-3">
                                    <i className="bi bi-arrow-repeat fs-2"></i>
                                </div>
                                <div className="px-0 col-9">
                                    <p className="fs-6 fw-bold">90 Days Return</p>
                                    <span className="bodySmal">If goods have problem</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-6 p-2 col-md-3 col-lg-3 col-sm-6">
                    <div className="card bg-transparent border shadow-smc">
                        <div className="card-body">
                            <div className="row d-flex flex-column flex-lg-row align-items-center text-center text-lg-start">
                                <div className="col-md-3">
                                    <i className="bi bi-credit-card fs-2"></i>
                                </div>
                                <div className="px-0 col-9">
                                    <p className="fs-6 fw-bold">Secure Payment</p>
                                    <span className="bodySmal">100% Secure Payment</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-6 p-2 col-md-3 col-lg-3 col-sm-6">
                    <div className="card bg-transparent border shadow-smc">
                        <div className="card-body">
                            <div className="row d-flex flex-column flex-lg-row align-items-center text-center text-lg-start">
                                <div className="col-md-3">
                                    <i className="bi bi-headset fs-2"></i>
                                </div>
                                <div className="px-0 col-9">
                                    <p className="fs-6 fw-bold">24/7 Support</p>
                                    <span className="bodySmal">Dedicated support</span>
                                </div>
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