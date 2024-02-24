import React from 'react';
import ValidationHelper from "../../utility/ValidationHelper.js";
import toast from "react-hot-toast";
import {useNavigate} from "react-router-dom";
import sellerStore from '../../store/sellerStore.js';
import TopNav from './TopNav.jsx';

const LoginForm = () => {

    let navigate=useNavigate();
    let {SellerLoginData, LoginFormOnChange, SellerLoginRequest} = sellerStore();

    const onFormSubmit=async ()=>{
        if(!ValidationHelper.IsEmail(SellerLoginData.email)){
            toast.error("Invalid Email Address!")
        }else {
            let res = await SellerLoginRequest(SellerLoginData);
            res?navigate("/seller/products"):toast.error("Something Went Wrong!")
        }
    }

    return (
        <>
            <TopNav />
            <div className="container section">
                <div className="row d-flex justify-content-center">
                    <div className="col-md-5">
                        <div className="card p-5">
                            <h4 className='mb-4 text-center'>Enter Your Credentials</h4>
                            <input value={SellerLoginData.email} onChange={(e)=>{LoginFormOnChange("email",e.target.value)}} placeholder="email" type="email" className="form-control mb-3"/>
                            
                            <input value={SellerLoginData.password} onChange={(e)=>{LoginFormOnChange("password",e.target.value)}} placeholder="password" type="password" className="form-control"/>
                            <button onClick={onFormSubmit} className="btn mt-3 btn-success" >Login</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LoginForm;