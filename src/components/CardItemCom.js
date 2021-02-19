import React, { useState}  from 'react'

function CardItemCom(props) {
  const [open, setopen] = useState(false);
    
  return (
  
    <>
      <li className='cardis__item'>
        <div className='cardis__item_link' >
          <figure className='cardis__item__pic-wrap' >
            <img
              className='cardis__item_img'
              alt=''
              src={props.src}
            />
          </figure>
          <div className='cardis__item__info'>
            <h5 className='cardis__item__text'>{props.text}</h5>
              <button className="button" onClick={() => setopen(!open)}> 
                
                choose a {props.text}</button>
            
          </div>
          
        </div>
        {open && props.children}
      </li>
    </>
  );
}

export default CardItemCom;