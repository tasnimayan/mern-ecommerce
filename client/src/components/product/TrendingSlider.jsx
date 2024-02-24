import {Swiper,SwiperSlide} from 'swiper/react'
import { Link } from 'react-router-dom'
import StarRatings from 'react-star-ratings'
import ProductStore from '../../store/ProductStore'

import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import SectionHeadline from './SectionHeadline'

const FlashCarousel = () => {
  const {ListByRating} = ProductStore()

  return (
    <div className="bg-white">
      <div className='container pb-5'>
        <SectionHeadline text="Top trending" />

        <Swiper 
          // slidesPerView={3}
          effect={'coverflow'}
          grabCursor={true}
          className="mySwiper"
          breakpoints={{
            576: {
              slidesPerView: 3
            },
            640: {
              slidesPerView: 4,
            },
            768: {
              slidesPerView: 6,
            }
          }}
        >
          {
              ListByRating?.map((item, idx)=>{
                return (
                  <SwiperSlide className='bg-transparent p-1'>
                      <div className='border shadow-sm rounded'>
                          <Link to={`/details/${item._id}`} className="w-100">
                            <div style={{width:'100%',height:'120px'}}>
                              <img className="w-100 h-100 rounded-top-2 object-fit-cover" src={item.image} />
                            </div>
                              <div className="card-body px-2">
                                  <StarRatings rating={parseFloat(item.rating)} starRatedColor="gold" starDimension="12px" starSpacing="1px"/>
                                  <p className="bodySmal text-secondary my-1 line-2">{item.title}</p>
                                  <p>{item.discount? item.discountPrice: item.price}</p>
                              </div>
                          </Link>
                      </div>

                  </SwiperSlide>
                )
              })
            }
            <div className="slider-controler">
              <div className="swiper-button-prev slider-arrow"></div>
              <div className="swiper-button-next slider-arrow"></div>
            </div>
        </Swiper>

      </div>
    </div>
  );
};

export default FlashCarousel;