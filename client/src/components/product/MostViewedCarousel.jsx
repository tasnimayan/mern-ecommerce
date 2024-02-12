import {Swiper,SwiperSlide} from 'swiper/react'
import { Link } from 'react-router-dom'
import StarRatings from 'react-star-ratings'

import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import 'swiper/css/navigation'


const MostViewedCarousel = () => {
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
      <div className='px-5 pb-5'>
        <h3 className='pt-5 d-inline-block border-bottom border-2 w-100 mb-4'>
          <span className='btn bg-dark text-white rounded-0 headline-4'>Top Trending </span></h3>
        <br />
        <Swiper 
          slidesPerView={4}
          effect={'coverflow'}
          grabCursor={true}
          className="mySwiper"
        >
          {
              flowers.map((source)=>{
                return (
                  <SwiperSlide className='p-1'>

                    <div className="card">
                      <Link to={`/details/item_id`} className="w-100">
                        <div className="card-body bg-gray rounded-1">
                          <div className="row d-flex flex-column flex-lg-row align-items-center text-center text-lg-start">
                            <div className='col-5' style={{height:'100px'}}>
                              <img className="w-100 h-100 rounded-2 object-fit-cover" src={source} />
                            </div>
                            <div className="px-0 col-7">
                              <h3 className="fs-6 fw-bold line-2">Product Name</h3>
                              <StarRatings rating={4} starRatedColor="gold" starDimension="12px" starSpacing="1px"/>
                              
                              <p className="fs-6 fw-semibold text-accent">$599</p>
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
  );
};
export default MostViewedCarousel;