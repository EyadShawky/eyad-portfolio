import React from 'react';
import { Link } from 'react-router-dom';
import '../style/navbar.scss'
import Lottie from 'lottie-react';
import linkedin from '../lottie/linkedin.json'
import github from '../lottie/github.json'

const Header = () => {
  return (
    <>

      <nav className="navbar navbar-expand-lg ">
        <div className='container'>
        <div className='p-4 d-flex justify-content-center'>
          <Link to='/'  className="navbar-brand">Navbar</Link>
         <button className="navbar-toggler " type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon "></span>
          </button>
         </div>

          <div className="collapse navbar-collapse p-3" id="navbarSupportedContent">
            <ul className="navbar-nav m-auto">
              <li className="nav-item">
                <Link to='/about' className="nav-link "> About </Link>
              </li>
              <li className="nav-item">
                <Link to='/portfolio' className="nav-link"> Portfolio</Link>
              </li>
              <li className="nav-item">
                <Link to='/experience' className="nav-link"> Experience </Link>
              </li>
            </ul>
            <Link to='https://www.linkedin.com/in/eyad-shawky-81a046204/'><Lottie animationData={linkedin} className='lottie-linkedin' /></Link>
            <Link to='https://github.com/EyadShawky'><Lottie animationData={github} className='lottie-github' /></Link>
          </div>
        </div>
      </nav>

    </>
  );
}

export default Header;
