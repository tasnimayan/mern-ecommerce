import React from 'react';
import UserSubmitButton from "./UserSubmitButton.jsx";
import UserStore from "../../store/UserStore.js";
import ValidationHelper from "../../utility/ValidationHelper.js";
import toast from "react-hot-toast";
import {useNavigate} from "react-router-dom";
const LoginForm = () => {

    let navigate=useNavigate();
    let {LoginFormData,LoginFormOnChange,UserLoginRequest}=UserStore();

    const onFormSubmit=async ()=>{
        if(!ValidationHelper.IsEmail(LoginFormData.email)){
            toast.error("Invalid Email Address!")
        }else {
            let res = await UserLoginRequest(LoginFormData);
            res?navigate("/"):toast.error("Something Went Wrong!")
        }
    }

    return (
        <div className="container section">
            <div className="row d-flex justify-content-center">
                <div className="col-md-5">
                    <div className="card p-5">
                        <h4 className='mb-4 text-center'>Enter Your Credentials</h4>
                        <input value={LoginFormData.email} onChange={(e)=>{LoginFormOnChange("email",e.target.value)}} placeholder="email" type="email" className="form-control mb-3"/>
                        
                        <input value={LoginFormData.password} onChange={(e)=>{LoginFormOnChange("password",e.target.value)}} placeholder="password" type="password" className="form-control"/>
                        <UserSubmitButton onClick={onFormSubmit} className="btn mt-3 btn-success" text="Login"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;