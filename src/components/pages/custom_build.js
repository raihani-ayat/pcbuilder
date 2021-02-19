import React from "react";
import '../../App.css';
import Custom from "../Custom";
import Footer from "../Footer";
import NavBar from "../NavBar";


function Custom_build () {
    return (
        <>
           <NavBar />
           <Custom />
           <Footer />
        </>
    );
}
export default Custom_build;