
import { useState } from 'react';
import './subscribe.style.css'
import { toast } from 'react-hot-toast'
const Subscribe = () => {
  const [email, setEmail] = useState('')

  const handleSubscribe = async () =>{
    console.log(email)
    // Call subscription api here!

    if(true){
      toast.success('Thank you for Subscribing')
    }
    else{
      toast.success('Subscription Failed!🙁')
    }
    setEmail('')
  }
  return (
    <section>
      <div className="bg-navy text-white newsletter-container py-4 px-5">
        <div className="row">
          <div className='col-md-4 d-flex align-items-center'>
            <i className='bi bi-send fs-1 float-start p-4'></i>
            <div>
              <h5 className="section-slogan fw-semibold">Subscribe For Newsletter</h5>
              <p className="text-secondary fs-md mb-4">Please Drop Your Email Below To Get Daily Update About What We Do</p>
            </div>
          </div>

          <div className="col-md-5 flex-center rounded-3 my-3">
            <input type="email" placeholder="Enter Your Email Address" value={email} className="form-control d-inline-block border me-2" onChange={(e)=>{setEmail(e.target.value)}}/>
            <button className="btn btn-theme mt-lg-0 rounded-3 fs-md" onClick={async () => {await handleSubscribe()}}>SUBSCRIBE</button>
          </div>
          <div className="col-md-3 fs-4 flex-center align-items-center">
            <i className="bi bi-facebook me-2"></i>
            <i className="bi bi-instagram me-2"></i>
            <i className="bi bi-pinterest me-2"></i>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Subscribe;