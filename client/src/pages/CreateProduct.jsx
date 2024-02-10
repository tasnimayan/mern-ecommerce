import { useState, useEffect } from "react";
import {useNavigate} from 'react-router-dom'
import toast from "react-hot-toast";
import ProductStore from '../store/ProductStore'
import Layout from "../components/layout/layout";

const CreateProduct = () => {
  const {CategoryList, CategoryListRequest} = ProductStore()
  const [product, setProduct] = useState(
    {
      title:'', 
      shortDes:'', 
      categoryID:'',
      price: '',
      discount: 'false',
      discountPrice: '',
      image: '',
      stock: 'true',
      sku: ''
    }
  )
  const navigateTo = useNavigate()

  // Fetching the categories for drop down 
  useEffect(()=>{
    (async ()=>{
      CategoryList===null?await CategoryListRequest():null;
  })()
  }, [])
  
  
  // On submitting the form
  const handleSubmit = async (e) => {
    e.preventDefault();
    if(product.title === '' || product.categoryId === ''){
      toast.error('Title or Category can\'t be empty')
    }
    else{
      const data = new FormData()
      data.append('title', product.title)
      data.append('description', product.description)
      data.append('categoryId', product.categoryId)
      data.append('status', product.status)
      data.append('manufacturer', product.manufacturer)
      
      for(let i = 0; i<product.photos.length ; i++){
        data.append('photos',product.photos[i])
      }
  
      const response = await createProduct(data)
      setProduct({title:'', description:'',categoryId:'',status:'',manufacturer:'',photos:[]})

      toast.success(response.data.message)
      navigateTo('/add')
    }
  }

  return (
    <Layout>
    <section>
      <div>
        <p className="fs-2 fw-bold lh-1">Create A Product </p>
      </div>
      <div className="d-flex flex-column align-items-center py-5">
        <div className="col-md-7 p-5 bg-white border rounded-4 shadow">
          <form className="form-horizontal" >
            <div className="form-group mb-4">
              <div className="row lh-1">
                <label className="col-md-3 fs-6 fw-semibold">Title :</label>
                <div className="col-md-9">
                  <input className="form-control" name="name" type="text" required onChange={(e)=> setProduct({...product, title:e.target.value})} value={product.title}/>
                </div>
              </div>
            </div>
            <div className="form-group mb-4">
              <div className="row lh-1">
                <label className="col-md-3 fs-6 fw-semibold">Description :</label>
                <div className="col-md-9">
                  <textarea rows="4" cols="5" name="description" className="form-control" onChange={(e)=> setProduct({...product, description:e.target.value})} value={product.description}></textarea>
                </div>
              </div>
            </div>
            <div className="form-group mb-4">
                <div className="row lh-1">
                    <label className="col-md-3 fs-6 fw-semibold">Category :</label>
                    <div className="col-md-9">
                        <select className="form-select form-custom" name="category" required onChange={(e)=> setProduct({...product, categoryId:e.target.value})} value={product.categoryId}>
                            <option value="">Select Category</option>
                            {
                            CategoryList?.map((item, index)=> <option value={item._id} key={index}>{item.categoryName}</option>)}
                        </select>
                    </div>
                </div>
            </div>
            <div className="form-group custom-autocomplete mb-4">
              <div className="row lh-1">
                <label className="col-md-3 fs-6 fw-semibold">Price :</label>
                <div className="col-md-9">
                  <input className="form-control" type="number" placeholder="Name of Manufacturer" onChange={(e)=> setProduct({...product, price:e.target.value})} value={product.price}/>
                </div>
              </div>
            </div>

            <div className="form-group mb-4">
              <div className="row lh-1">
                <label className="col-md-3 fs-6 fw-semibold">Discount :</label>
                <div className="col-md-9">
                  <input class="form-check-input fs-6" type="radio" name="isDiscount" id="isDiscount" />
                  <label class="form-check-label mx-2" htmlFor="isDiscount">
                    Yes
                  </label>
                  <input class="form-check-input ms-4 fs-6" type="radio" name="isDiscount" id="isDiscount" />
                  <label class="form-check-label mx-2" htmlFor="isDiscount">
                    No
                  </label>
                </div>
              </div>
            </div>

            <div className="form-group custom-autocomplete mb-4">
              <div className="row lh-1">
                <label className="col-md-3 fs-6 fw-semibold">Discount Price :</label>
                <div className="col-md-9">
                  <input className="form-control" type="number" placeholder="Name of Manufacturer" onChange={(e)=> setProduct({...product, discountPrice:e.target.value})} value={product.discountPrice}/>
                </div>
              </div>
            </div>
            
            <div className="form-group mb-4">
              <div className="row lh-1">
                <label className="col-md-3 fs-6 fw-semibold">Status :</label>
                <div className="col-md-9">
                  <select className="form-select form-custom" name="status" onChange={(e)=> setProduct({...product, status:e.target.value})} value={product.status}>
                    <option value="">Please Select</option>
                    <option value="status1">In Stock</option>
                    <option value="status2">Out of Stock</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="form-group custom-autocomplete mb-4">
              <div className="row lh-1">
                <label className="col-md-3 fs-6 fw-semibold">Manufacturer :</label>
                <div className="col-md-9">
                  <input className="form-control" placeholder="Name of Manufacturer" onChange={(e)=> setProduct({...product, manufacturer:e.target.value})} value={product.manufacturer}/>
                </div>
              </div>
            </div>
            <div className="form-group mb-4">
              <div className="row lh-1">
                <label className="col-md-3 fs-6 fw-semibold">Image :</label>
                <div className="col-md-9">
                  <input className="form-control" 
                    name="photos" 
                    type="file" multiple required 
                    onChange={(e)=> setProduct({...product, photos:e.target.files})}/>
                </div>
              </div>
            </div>

            <div className="text-center mt-5">
              <input className="btn btn-primary px-5" type="submit" onClick={(e)=>handleSubmit(e)}/>
            </div>

          </form>
        </div>
    </div>
    </section>
    </Layout>

  );
};

export default CreateProduct;