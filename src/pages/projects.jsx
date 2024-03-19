import React from 'react';
import { Link } from 'react-router-dom'; 
import '../style/services.scss';
import ContactMe from './ContactMe';

// Import images
import ClipfyBackground from '../images/clipifyBackground.png';
import progateBackground from '../images/progate-background.png';
import qalamBackground from '../images/qalam-background.png';
import tatweerBackground from '../images/tatweer-background.png';
import marinaBackground from '../images/marina-background.png';
import secureCipherBackground from '../images/secureCipherBackground.png';
import ecommerceBackground from '../images/ecommerce-background.png';

const Projects = () => {
    // Array of project objects with titles and background images
    const projects = [
        { title: 'Progate', background: progateBackground, link: 'https://www.behance.net/gallery/194225825/E-Learning-V2-(Progate)' },
        { title: 'Qalam', background: qalamBackground, link: 'https://www.behance.net/gallery/194225693/E-Learning-V1-(Qalam)' },
        { title: 'Queuing System for Tatweer misr', background: tatweerBackground, link: 'https://www.behance.net/gallery/194225901/Queuing-System' },
        { title: 'Marina', background: marinaBackground, link: 'https://www.behance.net/gallery/194225997/Marina' },
        { title: 'Secure Cipher', background: secureCipherBackground, link: 'https://computer-security.vercel.app/' },
        { title: 'E-Commerce', background: ecommerceBackground, link: 'https://www.behance.net/gallery/194226217/E-Commerce' }
    ];

    return (
        <>
            <div className='project-vh'>
                <div className='container service'>
                    <div className='d-flex justify-content-center text-center'>
                        <div>
                            <h3>MY RECENT COMPLETED PROJECTS</h3>
                            <p className='text-muted'>exploring the world of projects. This is just a glimpse of what I bring to the table. Stay tuned for a wave of innovation about to unfold!</p>
                        </div>
                    </div> 
 
                    <div className='row mt-4'>
                        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 card-project mb-4" style={{ backgroundImage: `url(${ClipfyBackground})`, backgroundPosition: 'center center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', width: '98.5%', height: '100%' }}>
                            <Link to="https://www.behance.net/gallery/194226521/clipify" className='d-flex justify-content-start align-items-end ' style={{ height: '100%' }}>
                                    <h4 className='text-white'>Clipify</h4>
                            </Link>
                        </div>
                        {/* Mapping over the projects array */}
                        {projects.map((project, index) => (
                            <Link key={index} to={project.link} className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 card-project mb-4" style={{ backgroundImage: `url(${project.background})`, backgroundPosition: 'center center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', height: '100%', textDecoration: 'none' }}>
                                <div className='d-flex justify-content-start align-items-end' style={{ height: '100%' }}>
                                    <h4 className='text-white'>{project.title}</h4>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
            <ContactMe />
        </>
    );
}

export default Projects;
