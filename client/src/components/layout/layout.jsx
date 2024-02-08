import React from 'react';
import AppNavBar from "./AppNavBar.jsx";
import Footer from "./Footer.jsx";
import {Toaster} from "react-hot-toast";

const Layout = (props) => {
    return (
        <>
            <AppNavBar/>
            {props.children}
            <Toaster position="top-right"/>
            <Footer/>
        </>
    );
};

export default Layout;