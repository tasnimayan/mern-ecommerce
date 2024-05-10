
import { useEffect } from "react";
import ProductStore from "../store/ProductStore.js";
import Layout from "../components/layout/layout.jsx";
import ProductList from "../components/product/product-list.jsx";



const ProductByType = ({categoryId}) => {
  const {ListByCategoryRequest}=ProductStore();

    useEffect(() => {
        (async ()=>{
            await ListByCategoryRequest(categoryId)
        })()
    }, [categoryId]);

  return (
    <Layout>
        <ProductList/>
    </Layout>
  );
};

export default ProductByType;