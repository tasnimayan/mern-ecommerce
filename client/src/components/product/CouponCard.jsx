import React from 'react';

const CuponCard = ({src}) => {
  src = src? src: "https://opencart4.magentech.com/themes/so_emarket/layout2/image/catalog/banners/id2-banner1.jpg"
  return (
    <div className="col-12 container">
        <div className="banner">
          <a href="#"><img src={src} alt="image" className='w-100' /></a>
        </div>                                           
    </div>
  );
};

export default CuponCard;