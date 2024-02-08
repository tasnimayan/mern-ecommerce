import {create} from 'zustand';
import axios  from "axios";
import {unauthorized} from "../utility/utility.js";

const CartStore=create((set)=>({

    isCartSubmit:false,

    CartForm:{productID:"",color:"",qty:"1",size:""},
    CartFormChange:(name,value)=>{
        set((state)=>({
            CartForm:{
                ...state.CartForm,
                [name]:value
            }
        }))
    },

    CartSaveRequest:async(PostBody,productID)=>{
        try {
            set({isCartSubmit:true})
            PostBody.productID = productID
            let res=await axios.post(`/api/v1/users/cart-list`,PostBody);
            return res.data['status'] === "success";
        }catch (e) {
            unauthorized(e.response.status)
        }finally {
            set({isCartSubmit:false})
        }
    },



    CartList:null,
    CartCount:0,
    CartListRequest:async()=>{
        try {
            let res = await axios.get(`/api/v1/users/cart-list`);
            set({CartList:res.data['data']})
            set({CartCount:(res.data['data']).length})

        }catch (e) {
            console.log(e)
            unauthorized(e.response.status)
        }finally {
            set({isCartSubmit:false})
        }
    },




    CreateInvoiceRequest:async()=>{
        try {
            set({isCartSubmit:true})
            let res = await axios.get(`/api/v1/invoice/create-invoice`);
            window.location.href=res.data['data']['GatewayPageURL'];
        }catch (e) {
            unauthorized(e.response.status)
        }finally {
            set({isCartSubmit:false})
        }
    },


    InvoiceList:null,
    InvoiceListRequest:async()=>{
        try {
            let res = await axios.get(`/api/v1/invoice/invoice-list`);
            set({InvoiceList:res.data['data']})
        }catch (e) {
            unauthorized(e.response.status)
        }finally {
        }
    }

}))

export default CartStore;