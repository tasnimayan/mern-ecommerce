import React, {useState} from 'react';
import Layout from "../components/layout/layout.jsx";
import {toast} from 'react-hot-toast';


const ContactPage = () => {
    const [contact, setContact] = useState({name:'', email:'', enquiry:''})

    let handleChange = (name, value) => {
        setContact({...contact, [name] : value})
    }

    let handleSubmit = async () => {
        if(!contact.email || !contact.enquiry){
            return toast.error("Fields can't be empty")
        }
        // Set function for enquiry API
        // let res = await SendEnquiry(enquiry)
        let res = false 
        console.log(contact)
        if(res){
            toast.success("Your enquiry has been Submitted")
        }
        else{
            toast.error("Failed to submit!")
        }
    }

    return (
        <Layout>
        <div className="container py-5">
            <div className="row">
                <div className="col-md-6">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.8805549724484!2d90.40571167446994!3d23.715959140099375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8fe0f90a34d%3A0x214d94cd5b35674!2sWard%20No-71%20(Part)%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1708261020348!5m2!1sen!2sbd" width="100%" height="100%" style={{border:'0'}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>

                <div className="col-md-6 fs-md mt-4 mt-md-0 ps-md-3">   
                    <div className="col title"><h4><b>Contact with us</b></h4></div>
                    <div className='rounded-1 bg-white'>
                        <div className="form-group mb-3">
                            <label htmlFor="name" className="">Name</label>
                            <input type="text" name="name" className="form-control shadow-none" onChange={(e)=>handleChange('name',e.target.value)}/>
                        </div>
                        <div className="form-group mb-3">
                            <label htmlFor="email" className="">Email</label>
                            <input type="email" name="email" className="form-control shadow-none"onChange={(e)=>handleChange('email',e.target.value)} required/>
                        </div>
                        
                        <div className="form-group mb-3">
                            <label htmlFor="enquiry" className="">Enquiry</label>
                            <textarea name="enquiry" rows="5" className="form-control shadow-none" onChange={(e)=>handleChange('enquiry',e.target.value)} required></textarea>
                        </div>
                        <div>
                            <button className="btn btn-theme float-end" type='submit' onClick={async ()=>await handleSubmit()}>Submit</button>
                        </div>

                    </div>
                    
                </div>
            </div>
            
        </div>
        </Layout>
    );
};

export default ContactPage;