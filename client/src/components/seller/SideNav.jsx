import React from 'react';

const SideNav = () => {
  return (
<aside className="aside border-end bg-white position-fixed start-0 w-20">
  <div className='p-2 ps-4'>
      <ul className="flex-column navbar-nav" id="navbarVerticalNav">

        <div className="nav-item">
          <div className="nav-item-wrapper">
            <a role="button" className="dropdown-indicator label-1 collapsed nav-link" tabIndex="0" href="/seller">
              <div className="d-flex align-items-center">
                <span className="nav-link-icon me-2">
                  <i className="bi bi-bar-chart"></i>
                </span>
                <span className="nav-link-text">Dashboard</span>
              </div>
            </a>
          </div>
        </div>

        <div className="nav-item">
            <div className="nav-item-wrapper">
              <a aria-expanded="true" role="button" className="dropdown-indicator label-1 nav-link" tabIndex="0" href="/seller/products">
                <div className="d-flex align-items-center">
                  <span className="nav-link-icon me-2">
                    <i className="bi bi-cart"></i>
                  </span>
                  <span className="nav-link-text">Products</span>
                </div>
              </a>
            </div>

            <div className="nav-item-wrapper">
              <a aria-expanded="true" role="button" className="dropdown-indicator label-1 nav-link" tabIndex="0" href="/seller/add-product">
                <div className="d-flex align-items-center">
                  <span className="nav-link-icon me-2">
                    <i className="bi bi-plus-square-dotted"></i>
                  </span>
                  <span className="nav-link-text">Add Product</span>
                </div>
              </a>
            </div>

        </div>
      </ul>
  </div>

  <div className="">
    <button type="button" className="border-0 w-100 d-flex align-items-center btn">
      <i className="bi bi-arrow-bar-left fs-md mt-1"></i>
      <span className="ms-2">Collapsed View</span>
    </button>

  </div>



</aside>
  );
};

export default SideNav;