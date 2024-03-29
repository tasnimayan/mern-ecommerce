import { Link } from "react-router-dom";
import StarRatings from "react-star-ratings";

const ProductCard = ({item, className}) => {
  let price=<p className="bodySmall text-accent fs-6 my-0 fw-semibold">${item['price']} </p>
  if(item['discount']===true){
    price = <p className="bodySmall text-accent fs-6 my-0 fw-semibold">${item['discountPrice']} <span className="strike text-black-50 bodySmall fw-normal">${item['price']}</span> </p>
  }
  return(
    <div className={className}>
        <Link to={`/details/${item['_id']}`} className="card rounded-0 h-100 text-center bg-gray">
          <div className="position-relative">
            <img className="w-100 img-md p-2" src={item['image']} />
            {/* <div className="position-absolute bottom-0 end-0 d-none">
              <i className="bi bi-cart-fill btn btn-sm btn-primary"></i>
              <i className="bi bi-heart-fill btn btn-sm btn-primary ms-2"></i>
            </div> */}
          </div>
          <div className="card-body">
              <p className="bodySmall text-secondary my-0 line-2" style={{minHeight:'2.8rem'}}>{item['title']}</p>
              <StarRatings rating={parseFloat(item.rating ?? 0)} starRatedColor="gold" starDimension="12px" starSpacing="1px"/>
              {price}
          </div>
        </Link>
    </div>
  );
};

export default ProductCard;