import React from "react";
import '../../App.css';
import Cards from "../Cards";
import Footer from "../Footer";
import NavBar from "../NavBar";
import VideoComp from '../videoComponent';

function Home () {
    return (
        <>
            <NavBar/>
            <VideoComp> </VideoComp>
            <Cards></Cards>
            <Footer />
        </>
    );
}
export default Home;