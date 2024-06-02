import { useState } from 'react';
import SellerStore from './../../store/sellerStore'
import ValidationHelper from './../../utility/ValidationHelper'
import toast from "react-hot-toast";
import {useNavigate} from "react-router-dom";
import TopNav from './TopNav';

const SellerRegistration = () => {
  const {RegFormData, RegFormOnChange, SellerRegRequest} = SellerStore();
  let navigate = useNavigate();

    const onFormSubmit = async ()=>{
        if(!ValidationHelper.IsEmail(RegFormData.email)){
            toast.error("Invalid Email Address!")
        }else {
          console.log(RegFormData)
            let res = await SellerRegRequest(RegFromData);
            res?navigate("/seller/dashboard"):toast.error("Something Went Wrong!")
        }
    }
    
  return (
    <>
      <TopNav />
      <section className="bg-white">
        <div className="w-75 mx-auto p-lg-4">
          <div className="flex-center my-5 shadow-smc border">
            <div className="col-5 h-100 d-none d-md-block">
              <img src="src/assets/images/register_poster.jpg" alt="" className="object-fit-cover" style={{width:"100%", height:"100%"}}/>
            </div>
            <div className="col-md-7 p-md-5 text-center">
              <div>
                <h5 className="text-uppercase fs-3">Registration</h5>
                <div className="flex-center">
                  <div className="rounded bg-warning" style={{width:'10px',height:'10px'}}></div>
                  <div className="bg-black mx-1" style={{width:'50px', height:'2px'}}> </div>
                  <div className="rounded bg-warning" style={{width:'10px',height:'10px'}}> </div>
                  <div className="bg-gray mx-1" style={{width:'50px', height:'2px'}}> </div>
                  <div className="rounded bg-gray" style={{width:'10px',height:'10px'}}> </div>
                </div>
                <p className="fs-5 text-success my-3">Please fill with your details</p>
              </div>
              <div>
                <div className="row">
                  <div className="col-md-6 my-2">
                    <input type="text" className="form-control" placeholder="Store Name" required={true} onChange={(e)=>{RegFormOnChange('storeName', e.target.value)}}/>
                  </div>
                  <div className="col-md-6 my-2">
                    <input type="text" className="form-control" placeholder="Phone" required={true} onChange={(e)=>{RegFormOnChange('phone', e.target.value)}}/>
                  </div>
                </div>
                
                <div className="row">
                  <div className="col-md-12 my-2">
                    <input type="email" className="form-control" placeholder="Email" required={true} onChange={(e)=>{RegFormOnChange('email', e.target.value)}}/>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-12 my-2">
                    <input type="password" className="form-control" placeholder="Password" required={true} onChange={(e)=>{RegFormOnChange('password', e.target.value)}}/>
                  </div>
                  <div className="col-md-6"></div>
                </div>

                <div className="row mt-4">
                  <div className="">
                    <button className="btn btn-success px-4 float-end" onClick={onFormSubmit}>Register</button>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

    </>
  );
};

export default SellerRegistration;