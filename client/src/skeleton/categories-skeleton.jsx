import React from 'react';
import Skeleton from "react-loading-skeleton";
import Lottie from "lottie-react";
import ImagePlaceholder from "../assets/images/image.json"

const CategoriesSkeleton = () => {
    return (
        <div className="section">
            <div className="container">
                <div className="row">
                    {
                        Array.from({length:16}).map((item, idx)=>{
                            return(
                                <div className="col-6 col-lg-8r text-center col-md-8r p-2" key={idx}>
                                    <div className="card h-100 rounded-3 bg-white">
                                        <div className="card-body">
                                            <Lottie className="w-100" animationData={ImagePlaceholder} loop={true} />
                                            <Skeleton count={1} />
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default CategoriesSkeleton;