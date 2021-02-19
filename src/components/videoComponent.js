import React from 'react';
import Button from './Button';
import './videoComponent.css';
import '../App.css';
import {Link} from 'react-router-dom'



function VideoComp() {
    return (
        <div className="video-container">
            <video src='/videos/inside.mp4' autoPlay loop muted/>
            <h1>YOUR DREAM PC BUILD AWAITS</h1>
            <p>What are you waiting for?</p>
            <div className="video-btns">
                <Link to='/build_scratch'>
                <Button className="btns" buttonStyle='btn--outline' buttonSize='btn--large' onClick="location.href='/cards' ">
                   GET STARTED
               </Button>
                </Link>
               
               <Link to='/custom_build' >
               <Button className="btns" buttonStyle='btn--primary' buttonSize='btn--large'>
                   Recommended Builds <i class="fas fa-gamepad"></i>
               </Button>
               </Link>
            </div>
        </div>
    )
}

export default VideoComp;
