import React from 'react';

const OfferSlider = () => {
  const poster = [
    "https://img.freepik.com/free-psd/black-friday-special-offer-facebook-cover-banner-template_120329-1046.jpg?w=740&t=st=1708842909~exp=1708843509~hmac=37c7ff1e7b173e00a9b6ad968efd84d4bd378282cbf9aea5b3d4f33a0be2f8e8",
    "https://img.freepik.com/free-psd/special-offer-black-friday-facebook-cover-banner-template_120329-1057.jpg?w=740&t=st=1708842955~exp=1708843555~hmac=00b0b7977b18e00a4b7387790107e7b57a07029eea204165fe5aed0a3c9b5747",
    "https://img.freepik.com/free-psd/black-friday-special-offer-facebook-cover-banner-template_120329-1042.jpg?w=740&t=st=1708842972~exp=1708843572~hmac=601c788b1a78be99e2d5d47bed5d087c6e6a9d3cf376893df41f87d114723301"
  ]
  return (
    <div className="container">
      <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner" style={{height:"400px"}}>
          <div className="carousel-item active h-100" data-bs-interval="5000">
            <img src={poster[0]} className="d-block w-100 h-100 poster-img" alt="..."/>
          </div>
          <div className="carousel-item h-100" data-bs-interval="5000">
            <img src={poster[1]} className="d-block w-100 h-100 poster-img" alt="..."/>
          </div>
          <div className="carousel-item h-100" data-bs-interval="5000">
            <img src={poster[2]} className="d-block w-100 h-100 poster-img" alt="..."/>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default OfferSlider;