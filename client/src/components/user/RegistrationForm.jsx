import { useState } from 'react';
import UserStore from './../../store/UserStore';
import ValidationHelper from './../../utility/ValidationHelper'
import toast from "react-hot-toast";
import {useNavigate} from "react-router-dom";

const RegistrationForm = () => {
  let {RegFormData, RegFormOnChange, UserRegRequest } = UserStore();
  let [gender, setGender] = useState('male');
  let navigate = useNavigate();
  let [show, setShow] = useState(true)

  let handleGender = (e) =>{
    let selected = e.target.value;
    setGender(selected)
    RegFormOnChange('gender', selected)
  }
    const onFormSubmit = async ()=>{
      // RegFormOnChange('gender', gender)
        if(!ValidationHelper.IsEmail(RegFormData.email)){
            toast.error("Invalid Email Address!")
        }else {
          console.log(RegFormData)
            // let res = await UserRegRequest(RegFromData);
            res?navigate("/profile"):toast.error("Something Went Wrong!")
        }
    }
    
  return (
    <section className="bg-white position-relative">

      <div className={`role position-absolute top-0 start-0 bg-black bg-opacity-50 w-100 h-100 ${show?'':'d-none'}`}>
        <div className='flex-center'>
          <div className='bg-white p-5 rounded-2 mt-5 text-center'>
            <h4 className='mb-4'>What are you looking for?</h4>
            <button className='btn btn-olive' onClick={()=>{setShow(false)}}>Buy Products</button>
            <a className='btn btn-orange ms-4' href='/seller/register'>Sell Products</a>

          </div>
        </div>
      </div>

      <div className="w-75 mx-auto p-lg-4">
        <div className="flex-center my-5 shadow-smc border">
          <div className="col-5 h-100 d-none d-md-block">
            <img src="src/assets/images/register_poster.jpg" alt="" className="object-fit-cover" style={{width:"100%", height:"100%"}}/>
          </div>
          <div className="col-md-7 py-3 p-md-5 text-center">
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
                  <input type="text" className="form-control" placeholder="First Name" required={true} onChange={(e)=>{RegFormOnChange('firstName', e.target.value)}}/>
                </div>
                <div className="col-md-6 my-2">
                  <input type="text" className="form-control" placeholder="Last Name" required={true} onChange={(e)=>{RegFormOnChange('lastName', e.target.value)}}/>
                </div>
              </div>
              
              <div className="row">
                <div className="col-md-6 my-2">
                  <input type="text" className="form-control" placeholder="Phone" required={true} onChange={(e)=>{RegFormOnChange('phone', e.target.value)}}/>
                </div>

                <div className="col-md-6 my-2" >
                  <div className="wrapper d-flex">
                    <input type="radio" name="gender" value="male" id="option-1"
                      checked={gender === "male"}
                      onChange={handleGender}/>
                    <input type="radio" name="gender" value="female" id="option-2" 
                      checked={gender === "female"}
                      onChange={handleGender}
                    />
                    <label htmlFor="option-1" className="option option-1">
                      <span>Male</span>
                    </label>
                    <label htmlFor="option-2" className="option option-2">
                      <span>Female</span>
                    </label>
                  </div>
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
  );
};

export default RegistrationForm;