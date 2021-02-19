import React from 'react';

import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>
          The Builder
      </h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/scratch1.jpg'
              text='Build from scratch'
              path='/build_scratch'
            />
            
            <CardItem
              src='images/ready1.jpg'
              text='Customize recommended builds '
              path='/custom_build'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
