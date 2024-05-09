import {create} from 'zustand';
import axios  from "axios";
import {getEmail, unauthorized} from "../utility/utility.js";
import Cookies from "js-cookie";
const UserStore=create((set)=>({

    isLogin:()=>{
        return !!Cookies.get('shopinz');
    },

    LoginFormData:{email:"", password:""},
    LoginFormOnChange:(name,value)=>{
        set((state)=>({
            LoginFormData:{
                ...state.LoginFormData,
                [name]:value
            }
        }))
    },

    UserLoginRequest:async(formData)=>{
        try{
            set({isFormSubmit:true})
            let res = await axios.post(`/api/v1/users/login`, formData);
            set({isFormSubmit:false})
            return res.data['status'] === "success";
        }
        catch(e){
            set({isFormSubmit:false})
            console.log(e)
        }
    },

    RegFormData:{firstName:'', lastName:'', phone:'', email:"", password:"", gender:'male'},
    RegFormOnChange:(name,value)=>{
        set((state)=>({
            RegFormData:{
                ...state.RegFormData,
                [name]:value
            }
        }))
    },

    UserRegRequest:async (formData)=>{
        set({isFormSubmit:true})
        try{
            let res = await axios.post(`/api/v1/users/signup`, formData);
            set({isFormSubmit:false})
            return res.data['status'] === "success";
        }
        catch (error) {
            if (error.response && error.response.status === 404) {
                console.error("No data found:", error.response.data.message);
            } else {
                console.error("Error occurred:", error.message);
            }
            set({ isFormSubmit: false });
            return false; // Return false to indicate failure
        }
    },

    VerifyOTPRequest:async(otp)=>{
        set({isFormSubmit:true})
        try {
            let res = await axios.get(`/api/v1/users/verify/${otp}`, { timeout: 5000 });
            set({ isFormSubmit: false });
            return res.data['status'] === "success";
        } catch (error) {
            if (error.response && error.response.status === 404) {
                console.error("No data found:", error.response.data.message);
            } else {
                console.error("Error occurred:", error.message);
            }
            set({ isFormSubmit: false });
            return false; // Return false to indicate failure
        }
    },

    UserLogoutRequest:async()=>{
        set({isFormSubmit:true})
        let res = await axios.get(`/api/v1/users/logout`);
        set({isFormSubmit:false})
        return res.data['status'] === "success";
    },



    OTPFormData:{otp:""},
    OTPFormOnChange:(name,value)=>{
        set((state)=>({
            OTPFormData:{
                ...state.OTPFormData,
                [name]:value
            }
        }))
    },


    isFormSubmit:false,
    ProfileForm:{cus_add:"",cus_city:"",cus_country:"",cus_fax:"",cus_name:"",cus_phone:"",cus_postcode:"",cus_state:"",ship_add:"",ship_city:"",ship_country:"",ship_name:"",ship_phone:"",ship_postcode:"",ship_state:""},
    ProfileFormChange:(name,value)=>{
        set((state)=>({
            ProfileForm:{
                ...state.ProfileForm,
                [name]:value
            }
        }))
    },


    ProfileDetails:null,
    ProfileDetailsRequest: async ()=>{
        try {
            let res = await axios.get(`/api/v1/users/profile`);
            if(res.data['data']){
                set({ProfileDetails:res.data['data']})
                set({ProfileForm:res.data['data']})
            }else{
                set({ProfileDetails:{}})
            }
        }catch (e) {
            unauthorized(e.response.status)
        }
    },

    OrderDetails:null,
    OrderDetailsRequest:async()=>{
        try {
            let res = await axios.get(`/api/v1/users/orders`);
            if(res.data['data']){
                set({OrderDetails:res.data['data']})
            }else{
                set({ProfileDetails:[]})
            }
        }catch (e) {
            unauthorized(e.response.status)
        }
    },

    ProfileSaveRequest:async(PostBody)=>{
        try {
            set({ProfileDetails:null})
            let res=await axios.post(`/api/v1/users/profile`,PostBody);
            return res.data['status'] === "success";
        }catch (e) {
            unauthorized(e.response.status)
        }
    },

    ProfileDeleteRequest:async()=>{
        try {
            set({ProfileDetails:null})
            let res=await axios.delete(`/api/v1/users/profile`);
            return res.data['status'] === "success";
        }catch (e) {
            unauthorized(e.response.status)
        }
    }


}))

export default UserStore;