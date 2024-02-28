import {Swiper,SwiperSlide} from 'swiper/react'
import { Link } from 'react-router-dom'
import StarRatings from 'react-star-ratings'
import ProductStore from '../../store/ProductStore'

import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import SectionHeadline from './SectionHeadline'

const TrendingSlider = () => {
  const {ListByRating} = ProductStore()

  return (
    <div className="bg-white">
      <div className='container pb-5'>
        <SectionHeadline text="Top trending" />

        <Swiper 
          slidesPerView={3}
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
            992: {
              slidesPerView: 6,
            }
          }}
        >
          {
              ListByRating?.map((item, idx)=>{
                return (
                  <SwiperSlide className='bg-transparent p-2'>
                      <div className='shadow-smc rounded text-lg-center'>
                          <Link to={`/details/${item._id}`} className="w-100">
                            <div style={{width:'100%',height:'140px'}}>
                              <img className="w-100 h-100 rounded-top-2 object-fit-cover" src={item.image} />
                            </div>
                              <div className="card-body px-2 py-2">
                                  <p className="fs-sm text-secondary mt-2 line-1">{item.title}</p>
                                  <StarRatings rating={parseFloat(item.rating)} starRatedColor="gold" starDimension="12px" starSpacing="1px"/>
                                  {
                                    item.discount? (
                                      <p className="text-accent fs-md my-0 fw-semibold">${item['discountPrice']} <span className="strike text-black-50 fs-md fw-normal">${item['price']}</span> </p>
                                    ) : (<p className="text-accent  my-0 fw-semibold">${item['price']} </p>)
                                  }
                              </div>
                          </Link>
                      </div>

                  </SwiperSlide>
                )
              })
            }
        </Swiper>

      </div>
    </div>
  );
};

export default TrendingSlider;