
import sellerStore from '../../store/sellerStore';
import React, {useEffect, useRef, useState} from 'react';
import {Link, useNavigate} from "react-router-dom";

const TopNav = () => {
  const [visible, setVisible] = useState(false);
  const navigate=useNavigate()
  const { isLogin, UserLogoutRequest }=sellerStore();

  const onLogout=async ()=>{
      await UserLogoutRequest()
      sessionStorage.clear();
      localStorage.clear();
      navigate("/seller/login");
  }

  return (
    <>
      <nav className="navbar sticky-top bg-white navbar-expand-lg border-bottom py-3 font-raleway fw-semibold" style={{height:"4rem"}}>
        <div className="container-fluid">
          <Link className="navbar-brand me-auto ms-3" to="/">
              <h2 className='logo-text'>Shopin<span className=' text-warning'>Z</span></h2>
          </Link>

          <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#nav06" aria-controls="nav06" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse d-lg-flex justify-content-between flex-row-reverse" id="nav06">
            <div className="d-flex align-items-center">
            {
                isLogin()?(
                  <>
                    <div className='position-relative mx-3'>
                      <img src="https://linguistics.ucla.edu/wp-content/uploads/2020/06/placeholder.jpg" 
                          onClick={()=>{setVisible(!visible)}} 
                          className="border border-2 d-flex rounded-circle object-fit-cover border-success" 
                          style={{width:"40px", height:'40px'}}>
                      </img>

                      {
                        visible ? (
                          <div className='pop-up position-absolute end-0 top-100 mt-1 border py-3 px-2 bg-white rounded' style={{width:"16rem"}}>
                            <div className="nav flex-column mb-2 pb-1">
                              <div className="nav-item">
                                <a href="#" className="px-3 nav-link">
                                  <i className="bi bi-person fs-md feather feather-user me-2 text-900"></i>
                                  <span className="text-1000">Profile</span>
                                </a>
                              </div>
                              <div className="nav-item">
                                <a href="#" className="px-3 nav-link">
                                <i className="bi bi-graph-up fs-md feather feather-user me-2 text-900"></i>
                                  <span className="text-1000">Dashboard</span>
                                </a>
                              </div>
                              <div className="nav-item">
                                <a href="#" className="px-3 nav-link">
                                <i className="bi bi-gear fs-md feather feather-user me-2 text-900"></i>
                                  <span className="text-1000">Settings &amp; Privacy </span>
                                </a>
                              </div>
                              <div className="nav-item">
                                <a href="#" className="px-3 nav-link">
                                <i className="bi bi-question-circle fs-md feather feather-user me-2 text-900"></i>
                                  <span className="text-1000">Help Center</span>
                                </a>
                              </div>

                              <div className="p-3 card-footer">
                                <a className="btn btn-phoenix-secondary d-flex flex-center w-100" href="#" onClick={onLogout}>
                                  <i className="bi bi-box-arrow-right feather feather-log-out me-2"></i>
                                  Sign out
                                </a>
                            </div>
                            </div>
                          </div>
                        ) : null
                      }
                                        
                      
                    </div> 
                  </>
                    ): (
                    <>
                      <Link className="ms-3" to="/seller/login">Login</Link>
                      <div className='ms-3'>|</div>
                      <Link className="ms-3" to="/seller/register">Register</Link>
                    </>)
                  }

            </div>
          </div>

        </div>
      </nav>

    </>
  );

};

export default TopNav;