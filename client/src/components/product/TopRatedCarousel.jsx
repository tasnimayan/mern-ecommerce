import {Swiper,SwiperSlide} from 'swiper/react'
import { Link } from 'react-router-dom'
import StarRatings from 'react-star-ratings'
import ProductStore from '../../store/ProductStore'

import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { useEffect } from 'react'
import SectionHeadline from './SectionHeadline'


const TopTrendingCarousel = () => {
  const {ListByRating, ListByRatingRequest} = ProductStore()

  useEffect(() => {
    (async ()=>{
        await ListByRatingRequest()
    })()
}, []);
  
  return (
    <>
      {
        ListByRating? 
        (
          <div className="bg-white">
            <div className='px-5 pb-5'>
              <SectionHeadline text="Top rated" />
              <Swiper 
                effect={'coverflow'}
                grabCursor={true}
                breakpoints={{
                  576: {
                    slidesPerView: 1
                  },

                  640: {
                    slidesPerView: 2,
                  },
                  768: {
                    slidesPerView: 3,
                  }, 
                  992: {
                    slidesPerView: 4,
                  }
                }}
                className="mySwiper"
              >
                {
                    ListByRating.map((item)=>{
                      return (
                        <SwiperSlide className='p-1'>
      
                          <div className="card">
                            <Link to={`/details/${item._id}`} className="w-100">
                              <div className="card-body rounded-1" style={{backgroundColor:"#F7F7F7"}}>
                                <div className="row d-flex align-items-center text-start">
                                  <div className='col-4 p-0' style={{ height:'100px'}}>
                                    <img className="w-100 h-100 rounded-2 object-fit-cover" src={item.image} />
                                  </div>
                                  <div className="col-8">
                                    <h3 className="fs-6 fw-bold line-2">{item.title}</h3>
                                    <StarRatings rating={parseFloat(item.star)} starRatedColor="gold" starDimension="12px" starSpacing="1px"/>
                                    
                                    <p className="fs-6 fw-semibold text-accent">${item.price}</p>
                                  </div>
                                </div>
                              </div>
                            </Link>
                          </div>
                        </SwiperSlide>
                      )
                    })
                  }
              </Swiper>
              <div>
                <i class="bi bi-arrow-right fs-2 float-end"></i>
              </div>
      
            </div>
          </div>

        ) :
        (
          <></>
        )
        
      }
    </>

  );
};
export default TopTrendingCarousel;