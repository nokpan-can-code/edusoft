import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'

const Contact = () => {
     const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "c30a3611-ce4b-48b0-82fa-4b478b9c8a60");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Successfully submitted");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className='contact'>
        <div className="contact-col">
            <h3>Send us a Message <img src={msg_icon} alt=''/></h3>
            <p> We value your feedback, questions, and suggestions. Please use the form below to reach out to us, 
  or contact us directly. Your input is essential in helping us deliver outstanding services and support 
  to our University community.</p>
  <ul>
    <li><img src={mail_icon} alt="" /> jiparnokpan@gmail.com</li>
    <li><img src={phone_icon} alt="" /> +234 7037-4654-02</li>
    <li><img src={location_icon} alt="" /> Jos, Plateau State <br/> Nigeria</li>
  </ul>
        </div>
        <div className="contact-col">
            <form onSubmit={onSubmit}>
                <label>Your Name</label>
                <input type='text' name='name' placeholder='Enter your name' required/>
                <label>Phone Number</label>
                <input type='tel' name='phone' placeholder='Enter phone number' required/>
                <label>Email</label>
                <input type='email' name='email' placeholder='enter Email' required />
                <label >Drop your Message Here</label>
                <textarea name='message' id='' rows="7" placeholder='type message here' required />
                <button type='submit' className='btn dark-btn'>Submit now <img src={white_arrow} alt="" /></button>
            </form>
            <span>{result}</span>
        </div>

    </div>
  )
}

export default Contact