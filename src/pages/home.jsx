import React, { useState, useEffect } from 'react';
import landing from '../lottie/landing2.json';
import '../style/landing.scss';
import Lottie from 'lottie-react';
import About from './About';
import eyadCv from '../cv/eyad-cv.pdf'; // Import the CV file

const Home = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = eyadCv; // Use the imported CV file
    link.download = 'eyad-cv.pdf'; // Set the filename for the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <div className='landing mb-5'>
        <div className="container pt-5">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
              <div className='vh-landing d-flex align-items-center'>
                <div className='landing-title'>
                  <span>This Is Me</span>
                  <h1 className='mt-2'>Eyad Shawky</h1>
                  <p className='text-muted'>Hello, I'm Eyad Shawky, a seasoned Full Stack Web Developer with a passion for continuous learning and professional growth. I possess extensive expertise in both front-end and back-end development techniques.</p>
                  <button className='btn btn-landing mt-2' onClick={handleDownloadResume}>Download my resume</button>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
              {/* Conditionally render Lottie animation based on screen size */}
              {windowWidth > 768 && (
                <Lottie animationData={landing} className='lottie-landing' />
              )}
            </div>
          </div>
        </div>
      </div>
      <About />

    </>
  );
}

export default Home;
