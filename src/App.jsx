import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Academics from './Components/Academics/Academics';
import Title from './Components/Title/Title';
import About from './Components/About/About';
import Campus from './Components/Campus/Campus';
import Testimonials from './Components/Testimonials/Testimonials';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import VideoPlayer from './Components/VideoPlayer/VideoPlayer';

const App = () => {
  const [playState, setPlayState] = useState(false);

  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
        <Title subTitle="ACADEMIC PROGRAMS" title="Discover What we Offer"/>
        <Academics/>
        <About setPlayState={setPlayState} />
         <Title subTitle="Gallery" title="Campus Photos"/>
         <Campus/>
         <Title subTitle="TESTIMONIALS" title="What Student's are saying"/>
         <Testimonials />
         <Title subTitle="Contact Us" title="Get in touch"/>
         <Contact/>
         <Footer />
      </div>
      <VideoPlayer playState={playState} setPlayState={setPlayState}/>
    </div>
  )


}
export default App;