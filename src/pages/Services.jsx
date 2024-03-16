import React from 'react';
import '../style/services.scss'
import { faDatabase, faLink, faNetworkWired, faServer, faTv, faUserGear } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Projects from './projects';
import ContactMe from './ContactMe';


const Services = () => {
    return (
        <>
        <div className='vh-services' l>
            <div className='container service'>
                <div className='d-flex justify-content-center text-center'>
                    <div>
                        <h3>OFFERINGS TO MY CLIENTS</h3>
                        <p className='text-muted'>Crafting Web Experiences! From sleek designs to dynamic apps, I bring your digital ideas to life. Let's create a standout online presence together!</p>
                    </div>
                </div>

                <div className='row'>

                    <div class=" col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 card-service mb-4 ">
                    <FontAwesomeIcon icon={faLink} className='icon-service' />
                    <h4>FULL-STACK WIZARDRY</h4>
                    <p className='text-muted'>Seamlessly bridge the ga className='text-muted' between frontend elegance and backend robustness. I specialize in full-stack development, ensuring your web projects are crafted with expertise on both ends.</p>
                    </div>

                    <div class=" col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 card-service mb-4 ">
                    <FontAwesomeIcon icon={faTv} className='icon-service' />
                    <h4>RESPONSIVE DESIGN MASTERY</h4>
                    <p className='text-muted'>Delight your users with websites that adapt flawlessly to any device. My frontend skills ensure a visually stunning and responsive user interface, offering an optimal experience on every screen.</p>
                    </div>
                    
                    <div class=" col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 card-service mb-4 ">
                    <FontAwesomeIcon icon={faServer} className='icon-service' />
                    <h4>BACKEND ARCHITECTURAL PROWESS</h4>
                    <p className='text-muted'>Power up your applications with a strong and efficient backend architecture. I bring extensive backend experience, ensuring your web solutions are secure, scalable, and performant.</p>
                    </div>

                    <div class=" col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 card-service mb-4 ">
                    <FontAwesomeIcon icon={faDatabase} className='icon-service' />
                    <h4>DATA DYNAMO</h4>
                    <p className='text-muted'>Seamlessly bridge the gap between frontend elegance and backend robustness. I specialize in full-stack development, ensuring your web projects are crafted with expertise on both ends.</p>
                    </div>

                    <div class=" col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 card-service mb-4 ">
                    <FontAwesomeIcon icon={faNetworkWired} className='icon-service' />                    <h4>API ALCHEMY</h4>
                    <p className='text-muted'>Seamlessly bridge the gap between frontend elegance and backend robustness. I specialize in full-stack development, ensuring your web projects are crafted with expertise on both ends.</p>
                    </div>

                    <div class=" col-sm-12 col-md-4 col-lg-4 col-xl-4 card-service mb-4 ">
                    <FontAwesomeIcon icon={faUserGear} className='icon-service' />  
                     <h4>END-TO-END PROJECT EXPERTISE</h4>
                    <p className='text-muted'>Seamlessly bridge the gap between frontend elegance and backend robustness. I specialize in full-stack development, ensuring your web projects are crafted with expertise on both ends.</p>
                    </div>

                </div>
            </div>
        </div>
        <Projects/>
        </>
        
    );
}

export default Services;
