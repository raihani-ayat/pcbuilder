import React from 'react'
import CardItem from './CardItem'

function GuidesCards() {
    return (
        <div className='cards'>
        <h1>
        Build Guides 
    </h1>
    <div className='cards__container'>
      <div className='cards__wrapper'>
      <ul className='cards__items'>
          <CardItem
            src='images/set4.jpg'
            text='Entry Level Build'
            path='/entry'
          />
        </ul>
        <ul className='cards__items'>
          <CardItem
            src='images/set1.jpg'
            text='Intermediate Level Build'
            path='/medi'
          />
          <CardItem
            src='images/set2.jpg'
            text='Andvanced Level Build '
            path='/advanced'
          />
                   <CardItem
            src='images/set.jpg'
            text='Budget Home Office Build '
            path='/budget'
          />
        </ul>
      </div>
    </div>

        </div>
    )
}

export default GuidesCards
