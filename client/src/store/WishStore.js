import {create} from 'zustand';
import axios  from "axios";
import {unauthorized} from "../utility/utility.js";

const WishStore=create((set)=>({

    isWishSubmit:false,

    WishSaveRequest:async(PostBody)=>{
        try {
            set({isWishSubmit:true})
            let res = await axios.post(`/api/v1/users/wish-list`,PostBody);
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
            console.log(res)
            set({WishList:res.data['data'].products})
            set({WishCount:(res.data['data']).products.length})

        }catch (e) {
            console.log(e)
            unauthorized(e.response.status)
        }finally {
            set({isWishSubmit:false})
        }
    },

    RemoveFromWishRequest: async(id)=>{
        try {
            let postBody = {productId:id}
            set({isWishSubmit:true})
            let res = await axios.delete(`/api/v1/users/wish-list`, {data:postBody});
            return res.data['status'] === "success";
        }catch (e) {
            console.log(e)
            unauthorized(e.response.status)
        }finally {
            set({isWishSubmit:false})
        }
    },



}))

export default WishStore;