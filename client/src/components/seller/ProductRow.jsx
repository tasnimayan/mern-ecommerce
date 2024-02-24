import { useState } from "react";
import sellerStore from "../../store/sellerStore";
const ProductRow = ({product}) => {
  let [show, setShow] = useState(false);

  const {ProductDeleteRequest} = sellerStore()
  const onDelete = async (id)=>{
    let res = await ProductDeleteRequest(id)
    console.log(res)
  }
  
  return (
    <tr>
      <td>
        <div className="form-check fs-8 mb-0">
          <input type="checkbox" value={product._id} className="form-check-input"/></div>
      </td>
      <td className="py-0">
        <a className="rounded-2 border d-inline-block" href={`/seller/products/${product._id}`}>
          <img src="https://media.istockphoto.com/id/1359180038/photo/wristwatch.jpg?s=1024x1024&w=is&k=20&c=cKovgSV8ihRnsz5AxTewr45Bddg9FJpEmN5ssDEKF_s=" alt="" width="53" />
        </a>
      </td>
      <td className="ps-4"><a className="fw-semi-bold line-clamp-3" href="/apps/e-commerce/customer/product-details">{product.title}</a></td>
      <td className="fw-bold ps-4 text-700 text-end">${product.price}</td>
      <td className="fs-9 fw-semi-bold ps-4 text-600">{product.category.categoryName}</td>

      <td className="ps-3">
        <div className="d-flex flex-wrap gap-2"><span className="bg-gray rounded-1 px-2">Health</span><span className="bg-gray rounded-1 px-2">Exercise</span><span className="bg-gray rounded-1 px-2">Discipline</span><span className="bg-gray rounded-1 px-2">Lifestyle</span><span className="bg-gray rounded-1 px-2">Fitness</span></div>
      </td>
      <td className="fw-bold ps-4 text-700 text-end">{product.stock}</td>
      <td className="text-600 ps-4">{product.createdAt.slice(0,10)}</td>
      <td className="text-end">
        <div className="btn-reveal-trigger">
          <div className="dropdown">
            <button type="button" aria-expanded="false" className="btn-reveal dropdown-caret-none transition-none dropdown-toggle btn btn-sm" onClick={()=>{setShow(!show)}}>
              <i className="bi bi-three-dots fs-lg"></i>
            </button>

            <div x-placement="top-end" className={`py-2 dropdown-menu dropdown-menu-end position-absolute ${show? "show": null}`} style={{inset: `0px 0px auto auto`, transform: `translate(0px, 35px)`}}>
              <a className="dropdown-item" role="button" tabIndex="0" href="#">
                <i className="bi bi-eye me-2"></i>View</a>
              <a className="dropdown-item" role="button" tabIndex="0" href="#">
                <i className="bi bi-pencil-square me-2" />Update</a>
              <hr className="dropdown-divider" role="separator" />
              <button className="text-danger dropdown-item" role="button" tabIndex="0" onClick={()=>onDelete(product._id)}>
                <i className="bi bi-trash me-2" />Remove</button>
            </div>

          </div>
        </div>
      </td>
    </tr>
  );
};

export default ProductRow;