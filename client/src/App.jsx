import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./pages/home-page.jsx";
import ProductByBrand from "./pages/product-by-brand.jsx";
import ProductByCategory from "./pages/product-by-category.jsx";
import ProductByKeyword from "./pages/product-by-keyword.jsx";
import ProductDetails from "./pages/product-details.jsx";
import AboutPage from "./pages/about-page.jsx";
import RefundPage from "./pages/refund-page.jsx";
import PrivacyPage from "./pages/privacy-page.jsx";
import TermsPage from "./pages/terms-page.jsx";
import HowToBuyPage from "./pages/how-to-buy-page.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import ComplainPage from "./pages/complain-page.jsx";
import LoginPage from "./pages/login-page.jsx";
import OtpPage from "./pages/otp-page.jsx";
import ProfilePage from "./pages/profile-page.jsx";
import CartPage from "./pages/cart-page.jsx";
import InvoicePage from "./pages/invoice-page.jsx";
import WishPage from './pages/Wish-Page.jsx';
import RegistrationPage from './pages/RegistrationPage.jsx';
import FAQPage from './pages/FAQPage.jsx';
import ErrorPage from './pages/ErrorPage.jsx';
import SellerRegistration from './components/seller/SellerRegistration.jsx';
import AddProduct from './components/seller/AddProduct.jsx';
import Products from './components/seller/Products.jsx';
import LoginForm from './components/seller/Login.jsx';
import PrivateRoute from './utility/Autentication.jsx';
import FilterProduct from './components/product/FilterProduct.jsx';

const App = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                {/* User related routes */}
                <Route path="/register" element={<RegistrationPage/>}/>
                <Route path="/otp" element={<OtpPage/>}/>
                <Route path="/login" element={<LoginPage/>}/>
                <Route path="/profile" element={<ProfilePage/>}/>
                <Route path="/cart" element={<CartPage/>}/>
                <Route path="/invoices" element={<InvoicePage/>}/>
                <Route path="/wish" element={<WishPage/>}/>

                {/* product related routes */}
                <Route path="/by-brand/:id" element={<ProductByBrand/>}/>
                <Route path="/by-category/:id" element={<ProductByCategory/>}/>
                <Route path="/by-keyword/:keyword" element={<ProductByKeyword/>}/>
                <Route path="/remark/:remark" element={<FilterProduct/>}/>
                <Route path="/details/:id" element={<ProductDetails/>}/>
                {/* About Site routes */}
                <Route path="/about" element={<AboutPage/>}/>
                <Route path="/refund" element={<RefundPage/>}/>
                <Route path="/privacy" element={<PrivacyPage/>}/>
                <Route path="/terms" element={<TermsPage/>}/>
                <Route path="/faq" element={<FAQPage/>}/>
                <Route path="/how-to-buy" element={<HowToBuyPage/>}/>
                <Route path="/contact" element={<ContactPage/>}/>
                <Route path="/complain" element={<ComplainPage/>}/>

                {/* seller related routes  || Use authentication for these routes */}
                <Route path="/seller/register" element={<SellerRegistration/>}/>
                <Route path="/seller/login" element={<LoginForm/>}/>
                <Route element={<PrivateRoute />} >
                    <Route path="/seller/add-product" element={<AddProduct/>}/>
                    <Route path="/seller/products" element={<Products/>}/>
                </Route>
                <Route path='*' element= {<ErrorPage />} />
            </Routes>
        </BrowserRouter>
    );
};
export default App;