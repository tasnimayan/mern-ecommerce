import './profileDetails.style.css'
import UserStore from "../../store/UserStore.js";
import { useEffect } from 'react';
import ProfileForm from './Profile-Form';


const ProfileDetails = () => {
  let {ProfileDetails,ProfileDetailsRequest, OrderDetails, OrderDetailsRequest}=UserStore();

    useEffect(() => {
        (async ()=>{
            await ProfileDetailsRequest()
            await OrderDetailsRequest()
        })()
    }, []);

  return (
    <div className="container">
      <h2>Manage My Account</h2>
      <div className="row mt-4">
        <div className="profile-nav col-md-3">
          <div className="panel">
            <div className="user-heading round ">
              <a href="#">
                <img src="https://bootdey.com/img/Content/avatar/avatar3.png" alt="" />
              </a>
              <h1>{ProfileDetails?.cus_name}</h1>
              <p>{ProfileDetails?.user.email}</p>
            </div>
            <ul className="nav flex-column nav-pills">
              <li className="">
                <a href="#"><i className="bi bi-person"></i> Profile</a>
              </li>
              <li>
                <a href="#"><i className="bi bi-pencil-square"></i>Edit profile</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="profile-info col-md-9">
          <div className="bg-white p-5 rounded">
            <h5>Personal Profile</h5>
            <hr/>
            <div className="row">
              <div className="bio-row">
                  <p><span>Name </span>: {ProfileDetails?.cus_name}</p>
              </div>
              <div className="bio-row">
                  <p><span>City </span>: {ProfileDetails?.cus_city}</p>
              </div>
              <div className="bio-row">
                  <p><span>Country </span>: {ProfileDetails?.cus_country}</p>
              </div>
              <div className="bio-row">
                  <p><span>Birthday</span>: None</p>
              </div>
              <div className="bio-row">
                  <p><span>Phone </span>: {ProfileDetails?.cus_phone}</p>
              </div>
              <div className="bio-row">
                  <p><span>Email </span>: {ProfileDetails?.user.email}</p>
              </div>
            </div>
          </div>
          <div>
            <div className="row g-4 mt-2">
              {
                [1,2,3].map((id)=>{
                  return (
                    <div className="col-6 col-md-4" key={id}>
                      <div className='bg-white rounded-2 flex-center shadow-sm'>
                        <div className="float-start w-40 flex-center fw-bold fs-4" style={{height:"100px"}} >
                          <p className='m-0'>35</p>
                        </div>
                        <div className="float-start w-60">
                            <h4>Total Orders</h4>
                            <p>Started : 15 July</p>
                        </div>
                      </div>
                    </div>
                  )
                })
              }
              
                                    
            </div>
          </div>

          <div  className='bg-white mt-4 p-5 rounded'>
            <h5 className="text-warning">Recent Orders</h5>
            <hr/>
            <div className="card">
              <table className='table'>
                <thead>
                  <tr>
                    <th>Order #</th>
                    <th>Date</th>
                    <th>Item</th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    OrderDetails?.map((item, index)=>{
                      let date = new Date(item.createdAt)
                      let purchaseDate = `${date.getDate()} /${date.getMonth()+1} /${date.getFullYear()}`
                      return (
                        <tr key={index} >
                          <td>#000</td>
                          <td>{purchaseDate}</td>
                          <td>{item.product.title}</td>
                          <td>{item.price}</td>
                        </tr>
                      )

                    })
                  }
                  
                </tbody>

                
              </table>

            </div>

          </div>



          {/* <ProfileForm /> */}
        </div>
      </div>
    </div>

  );
};

export default ProfileDetails;