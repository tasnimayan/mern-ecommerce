
import { useEffect, useState } from "react";
import SliderSkeleton from "../../skeleton/slider-skeleton.jsx";


const PosterSlider = () => {
  const [position, setPosition] = useState(0);
  const poster = [
    "https://img.freepik.com/free-psd/black-friday-special-offer-facebook-cover-banner-template_120329-1046.jpg?w=740&t=st=1708842909~exp=1708843509~hmac=37c7ff1e7b173e00a9b6ad968efd84d4bd378282cbf9aea5b3d4f33a0be2f8e8",
    "https://img.freepik.com/free-psd/special-offer-black-friday-facebook-cover-banner-template_120329-1057.jpg?w=740&t=st=1708842955~exp=1708843555~hmac=00b0b7977b18e00a4b7387790107e7b57a07029eea204165fe5aed0a3c9b5747",
    "https://img.freepik.com/free-psd/black-friday-special-offer-facebook-cover-banner-template_120329-1042.jpg?w=740&t=st=1708842972~exp=1708843572~hmac=601c788b1a78be99e2d5d47bed5d087c6e6a9d3cf376893df41f87d114723301"
  ]
  useEffect(()=>{
    setTimeout(()=>{
      rightClick();
    },5000)
  })
  const leftClick = () =>{
    if(position === 0){
      setPosition(poster.length - 1)
    }
    else{
      setPosition(position - 1)
    }
  }
  const rightClick = () =>{
    let len = poster.length - 1
    if(position === len){
      setPosition(0)
    }
    else{
      setPosition(position + 1)
    }
  }


    if(poster===null){
        return <SliderSkeleton/>
    }
    else {
        return (
          <div className="carousel slide px-4" >
            <div className="carousel-inner" style={{height:"400px"}}>
                <div className="carousel-item active" data-interval="10000">
                  <img src={poster[position]} className="d-block w-100 object-fit-cover" alt="..." />
                </div>

            </div>
            <div className="carousel-control-prev" onClick={leftClick} role="button">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            </div>
            <div className="carousel-control-next" onClick={rightClick} role="button">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
            </div>
          </div>
        );
    }
};

export default PosterSlider;