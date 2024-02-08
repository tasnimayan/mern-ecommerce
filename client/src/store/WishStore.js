import {create} from 'zustand';
import axios  from "axios";
import {unauthorized} from "../utility/utility.js";

const WishStore=create((set)=>({

    isWishSubmit:false,

    WishForm:{productID:"",color:"",qty:"1",size:""},
    WishFormChange:(name,value)=>{
        set((state)=>({
            WishForm:{
                ...state.WishForm,
                [name]:value
            }
        }))
    },

    WishSaveRequest:async(PostBody,productID)=>{
        try {
            set({isWishSubmit:true})
            PostBody.productID = productID
            let res=await axios.post(`/api/v1/users/wish-list`,PostBody);
            return res.data['status'] === "success";
        }catch (e) {
            unauthorized(e.response.status)
        }finally {
            set({isWishSubmit:false})
        }
    },



    WishList:null,
    WishCount:0,
    WishListRequest:async()=>{
        try {
            let res = await axios.get(`/api/v1/users/wish-list`);
            set({WishList:res.data['data'].product})
            set({WishCount:(res.data['data']).length})

        }catch (e) {
            console.log(e)
            unauthorized(e.response.status)
        }finally {
            set({isWishSubmit:false})
        }
    },


}))

export default WishStore;