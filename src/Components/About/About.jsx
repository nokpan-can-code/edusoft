import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = ({setPlayState}) => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={about_img} alt='' className='about-img'></img>
            <img src={play_icon} alt='' className='play-icon' onClick={()=> {setPlayState(true)}}></img>
        </div>
        <div className="about-right">
            <h3>ABOUT UNIVERSITY</h3>
            <h2>Education for Innovation and Leadership</h2>
            <p>
  Our university is a leading institution committed to academic excellence, 
  research, and innovation. Since its founding, we have remained dedicated 
  to nurturing bright minds and preparing future leaders who can make a 
  positive impact in their communities and beyond.
</p>

<p>
  With a wide range of programs across diverse fields of study, we provide 
  students with the knowledge, skills, and values needed to thrive in an 
  ever-changing world. Our state-of-the-art facilities, distinguished 
  faculty, and supportive learning environment ensure that every student 
  receives a well-rounded education.
</p>

<p>
  Beyond academics, we emphasize character development, creativity, and 
  global citizenship. By fostering a culture of innovation, collaboration, 
  and service, our university continues to shape individuals who are not 
  only career-ready but also equipped to contribute meaningfully to society.
</p>

        </div>
    </div>
  )
}

export default About