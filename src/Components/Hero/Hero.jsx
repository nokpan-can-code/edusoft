import React from 'react'
import './Hero.css'
import  dark_arrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
<div className="hero-text">
  <h1>Shaping Brighter Futures Through Quality Education</h1>
  <p>
    Our innovative curriculum equips students with the knowledge, skills, 
    and practical experience needed to thrive in today’s ever-changing world.
  </p>
  <button className="btn">Read more <img src={dark_arrow} alt=''/></button>
</div>
    </div>
  )
}

export default Hero