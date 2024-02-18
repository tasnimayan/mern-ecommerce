
import ProductStore from "../../store/ProductStore.js";
import StarRatings from "react-star-ratings";
import { useEffect, useState } from "react";

const Reviews = ({productId}) => {
    const {ReviewList, ReviewListRequest}=ProductStore();

    const [review, setReview] = useState({name:'', rating:1,review:'', image:[]})

    let handleChange = (name, value) => {
        setReview({...review, [name] : value})
    }
    
    useEffect(()=>{
        (async ()=>{
            await ReviewListRequest(productId)
        })()
    },[])
    return (
        <div>
            <ul className="list-group mt-4 list-group-flush">
                {
                    ReviewList!==null?(ReviewList.map((item,idx)=>{
                      return (
                        <li key={idx} className="list-group-item bg-transparent border-bottom">
                          <h6 className="mb-1"><i className="bi bi-person fs-lg"></i>{item['profile']['cus_name']}</h6>
                          <StarRatings rating={parseFloat(item['rating'])} starRatedColor="red" starDimension="10px" starSpacing="2px" />
                          <span className="rounded px-2 py-1 bg-olive fs-sm ms-2">{item['rating']}</span>
                          <p className="mt-1">{item['review']}</p>
                          <div className="d-flex gap-2">
                            {
                                item.image?<img src="./src/assets/images/register_poster.jpg" alt=""  className="border img-md"/> : null
                            }
                          </div>
                        </li>)
                    })):(<span>No reviews</span>)
                }
            </ul>

            <div className="row shadow-sm rounded bg-gray p-3">
                <h4>Write a review</h4>
                <div className="mb-3 row">
                    <label htmlFor="name" className="col-sm-2 col-form-label">Your Name</label>
                    <div className="col-sm-10">
                        <input type="text" name="name" className="form-control shadow-none" onChange={(e)=>handleChange('name',e.target.value)} />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label htmlFor="rating" className="col-sm-2 col-form-label">Rating</label>
                    <div className="col-sm-10">
                        <input type="range" name="rating" min={1} max={5} step={.5} className="" onChange={(e)=>handleChange('rating',e.target.value)}/>
                        <span className="ms-3 fs-lg">{review.rating}</span>
                    </div>
                </div>
                <div className="mb-3 row">
                    <label htmlFor="review" className="col-sm-2 col-form-label">Review</label>
                    <div className="col-sm-10">
                        <textarea name="review" rows="5" className="form-control shadow-none" onChange={(e)=>handleChange('review',e.target.value)}></textarea>
                    </div>
                </div>
                <div className="mb-3 row">
                    <label htmlFor="image" className="col-sm-2 col-form-label">Image</label>
                    <div className="col-sm-10">
                        <input type="file" name="image" multiple accept="image/*" className="form-control shadow-none" onChange={(e)=>handleChange('image',e.target.files)}/>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default Reviews;