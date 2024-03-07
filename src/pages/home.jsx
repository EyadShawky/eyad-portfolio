import React from 'react';
import landing from '../lottie/landing.json'
import '../style/landing.scss'
import Lottie from 'lottie-react';
import About from './About';
const Home = () => {
  return (
    <div className="container home-vh">
      <div className="row">
        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
          <div className='vh-landing d-flex align-items-center'>
            <div>
              <p>I'M <span>Eyad Shawky</span> <br /> Full-stack Developer </p>
              <button className='btn btn-landing'>contact ME</button>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
        <Lottie animationData={landing} className='lottie-landing' />
       </div>

      </div>

      <About/>
    </div>
  );
}

export default Home;
