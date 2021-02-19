import React from "react";
import '../../App.css';
import Cards from "../Cards";
import Footer from "../Footer";
import NavBar from "../NavBarLoged";
import VideoComp from '../videoComponent';

function HomeSigned () {
    return (
        <>
            <NavBar/>
            <VideoComp> </VideoComp>
            <Cards></Cards>
            <Footer />
        </>
    );
}
export default HomeSigned;