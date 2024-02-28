import Layout from "../components/layout/layout";
import { useSearchParams, } from "react-router-dom";

const OrderStatusPage = () => {
  const [searchParam, setSearchParam] = useSearchParams()
  let payment = searchParam.get('payment');
  let pageObject = {
    bgColor: '',
    bgText: '',
    status:'',
    isMail: ''
  }
  if(payment === 'success'){
    pageObject.bgColor = 'bg-success'
    pageObject.bgText = 'THANK YOU'
    pageObject.status = 'successful'
    pageObject.isMail = 'Thank you for your order. A payment receipt will be sent to your registered email.'

  }
  else{
    pageObject.bgColor = 'bg-danger'
    pageObject.bgText = 'SORRY'
    pageObject.status = 'failed'
    pageObject.isMail = ''

  }
  return (
    <Layout>
      <div className="flex-center flex-column position-relative my-5 text-center px-4">
        <div className="position-absolute z-n1" >
          <h2 style={{fontSize:"120px", color:"#efefef", fontWeight:"bold"}}>{pageObject.bgText}</h2>
        </div>
        <div className={`${pageObject.bgColor} flex-center text-white fs-1`} style={{width:"150px", height:"150px", borderRadius:"50%"}}>{payment === 'success'? <i className="bi bi-check2"></i> : <i className="bi bi-x-lg"></i>}</div>
        <div className="py-4 text-center">
          <p className="fs-4 fw-bold">Your payment was {pageObject.status}!</p>
          <p className="mb-3 fs-lg"></p>
          <button className="btn btn-success px-4"><i className="bi bi-arrow-left"></i> Back to shop</button>
        </div>
      </div>
    </Layout>
  );
};

export default OrderStatusPage;