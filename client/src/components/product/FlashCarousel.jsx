import {Swiper,SwiperSlide} from 'swiper/react'
import { Link } from 'react-router-dom'
import StarRatings from 'react-star-ratings'

import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import {EffectCoverflow, Pagination, Navigation} from 'swiper/modules'

const FlashCarousel = () => {
  const flowers = [ 
    "https://images.unsplash.com/photo-1593166073850-b42e3507c969?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    "https://images.unsplash.com/photo-1610397648930-477b8c7f0943?q=80&w=1460&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    "https://images.unsplash.com/photo-1615744455875-7ad33653e8c4?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    "https://images.unsplash.com/photo-1554486840-db3a33d9318e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    "https://images.unsplash.com/photo-1623493381147-4744250783cf?q=80&w=1571&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    
    "https://images.unsplash.com/photo-1579900754584-0381d0a8b46d?q=80&w=1448&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    "https://images.unsplash.com/photo-1580205859016-58d126bb628b?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    "https://images.unsplash.com/flagged/photo-1555215241-9612144143ff?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    "https://images.unsplash.com/photo-1593166073850-b42e3507c969?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    "https://images.unsplash.com/photo-1610397648930-477b8c7f0943?q=80&w=1460&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ]
  return (
    <div className="bg-white">
      <div className='container pb-5'>
        <h3 className='pt-5'>Top Trending</h3>
        <br />
        <Swiper 
          slidesPerView={8}
          effect={'coverflow'}
          grabCursor={true}
          className="mySwiper"
          breakpoints={{
            640: {
              slidesPerView: 4,
            },
            768: {
              slidesPerView: 6,
            },
            1024: {
              slidesPerView: 8,
            },
          }}
        >
          {
              flowers.map((source)=>{
                return (
                  <SwiperSlide className='bg-transparent p-1'>
                      <div className='border shadow-sm rounded'>
                          <Link to={`/details/item_id`} className="w-100">
                            <div style={{width:'100%',height:'120px'}}>
                              <img className="w-100 h-100 rounded-top-2 object-fit-cover" src={source} />
                            </div>
                              <div className="card-body px-2">
                                  <p className="bodySmal text-secondary my-1 line-2">Something is going on then we should</p>
                                  $999
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