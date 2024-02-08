
import { useEffect, useState } from "react";
import SliderSkeleton from "../../skeleton/slider-skeleton.jsx";


const PosterSlider = () => {
  const [position, setPosition] = useState(0);
  const poster = [
    "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1399&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1485955900006-10f4d324d411?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://cdn.vectorstock.com/i/1000x1000/08/60/advertising-poster-for-cosmetic-product-vector-20470860.webp"
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