import { Link } from "react-router-dom";
import StarRatings from "react-star-ratings";

const ProductCard = ({item}) => {
  let price=<p className="bodySmall text-dark my-1">Price: ${item['price']} </p>
  if(item['discount']===true){
    price = <p className="bodySmall text-accent fs-6 my-0 fw-semibold">${item['discountPrice']} <span className="strike text-black-50 bodySmall fw-normal">${item['price']}</span> </p>
  }
  return(
    <div className="col-md-3 p-2 col-lg-2 col-6">
        <Link to={`/details/${item['_id']}`} className="card h-100 rounded-3 bg-white text-center">
            <img className="w-100" src={item['image']} />
            <div className="card-body bg-gray">
                <p className="bodySmal text-secondary my-0 line-2">{item['title']}</p>
                <StarRatings rating={parseFloat(item['star'])} starRatedColor="gold" starDimension="12px" starSpacing="1px"/>
                {price}
            </div>
        </Link>
    </div>
  );
};

export default ProductCard;