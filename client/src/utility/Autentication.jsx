
import { Navigate, Outlet } from "react-router-dom";
import sellerStore from '../store/sellerStore';

// This is to control the authenticated routing. No unauthorized user can use defined routes under this component on MainComponent
const PrivateRoute = ()=>{
  const {isLogin} = sellerStore()
  const isAuthenticated = isLogin();

  return isAuthenticated ? <Outlet /> : <Navigate to="/seller/login"></Navigate>
}

export default PrivateRoute