import {create} from 'zustand'
import axios  from "axios";
import {getEmail, setEmail, unauthorized} from "../utility/utility.js";
import Cookies from "js-cookie";

const sellerStore = create((set)=>({
  isFormSubmit: false,

  isLogin:()=>{
    return !!Cookies.get('seller');
  },

  SellerLoginData:{email:"", password:""},
  LoginFormOnChange:(name,value)=>{
      set((state)=>({
        SellerLoginData:{
              ...state.SellerLoginData,
              [name]:value
          }
      }))
  },

  SellerLoginRequest:async(formData)=>{
      set({isFormSubmit:true})
      let res = await axios.post(`/api/v1/seller/login`, formData);
      set({isFormSubmit:false})
      return res.data['status'] === "success";
  },

  UserLogoutRequest:async()=>{
    set({isFormSubmit:true})
    let res = await axios.get(`/api/v1/seller/logout`);
    set({isFormSubmit:false})
    return res.data['status'] === "success";
  },

  productData: {title:'', des:'', image:'', price:'', discount:false, discountPrice:'',categoryID:'', brandID:'', tags:'', size:'',color:'', stock:1, sku:''},
  productDataOnChange: (name, value) => {
    set((state)=>({
      productData:{
        ...state.productData,
        [name]:value
      }
    }))
  },

  CreateProductRequest:async(PostBody)=>{
    try {
        set({productData:null})
        let res = await axios.post(`/api/v1/seller/products`,PostBody);
        return res.data['status'] === "success";
    }catch (e) {
        unauthorized(e.response.status)
    }
  },

  ProductDeleteRequest:async(id)=>{
    try {
        set({productData:null})
        let res = await axios.delete(`/api/v1/seller/products/${id}`);
        return res.data['status'] === "success";
    }catch (e) {
        unauthorized(e.response.status)
    }
  },

  SellerProducts:[],
  SellerProductsRequest:async()=>{
    try {
        let res=await axios.get(`/api/v1/seller/products`);
        if(res.data['data']){
            set({SellerProducts:res.data['data']})
        }else{
            set({SellerProducts:[]})
        }
    }catch (e) {
        unauthorized(e.response.status)
    }
  },

  SearchProductRequest: async (query) =>{
    try {
      let res=await axios.get(`/api/v1/seller/search/${query}`);
      if(res.data['data']){
          set({SellerProducts:res.data['data']})
      }else{
          set({SellerProducts:[]})
      }
    }catch (e) {
        unauthorized(e.response.status)
    }
  },

  
// RegFormData:{firstName:'', lastName:'', phone:'', email:"", password:"", gender:'male'},
// RegFormOnChange:(name,value)=>{
//     set((state)=>({
//         RegFormData:{
//             ...state.RegFormData,
//             [name]:value
//         }
//     }))
// },

// UserRegRequest:async(formData)=>{
//     set({isFormSubmit:true})
//     let res = await axios.post(`/api/v1/users/signup`, formData);
//     set({isFormSubmit:false})
//     return res.data['status'] === "success";
// },

// VerifyOTPRequest:async(otp)=>{
//     set({isFormSubmit:true})
//     let res=await axios.get(`/api/v1/users/verify/${otp}`);
//     set({isFormSubmit:false})
//     return res.data['status'] === "success";
// },





// ProfileForm:{cus_add:"",cus_city:"",cus_country:"",cus_fax:"",cus_name:"",cus_phone:"",cus_postcode:"",cus_state:"",ship_add:"",ship_city:"",ship_country:"",ship_name:"",ship_phone:"",ship_postcode:"",ship_state:""},
// ProfileFormChange:(name,value)=>{
//     set((state)=>({
//         ProfileForm:{
//             ...state.ProfileForm,
//             [name]:value
//         }
//     }))
// },


// ProfileDetails:null,
// ProfileDetailsRequest:async()=>{
//     try {
//         let res=await axios.get(`/api/v1/users/profile`);
//         if(res.data['data']){
//             set({ProfileDetails:res.data['data']})
//             set({ProfileForm:res.data['data']})
//         }else{
//             set({ProfileDetails:{}})
//         }
//     }catch (e) {
//         unauthorized(e.response.status)
//     }
// },

// ProfileSaveRequest:async(PostBody)=>{
//     try {
//         set({ProfileDetails:null})
//         let res=await axios.post(`/api/v1/users/profile`,PostBody);
//         return res.data['status'] === "success";
//     }catch (e) {
//         unauthorized(e.response.status)
//     }
// },

// ProfileDeleteRequest:async()=>{
//     try {
//         set({ProfileDetails:null})
//         let res=await axios.delete(`/api/v1/users/profile`);
//         return res.data['status'] === "success";
//     }catch (e) {
//         unauthorized(e.response.status)
//     }
// }

}))

export default sellerStore;