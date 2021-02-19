import React from 'react'
import './Cards.css';
import CardItem from './CardItem';

function ShopCards() {
    return (
        <div className='cards'>
              <h1>
          The Builder Shop
      </h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/compcase.jpg'
              text='Computer Cases'
              path='/shop/cases'
            />
            <CardItem
              src='images/monitor.jpg'
              text='Monitors '
              path='/shop/monitors'
            />

          </ul >

          <ul className='cards__items'>
          <CardItem
              src='images/cpu.jpg'
              text='CPUs'
              path='/shop/cpu'
            />
            <CardItem
              src='images/ready1.jpg'
              text='Strorage '
              path='/shop/storage'
            />
          </ul>

          <ul className='cards__items'>
          <CardItem
              src='images/graphic.jpg'
              text='Graphic and Video Cards'
              path='/shop/graphic_card'
            />
            <CardItem
              src='images/acc.jpg'
              text='Accessories '
              path='/shop/accessories'
            />
          </ul>
        </div>
      </div>
        </div>
    )
}

export default ShopCards
