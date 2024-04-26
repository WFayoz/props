import React from 'react'
import './styles/featuredStyle.scss'
import feat1 from '../../../public/feat1.png'
import feat2 from '../../../public/feat2..png'
import feat3 from '../../../public/feat3.png'
import feat4 from '../../../public/feat4.png'

const Featured = () => {
  return (
    <div className='featured'>
      <div className='featured__top'>
        <h3>Featured destinations</h3>
        <p> View all  > </p>
      </div>
      <div className='featured__cards'>
        <div className='featured__cards--card'>
          <img src={feat1} alt="" />
          <div className='card__text'>
            <h6>Raja Ampat</h6>
            <p>Indonesia</p>
          </div>
        </div>
        <div className='featured__cards--card'>
          <img src={feat2} alt="" />
          <div className='card__text'>
            <h6>Fanjingshan</h6>
            <p>China</p>
          </div>
        </div>
        <div className='featured__cards--card'>
          
          <img src={feat3} alt="" />
          <div className='card__text'>
            <h6>Vevey</h6>
            <p>Switzerland</p>
          </div>
        </div>
        <div className='featured__cards--card'>
          <img src={feat4} alt="" />
          <div className='card__text'>
            <h6>Skadar</h6>
            <p>Montenegro</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Featured