import {create} from 'zustand';
import axios  from "axios";

const ProductStore=create((set)=>({
    BrandList:null,
    BrandListRequest:async()=>{
        let res=await axios.get(`/api/v1/products/brands`);
        if(res.data['status']==="success"){
            set({BrandList:res.data['data']})
        }
    },

    CategoryList:null,
    CategoryListRequest:async()=>{
        let res=await axios.get(`/api/v1/products/category`);
        if(res.data['status']==="success"){
            set({CategoryList:res.data['data']})
        }
    },

    SliderList:null,
    SliderListRequest:async()=>{
        let res=await axios.get(`/api/v1/products/slider`);
        if(res.data['status']==="success"){
            set({SliderList:res.data['data']})
        }
    },

    ListByRemark:null,
    ListByRemarkRequest:async(Remark)=>{
        set({ListByRemark:null})
        let res=await axios.get(`/api/v1/products/remark/${Remark}`);
        if(res.data['status']==="success"){
            set({ListByRemark:res.data['data']})
        }
    },

    ListProduct:null,
    ListByBrandRequest:async(BrandID)=>{
        set({ListProduct:null})
        let res=await axios.get(`/api/v1/products/brands/${BrandID}`);
        if(res.data['status']==="success"){
            set({ListProduct:res.data['data']})
        }
    },
    ListByCategoryRequest:async(CategoryID)=>{
        set({ListProduct:null})
        let res=await axios.get(`/api/v1/products/category/${CategoryID}`);
        if(res.data['status']==="success"){
            set({ListProduct:res.data['data']})
        }
    },
    ListByKeywordRequest:async(Keyword)=>{
        set({ListProduct:null})
        let res=await axios.get(`/api/v1/products/search/${Keyword}`);
        if(res.data['status']==="success"){
            set({ListProduct:res.data['data']})
        }
    },
    ListByFilterRequest:async(postBody)=>{
        set({ListProduct:null})
        let res=await axios.post(`/api/v1/products/filter`,postBody);
        if(res.data['status']==="success"){
            set({ListProduct:res.data['data']})
        }
    },

    SearchKeyword:"",
    SetSearchKeyword:async(keyword)=>{
        set({SearchKeyword:keyword})
    },


    Details:null,
    DetailsRequest:async(id)=>{
        let res=await axios.get(`/api/v1/products/product/${id}`);
        if(res.data['status']==="success"){
            set({Details:res.data['data']})
        }
    },

    ReviewList:null,
    ReviewListRequest:async(id)=>{
        let res=await axios.get(`/api/v1/products/${id}/review`);
        if(res.data['status']==="success"){
            set({ReviewList:res.data['data']})
        }
    },


}))

export default ProductStore;