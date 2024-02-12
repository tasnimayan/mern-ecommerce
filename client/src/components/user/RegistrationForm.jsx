import { useState } from 'react';
import UserStore from './../../store/UserStore';
import ValidationHelper from './../../utility/ValidationHelper'
import toast from "react-hot-toast";
import {useNavigate} from "react-router-dom";

const RegistrationForm = () => {
  let {RegFormData, RegFormOnChange, UserRegRequest } = UserStore();
  let [gender, setGender] = useState('male');
  let navigate = useNavigate();

    const onFormSubmit=async ()=>{
        if(!ValidationHelper.IsEmail(RegFormData.email)){
            toast.error("Invalid Email Address!")
        }else {
          console.log(RegFormData)
            // let res = await UserRegRequest(RegFromData);
            res?navigate("/profile"):toast.error("Something Went Wrong!")
        }
    }
    
  return (
    <section className="bg-white">
      <div className="role">

      </div>
      <div className="w-75 mx-auto p-4">
        <div className="flex-center my-5 shadow-smc border">
          <div className="w-40 h-100">
            <img src="src/assets/images/register_poster.jpg" alt="" className="object-fit-cover" style={{width:"100%", height:"100%"}}/>
          </div>
          <div className="w-60 p-5 text-center">
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
                  <input type="text" className="form-control" placeholder="First Name" onChange={(e)=>{RegFormOnChange('firstName', e.target.value)}}/>
                </div>
                <div className="col-md-6 my-2">
                  <input type="text" className="form-control" placeholder="Last Name" onChange={(e)=>{RegFormOnChange('lastName', e.target.value)}}/>
                </div>
              </div>
              
              <div className="row">
                <div className="col-md-6 my-2">
                  <input type="text" className="form-control" placeholder="Phone" onChange={(e)=>{RegFormOnChange('phone', e.target.value)}}/>
                </div>
                <div className="col-md-6 my-2" >
                    <label className="male border rounded shadow-sm p-2 w-50">
                      <input type="radio" name="gender" value="male" 
                        checked = {gender === 'male'} 
                        onChange={(e)=>{
                          setGender('male')
                          RegFormOnChange('gender', gender)}
                        }/> Male<br />
                      <span className="checkmark"></span>
                    </label>
                    <label className="female border rounded shadow-sm p-2 w-50">
                      <input type="radio" name="gender" value="female"
                        checked = {gender === 'female'}  
                        onChange={(e)=>{
                          setGender('female')
                          RegFormOnChange('gender', gender)}
                        }
                        /> Female<br />
                      <span className="checkmark"></span>
                    </label>
                </div>

              </div>
              <div className="row">
                <div className="col-md-12 my-2">
                  <input type="email" className="form-control" placeholder="Email" onChange={(e)=>{RegFormOnChange('email', e.target.value)}}/>
                </div>
              </div>

              <div className="row">
                <div className="col-md-12 my-2">
                  <input type="password" className="form-control" placeholder="Password" onChange={(e)=>{RegFormOnChange('password', e.target.value)}}/>
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