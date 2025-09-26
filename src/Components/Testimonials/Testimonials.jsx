import React, { useRef } from 'react';
import './Testimonials.css';
import next_icon from '../../assets/next-icon.png';
import back_icon from '../../assets/back-icon.png';
import user_1 from '../../assets/user-1.png';
import user_2 from '../../assets/user-2.png';
import user_3 from '../../assets/user-3.png';
import user_4 from '../../assets/user-4.png';

const Testimonials = () => {
  const slider = useRef();
  const tx = useRef(0); // persist value across renders

  const slideForward = () => {
    if (tx.current > -75) { // 4 slides → -75%
      tx.current -= 25;
    }
    slider.current.style.transform = `translateX(${tx.current}%)`;
  };

  const slideBackward = () => {
    if (tx.current < 0) {
      tx.current += 25;
    }
    slider.current.style.transform = `translateX(${tx.current}%)`;
  };

  return (
    <div className='testimonials'>
      <img src={next_icon} alt='' className='next-btn' onClick={slideForward} />
      <img src={back_icon} alt='' className='back-btn' onClick={slideBackward} />
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className='slide'>
              <div className='user-info'>
                <img src={user_1} alt=''/>
                <div>
                  <h3>Precious I. Daniel 1</h3>
                  <span>Abuja, Nig.</span>
                </div>
              </div>
              <p>Attending this university has been life-changing! The professors are supportive, 
                 the curriculum is challenging, and the campus environment encourages growth and
                 innovation.</p>
            </div>
          </li>
          <li>
            <div className='slide'>
              <div className='user-info'>
                <img src={user_2} alt=''/>
                <div>
                  <h3>Wisdom Micah 2</h3>
                  <span>Jos, Nig.</span>
                </div>
              </div>
              <p>I love the hands-on learning approach here. From labs to group projects, 
                 I feel fully prepared for my future career. Truly a place that nurtures potential.</p>
            </div>
          </li>
          <li>
            <div className='slide'>
              <div className='user-info'>
                <img src={user_3} alt=''/>
                <div>
                  <h3>Faith J. Juliet 3</h3>
                  <span>Lagos, Nig.</span>
                </div>
              </div>
              <p>The community at this university is amazing. I’ve made lifelong friends, 
                 and the faculty genuinely care about our success both academically and personally.</p>
            </div>
          </li>
          <li>
            <div className='slide'>
              <div className='user-info'>
                <img src={user_4} alt=''/>
                <div>
                  <h3>Nokpan J. Ishaya 4</h3>
                  <span>Edusoft, Nig.</span>
                </div>
              </div>
              <p>Every day here feels inspiring. The resources, mentorship, and opportunities 
                 provided have helped me grow not just as a student but as a confident individual.</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
