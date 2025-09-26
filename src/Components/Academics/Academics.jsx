import React from 'react'
import './Academics.css'
import program_1 from '../../assets/program-1.png'
import program_2 from '../../assets/program-2.png'
import program_3 from '../../assets/program-3.png'
import program_4 from '../../assets/program-4.png'
import program_icon_1 from '../../assets/program-icon-1.png'
import program_icon_2 from '../../assets/program-icon-2.png'
import program_icon_3 from '../../assets/program-icon-3.png'

const Academics = () => {
  return (
    <div className='academics' id='academics'>

        <div className="academic">
            <img src={program_1} alt='' />
            <div className="caption">
                <img src={program_icon_1} alt=''/>
                <p>Under-graduate</p>
            </div>
        </div>

          <div className="academic">
            <img src={program_2} alt='' />
            <div className="caption">
                <img src={program_icon_2} alt=''/>
                <p>Post-Graduate</p>
            </div>
        </div>
          <div className="academic">
            <img src={program_3} alt='' />
            <div className="caption">
                <img src={program_icon_3} alt=''/>
                <p>Pre-Degree</p>
            </div>
        </div>
         <div className="academic">
            <img src={program_4} alt='' />
            <div className="caption">
                <img src={program_icon_2} alt=''/>
                <p>Distance learning</p>
            </div>
        </div>
    </div>
  )
} 

export default Academics