import React from 'react';
import '../style/services.scss'
import ContactMe from './ContactMe';

const Projects = () => {
    return (
        <>
            <div className='project-vh' >
                <div className='container service'>
                    <div className='d-flex justify-content-center text-center'>
                        <div>
                            <h3>OUR RECENT COMPLETED PROJECTS</h3>
                            <p className='text-muted'>exploring the world of projects . this is just a glimpse of what I bring to the table. Stay tuned for a wave of innovation about to unfold!</p>
                        </div>
                    </div>

                    <div className='row mt-4'>

                        <div class=" col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 card-project mb-4 ">
                            <div className='d-flex justify-content-start align-items-end text-white' style={{ height: '100%' }}>
                                <h4>FULL-STACK WIZARDRY</h4>
                            </div>
                        </div>

                        <div class=" col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 card-project mb-4 ">
                            <div className='d-flex justify-content-start align-items-end text-white' style={{ height: '100%' }}>
                                <h4>FULL-STACK WIZARDRY</h4>
                            </div>
                        </div>

                        <div class=" col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 card-project mb-4 ">
                            <div className='d-flex justify-content-start align-items-end text-white' style={{ height: '100%' }}>
                                <h4>FULL-STACK WIZARDRY</h4>
                            </div>
                        </div>

                        <div class=" col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 card-project mb-4 ">
                            <div className='d-flex justify-content-start align-items-end text-white' style={{ height: '100%' }}>
                                <h4>FULL-STACK WIZARDRY</h4>
                            </div>
                        </div>

                        <div class=" col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 card-project mb-4 ">
                            <div className='d-flex justify-content-start align-items-end text-white' style={{ height: '100%' }}>
                                <h4>FULL-STACK WIZARDRY</h4>
                            </div>
                        </div>

                        <div class=" col-sm-12 col-md-4 col-lg-4 col-xl-4 card-project mb-4 ">
                            <div className='d-flex justify-content-start align-items-end text-white' style={{ height: '100%' }}>
                                <h4>FULL-STACK WIZARDRY</h4>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <ContactMe />
        </>

    );
}

export default Projects;
