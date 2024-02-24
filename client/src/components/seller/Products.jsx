
import { useEffect, useState } from "react";
import sellerStore from "../../store/sellerStore";
import SellerLayout from "./SellerLayout";
import ProductRow from "./ProductRow";
import { useNavigate } from 'react-router-dom';

const Products = () => {
  const {SellerProducts, SellerProductsRequest, SearchProductRequest} = sellerStore()

  const [sortCategory, setSortCategory] = useState(true) // true = ascending
  const [sortBrand, setSortBrand] = useState(true)
  const [search, setSearch] = useState('')
  let navigate = useNavigate()


  useEffect(()=>{
    (async ()=>{
      await SellerProductsRequest()
      
    })()
  }, [])

  const sortByCategory = ()=>{
    if(sortCategory){
      SellerProducts.sort((a, b)=>{
        return a.category.categoryName.localeCompare(b.category.categoryName);
      })
    }
    else{
      SellerProducts.sort((a, b)=>{
        return b.category.categoryName.localeCompare(a.category.categoryName);
      })
    }
    setSortCategory(!sortCategory)
  }

  const sortByBrand = ()=>{
    if(sortBrand){
      SellerProducts.sort((a, b)=>{
        return a.brand.brandName.localeCompare(b.brand.brandName);
      })
    }
    else{
      SellerProducts.sort((a, b)=>{
        return b.brand.brandName.localeCompare(a.brand.brandName);
      })
    }
    setSortBrand(!sortBrand)
  }
  
  const onSearch = async (e)=>{
    e.preventDefault()
    search ? await SearchProductRequest(search) : navigate('/seller/products')
  }


  return (
    <SellerLayout>
      <div>
        <div className="mb-9">
          <h2 className="mb-4">Products</h2>
          <div className="mb-2 nav nav-links mx-n2 nav">
            <div className="nav-item"><a role="button" className="px-2 active nav-link" tabIndex="0" href="#">All <span className="text-700 fw-semi-bold">({SellerProducts.length})</span></a></div>
            <div className="nav-item"><a role="button" className="px-2 nav-link" tabIndex="0" href="#">Published <span className="text-700 fw-semi-bold">({SellerProducts.length})</span></a></div>
            <div className="nav-item"><a role="button" className="px-2 nav-link" tabIndex="0" href="#">Drafts <span className="text-700 fw-semi-bold">(0)</span></a></div>
            <div className="nav-item"><a role="button" className="px-2 nav-link" tabIndex="0" href="#">On discount <span className="text-700 fw-semi-bold">({SellerProducts.length})</span></a></div>
          </div>
          
          <div className="mb-4">
            <div className="d-flex flex-wrap gap-3">
                          
              <div className="search-box">
                <form className="input-group border rounded-2 p-0" onSubmit={onSearch}>
                  <input onChange={(e)=>setSearch(e.target.value)} className="form-control border-0 searchbox shadow-none" type="search" value={search} placeholder="Search products" aria-label="Search"/>
                  <i className="bi bi-search fs-lg btn search" type="submit" onClick={onSearch}></i>
                </form>
              </div>

              <div className="scrollbar overflow-hidden-y">
                <div role="group" className="position-static btn-group">
                  <div role="group" className="position-static dropdown btn-group">
                    <button type="button" id="react-aria9106521202-:r6:" aria-expanded="false" className="px-7 flex-shrink-0 dropdown-caret-none dropdown-toggle btn btn-phoenix-secondary" onClick={sortByCategory}>
                      Category
                      {
                        sortCategory ? <i className="bi bi-chevron-down ms-2"></i> : <i className="bi bi-chevron-up ms-2"></i>
                      }
                      
                    </button>
                  </div>
                  <div role="group" className="position-static dropdown btn-group">
                    <button type="button" className="px-7 flex-shrink-0 dropdown-caret-none dropdown-toggle btn btn-phoenix-secondary" onClick={sortByBrand}>
                      Brand
                      {
                        sortBrand ? <i className="bi bi-chevron-down ms-2"></i> : <i className="bi bi-chevron-up ms-2"></i>
                      }
                    </button>
                  </div>

                </div>
              </div>

              <div>
                <button type="button" className="text-900 me-4 px-0 btn btn-link">
                  <i className="bi bi-file-arrow-up-fill fs-md me-2"></i>
                  Export
                </button>
                <a href="/seller/add-product" type="button" className="btn btn-primary">
                  <i className="bi bi-plus-lg fs-md me-2"></i>
                  Add product
                </a>
              </div>
            </div>
          </div>

          <div className="px-4 bg-white border-top border-bottom position-relative">
            <div>
              <div className="scrollbar ms-n1 ps-1">
                <table className="phoenix-table fs-9 table">
                  <thead>
                    <tr>
                      <th className="" style={{width: "30px"}}>
                        <div className="form-check fs-8 mb-0"><input type="checkbox" className="form-check-input" /></div>
                      </th>
                      <th className="" style={{width: "70px"}}></th>
                      <th className="ps-4 sort" style={{width: "350px"}}>Product name</th>
                      <th className="ps-4 text-end sort" style={{width: "150px"}}>Price</th>
                      <th className="ps-4 sort" style={{width: "150px"}}>Category</th>
                      <th className="ps-3" style={{width: "225px", minWidth:"200px"}}>Tags</th>
                      <th className="ps-3" style={{width: "50px"}}>Stock</th>
                      <th className="ps-4 sort" style={{width: "50px"}}>Published on</th>
                      <th className="" style={{width: "7"}}></th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      SellerProducts?.length === 0? (
                        <tr>
                          <td><div className="spinner-border text-secondary" role="status"></div></td>
                        </tr>) :

                        SellerProducts?.map((item,idx)=>{
                          return <ProductRow product={item} key={idx} />
                        })
                    }


                  </tbody>
                </table>
              </div>

              <div className="align-items-center py-1 row">
                <div className="d-flex col">
                  <p className="mb-0 d-none d-sm-block me-3 fw-semi-bold text-900">1 to 10<span className="text-600"> items of </span>16</p>
                  <button type="button" className="p-0 fw-semi-bold btn btn-link">
                    View all
                    <i className="bi bi-chevron-right ms-1 fs-md ms-1"></i>
                  </button>
                </div>
                <div className="col-auto">
                  <ul className="mb-0 justify-content-center pagination">
                    <li className="page-item disabled">
                      <span className="page-link">
                        <span aria-hidden="true">
                          <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-left" className="svg-inline--fa fa-chevron-left " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                            <path fill="currentColor" d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"></path>
                          </svg>
                        </span>
                        <span className="visually-hidden">Previous</span>
                      </span>
                    </li>
                    <li className="page-item active"><span className="page-link">1<span className="visually-hidden">(current)</span></span></li>
                    <li className="page-item"><a className="page-link" role="button" tabIndex="0" href="#">2</a></li>
                    <li className="page-item">
                      <a className="page-link" role="button" tabIndex="0" href="#">
                        <span aria-hidden="true">
                          <i className="bi bi-chevron-right"></i>
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SellerLayout>
  );


};

export default Products;