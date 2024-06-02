import { useEffect, useState } from 'react';
import ProductStore from '../../../store/ProductStore';
import sellerStore from '../../../store/sellerStore';
import { toast } from 'react-hot-toast';

const AddProductForm = () => {
  const {CategoryList, CategoryListRequest, BrandList, BrandListRequest} = ProductStore()
  const {productData, productDataOnChange, CreateProductRequest} = sellerStore()

  const [file, setFile] = useState(null)

  const handleDragOver = (e)=>{
    e.preventDefault();

    const selectedFile = e.target.files;
    if(selectedFile){
      setFile(selectedFile.name)
      console.log(file)
      productData.photos = selectedFile
    }
  }

  const handleClearFile = ()=>{
    setFile(null)
  }

  useEffect(()=>{
    (async()=>{
      await CategoryListRequest()
      await BrandListRequest()
    })()  
  },[]);


  const publishProduct = async (e)=>{
    e.preventDefault();
    console.log(productData)
    let res = await CreateProductRequest(productData)
    if(res){
      toast.success("Product has been Published")
    }
    else{
      toast.error("Failed! Something went wrong.")
    }
  }

  const saveDraft = ()=>{
    // 
  }

  const discard = () =>{
    // 
  }


  return (
    <div>
      {/* ---- Top Heading section with Buttons ---- */}
      <form className="mb-9">
        <div className="d-flex flex-wrap justify-content-between mb-5">
          <div className=''>
            <h2 className="mb-0 fw-semibold">Add a product</h2>
            <p className="m-0 fs-lg text-black-50">Orders placed across your store</p>
          </div>
          <div className="d-flex align-items-end gap-2">
            <button type="button" className="btn btn-gray fs-sm fw-semibold" onClick={discard}>Discard</button>
            <button type="button" className="btn btn-gray fs-sm fw-semibold" onClick={saveDraft}>Save draft</button>
            <button type="submit" onClick={publishProduct} className="btn py-2 btn-primary fs-sm fw-semibold">Publish product</button>
          </div>
        </div>

          {/* ---- Middle section ----- */}
          <div className="row">
            <div className="col-md-8 col-12">
              <h4 className="mb-3">Product Title</h4>
              <input placeholder="Write title here..." className="mb-5 form-control" onChange={(e)=>{productDataOnChange('title', e.target.value)}}/>
              <div className="mb-6">
                <h4 className="mb-3">Product Description</h4>
                <textarea rows={8} className='form-control' placeholder='Write description here' onChange={(e)=>{productDataOnChange('des', e.target.value)}}></textarea>
              </div>
              <div className="mb-5">
                <h4 className="mb-3">Display images</h4>
                <div role="presentation" tabIndex="0" className="mb-3 border-1 border-dark-subtle rounded-3 py-4" style={{borderStyle:"dashed"}}>
                  <div className="position-relative fw-bold d-flex flex-column align-items-center">Drag your images here 
                    <i className="d-block bi bi-images display-2 text-black-50"></i>
                    <span className="d-block text-800">or</span>
                    <button type="button" className="p-0 btn btn-link">Choose file</button><br />
                    <input type="file" accept="image/*,.png,.gif,.jpeg,.jpg" multiple tabIndex="-1" className='position-absolute top-0 w-100 h-100 opacity-0' onChange={handleDragOver}/>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="mb-3">Inventory</h4>
                <div className="row g-0 border-top border-bottom">

                  {/* ================ Tabs panel goes here =================*/}

                  <div className="col-sm-4 col-12 bg-white">
                    <ul className="nav nav-tabs flex-sm-column border-bottom border-bottom-sm-0 border-end-sm h-100 justify-content-between" id="myTab" role="tablist">

                      <li className="nav-item" role="presentation">
                        <a role="tab" data-bs-toggle="tab" data-bs-target="#pricing" id="pricing-tab" aria-controls="pricing" aria-selected="true" className="nav-link active text-sm-start cursor-pointer outline-none d-sm-flex align-items-sm-center border-bottom-sm border-end border-end-sm-0" href="#pricing">
                          <i className="bi bi-tag feather feather-tag me-sm-2 nav-icons"></i>
                          <span className="d-none d-sm-inline">Pricing</span>
                      </a>

                      </li>
                      <li className="nav-item" role="presentation">
                        <a className="nav-link text-center text-sm-start cursor-pointer outline-none d-sm-flex align-items-sm-center border-bottom-sm border-end border-end-sm-0" id="restock-tab" data-bs-toggle="tab" data-bs-target="#restock" type="button" role="tab" aria-controls="restock" aria-selected="false"  href="#restock">
                          <i className="bi bi-box-seam feather feather-package me-sm-2 nav-icons"></i>
                          <span className="d-none d-sm-inline">Restock</span>
                        </a>

                      </li>
                      <li className="nav-item" role="presentation">
                      <a className="nav-link text-center text-sm-start cursor-pointer outline-none d-sm-flex align-items-sm-center border-bottom-sm border-end border-end-sm-0" id="shipping-tab" data-bs-toggle="tab" data-bs-target="#shipping" type="button" role="tab" aria-controls="shipping" aria-selected="false"  href="#shipping">
                        <i className="bi bi-truck feather feather-package me-sm-2 nav-icons"></i>
                        <span className="d-none d-sm-inline">Shipping</span>
                          
                        </a>
                      </li>
                      <li className="nav-item" role="presentation">
                        <a className="nav-link text-center text-sm-start cursor-pointer outline-none d-sm-flex align-items-sm-center border-bottom-sm border-end border-end-sm-0" id="attributes-tab" data-bs-toggle="tab" data-bs-target="#attributes" type="button" role="tab" aria-controls="attributes" aria-selected="false"  href="#attributes">
                          <i className="bi bi-sliders2 feather feather-package me-sm-2 nav-icons"></i>
                          <span className="d-none d-sm-inline">Attributes</span>
                        </a>
                      </li>
                      <li className="nav-item" role="presentation">
                        <a className="nav-link text-center text-sm-start cursor-pointer outline-none d-sm-flex align-items-sm-center border-bottom-sm border-end border-end-sm-0" id="advanced-tab" data-bs-toggle="tab" data-bs-target="#advanced" type="button" role="tab" aria-controls="advanced" aria-selected="false"  href="#advanced">
                          <i className="bi bi-shield-lock feather feather-package me-sm-2 nav-icons"></i>
                          <span className="d-none d-sm-inline">Advanced</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                  
                  {/* ================ Tabs content goes here =================*/}
                  <div className="col-sm-8 col-12">
                    <div className="py-3 ps-sm-4 h-100 tab-content">

                    <div className="tab-content" id="myTabContent">

                      <div className="tab-pane fade show active" id="pricing" role="tabpanel" aria-labelledby="pricing-tab">
                        <h4 className="mb-3">Pricing</h4>
                        <div className="g-3 row">
                          <div className="col-lg-6 col-12">
                            <h6 className="mb-2 text-1000">Regular price</h6>
                            <input placeholder="$" type="text" className="form-control" onChange={(e)=>{productDataOnChange('price', e.target.value)}}/>
                          </div>
                          <div className="col-lg-6 col-12">
                            <h6 className="mb-2 text-1000">Sale price</h6>
                            <input placeholder="$" type="text" className="form-control" onChange={(e)=>{productDataOnChange('discountPrice', e.target.value)}}/>
                          </div>
                        </div>
                      </div>

                      <div className="tab-pane fade" id="restock" role="tabpanel" aria-labelledby="restock-tab">
                        <div className="d-flex flex-column h-100">
                          <h6 className="mb-3 text-1000">Add to Stock</h6>
                          <div className="flex-1 mb-4">
                            <div className="d-flex gap-3">
                              <input placeholder="Quantity" type="number" className="input-spin-none form-control" style={{maxWidth: "385px"}} onChange={(e)=>{productDataOnChange('stock', e.target.value)}}/>
                              <button type="button" className="text-nowrap btn btn-primary">
                                Confirm
                              </button>
                            </div>
                          </div>
                          <table>
                            <thead>
                              <tr>
                                <th style={{width: "200px"}}></th>
                                <th></th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td className="text-1000 fw-bold py-1">Product in stock now:</td>
                                <td className="text-700 fw-semi-bold py-1">
                                  00
                                </td>
                              </tr>
                              <tr>
                                <td className="text-1000 fw-bold py-1">Product in transit:</td>
                                <td className="text-700 fw-semi-bold py-1">00</td>
                              </tr>
                              <tr>
                                <td className="text-1000 fw-bold py-1">Total stock over lifetime:</td>
                                <td className="text-700 fw-semi-bold py-1">00</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>

                    <div className="tab-pane fade" id="shipping" role="tabpanel" aria-labelledby="shipping-tab">
                      <div className="d-flex flex-column h-100">
                        <h6 className="mb-3 text-1000">Shipping Type</h6>
                        <div className="flex-1">
                          <div className="mb-4">
                            <div className="form-check">
                              <input name="shipping" type="radio" id="fullfilledBySeller" className="form-check-input" /><label htmlFor="fullfilledBySeller" className="text-900 fs-8 form-check-label">Fullfilled by Seller</label>
                            </div>
                            <div className="ps-4">
                              <p className="text-800 fs-9 mb-0">You’ll be responsible for product delivery. <br/>Any damage or delay during shipping may cost you a Damage fee.</p>
                            </div>
                          </div>
                          <div className="mb-4">
                            <div className="form-check"><input name="shipping" type="radio" id="fullfilledByPhoenix" className="form-check-input" /><label htmlFor="fullfilledByPhoenix" className="text-900 fs-8 form-check-label">Fullfilled by ShopinZ<span className="ms-2 badge-phoenix badge-phoenix-warning badge">Recommended</span></label></div>
                            <div className="ps-4">
                              <p className="text-800 fs-9 mb-0">Your product, Our responsibility.<br/>For a measly fee, we will handle the delivery process for you.</p>
                            </div>
                          </div>
                        </div>
                        <p className="fs-9 fw-semi-bold mb-0">See our <a className="fw-bold" href="#!">Delivery terms and conditions </a>for details.</p>
                      </div>
                    </div>

                    <div className="tab-pane fade" id="attributes" role="tabpanel" aria-labelledby="attributes-tab">
                      <h6 className="mb-3 text-1000">Attributes</h6>
                      <div className="form-check">
                        <input name="attributes" type="checkbox" id="fragileCheck" className="form-check-input" /><label htmlFor="fragileCheck" className="text-900 fs-8 form-check-label">Fragile Product</label>
                      </div>
                      <div className="form-check">
                        <input name="attributes" type="checkbox" id="biodegradableCheck" className="form-check-input" /><label htmlFor="biodegradableCheck" className="text-900 fs-8 form-check-label">Biodegradable</label></div>
                      <div className="mb-3 form-check">
                        <input name="attributes" type="checkbox" id="frozenProduct" className="form-check-input" /><label htmlFor="frozenProduct" className="text-900 fs-8 form-check-label">Frozen Product</label>
                        <input placeholder="Max. allowed Temperature" type="text" id="frozenProduct" className="form-control" style={{maxWidth: "350px"}} /></div>
                      <div className="form-check">
                        <input name="attributes" type="checkbox" id="expDate" className="form-check-input" /><label htmlFor="expDate" className="text-900 fs-8 form-check-label">Expiry Date of Product</label>
                        <input type="date" id="expDate" className="form-control" style={{maxWidth: "350px"}} /></div>
                    </div>

                    <div className="tab-pane fade" id="advanced" role="tabpanel" aria-labelledby="advanced-tab">
                      <h6 className="mb-3 text-1000">Advanced</h6>
                      <div className="row g-3">
                        <div className="col-12">
                          <h6 className="mb-2 text-1000">SKU <span className='fs-sm'>(Stock Keeping Unit)</span></h6>
                          <input placeholder="SKU ID" type="text" className="form-control" onChange={(e)=>{productDataOnChange('sku', e.target.value)}}/>
                        </div>
                      </div>
                    </div>
                  
                  </div>
                </div>
              </div>

                </div>
              </div>
            </div>

            <div className="col-lg-4 col-12">
              <div className="mb-3 card border">
                <div className="card-body">
                  <h4 className="">Organize</h4>
                      <div className="d-flex gap-2 mb-2">
                        <h5 className="mb-0 text-1000">Category</h5>
                      </div>
                      <select aria-label="category" className="form-select overflow-y-scroll" onChange={(e)=>{productDataOnChange('categoryID', e.target.value)}}>
                        <option value="" selected disabled>-----</option>
                        {
                          CategoryList?.map((item, idx)=>{
                            return (
                              <option key={idx} value={item._id}>{item.categoryName}</option>
                            )
                          })
                        }
                      </select>
                    <div className="col-xl-12 col-sm-6 col-12">
                      <div className="d-flex gap-2 mb-2">
                        <h5 className="mb-0 text-1000">Brand</h5>
                      </div>
                      <select aria-label="vendor" className="form-select overflow-y-scroll" onChange={(e)=>{productDataOnChange('brandID', e.target.value)}}>
                        <option value="" selected disabled>-----</option>
                        {
                          BrandList?.map((item, idx)=>{
                            return (
                              <option key={idx} value={item._id}>{item.brandName}</option>
                            )
                          })
                        }                        
                      </select>
                    </div>
                    

                    <div className="col-xl-12 col-sm-6 col-12">
                      <div className="d-flex gap-2">
                        <h5 className="mb-2 text-1000">Tags</h5>
                        <p className="fs-sm mb-0 text-black-50">(eg. shirt, men, half-sleeve)</p>
                      </div>
                      <input placeholder="Tags" type="text" className="form-control" onChange={(e)=>{productDataOnChange('tags', e.target.value)}}/>
                    </div>

                  {/* </div> */}
                </div>
              </div>

              <div className="card border">
                <div className="card-body">
                  <h4 className="mb-4">Variants</h4>
                  <div className="gx-3 gy-4 mb-3 row">
                    <div className="col-xl-12 col-sm-6 col-12">
                      <div className="border-bottom border-dashed border-sm-0 border-bottom-xl pb-4">
                        <div className="d-flex gap-2 mb-2">
                          <h5 className="mb-0 text-1000">Option 1</h5>
                          <a className="fw-bold fs-9" href="/apps/e-commerce/admin/add-product#!">Remove</a>
                        </div>
                        <select className="mb-3 form-select">
                          <option value="size">Size</option>
                          <option value="color">Color</option>
                          <option value="weight">Weight</option>
                          <option value="smell">Smell</option>
                        </select>
                        <div className="react-select-container">
                          <div className=" css-b62m3t-container">
                            <span id="react-select-6-live-region"></span><span aria-live="polite" aria-atomic="false" aria-relevant="additions text" role="log"></span>
                            <div>
                              <div>
                                
                                <div className="">
                                  <input className="form-control" autoComplete="off" autoCorrect="off" spellCheck="false" tabIndex="0" type="text" aria-autocomplete="list" aria-expanded="false" aria-haspopup="true" role="combobox" /></div>
                              </div>
                              
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-12 col-sm-6 col-12">
                      <div>
                        <div className="d-flex gap-2 mb-2">
                          <h5 className="mb-0 text-1000">Option 1</h5>
                          <a className="fw-bold fs-9" href="/apps/e-commerce/admin/add-product#!">Remove</a>
                        </div>
                        <select className="mb-3 form-select">
                          <option value="size">Size</option>
                          <option value="color">Color</option>
                          <option value="weight">Weight</option>
                          <option value="smell">Smell</option>
                        </select>
                        <div className="react-select-container">
                          <div className="react-select__input-container css-19bb58m" data-value="">
                            <input className="form-control" type="text" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button type="button" className="w-100 btn btn-gray text-link fs-sm fw-semibold">Add another option</button>
                </div>
              </div>

            </div>
          </div>

        </form>
      
    </div>
  );
};

export default AddProductForm;