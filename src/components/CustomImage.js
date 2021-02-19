import React from 'react';
import './CustomImage.css';

function CustomImage({src}) {
    return (
        <img src={src} alt="noimg" className="custom-image-class"></img> 
    )
        
    
}

export default CustomImage
