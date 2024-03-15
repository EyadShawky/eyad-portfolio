import React from 'react';
import '../style/about.scss'
import Skills from './Skills';
import { FontAwesomeIcon  } from '@fortawesome/react-fontawesome';
import { faBootstrap, faCss3, faGitAlt, faGithub, faHtml5, faJs, faLaravel, faPhp, faReact } from '@fortawesome/free-brands-svg-icons';
import { faDatabase, faLayerGroup, faUserGroup } from '@fortawesome/free-solid-svg-icons';

const About = () => {
    return (
        <div className="container about-vh">
            <div class="row ">
                <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 p-5 bg-tools">
                    <span className='span-about'>TOOLS EXPERTNESS</span>
                    <div class="row mt-3">
                        <div class="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 mr-2 mb-3">
                            <div class="card text-center">
                                <div class="card-body card-body-about">
                                    <FontAwesomeIcon className='icons' icon={faHtml5} />
                                    <h5 class="card-title">HTML</h5>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 mr-2 mb-3">
                            <div class="card text-center">
                                <div class="card-body">
                                    <FontAwesomeIcon className='icons' icon={faCss3} />
                                    <h5 class="card-title">CSS</h5>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 mr-2 mb-3">
                            <div class="card text-center">
                                <div class="card-body">
                                    <FontAwesomeIcon className='icons' icon={faJs} />
                                    <h5 class="card-title">javascript</h5>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 mr-2 mb-3">
                            <div class="card text-center">
                                <div class="card-body">
                                    <FontAwesomeIcon className='icons' icon={faBootstrap} />
                                    <h5 class="card-title">Bootstrap</h5>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 mr-2 mb-3">
                            <div class="card text-center">
                                <div class="card-body">
                                <FontAwesomeIcon className='icons' icon={faLaravel} /> 
                                <h5 class="card-title">Laravel</h5>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 mr-2 mb-3">
                            <div class="card text-center">
                                <div class="card-body">
                                <FontAwesomeIcon className='icons' icon={faPhp} /> 
                                <h5 class="card-title">PHP</h5>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 mr-2 mb-3">
                            <div class="card text-center">
                                <div class="card-body">
                                <FontAwesomeIcon className='icons' icon={faDatabase} />
                                <h5 class="card-title">MySQL</h5>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 mr-2 mb-3">
                            <div class="card text-center">
                                <div class="card-body">
                                <FontAwesomeIcon className='icons' icon={faReact} /> 
                                <h5 class="card-title">React/Next.js</h5>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 mr-2 mb-3">
                            <div class="card text-center">
                                <div class="card-body">
                                <FontAwesomeIcon className='icons' icon={faGitAlt} /> 
                                <h5 class="card-title">GIT</h5>
                                </div>
                            </div>
                        </div>



                    </div>

                </div>
                <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 p-5 ">
                   <span className='span-about span-about-2'>ABOUT MYSELF</span>
                   <p className='text-muted p-about mt-4'>I'm proficient in crafting responsive Front-End websites with ReactJS, and I'm equally skilled in Back-End development using Laravel, including API creation. I'm a collaborative team player, comfortable with GitHub. Explore my projects for yourself.</p>
                   <div class="row mt-5">
                        <div class="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 mr-2 mb-3">
                            <div class="card text-center">
                                <div class="card-body">
                                <FontAwesomeIcon className='icons' icon={faLayerGroup} />
                                    <h5 class="card-title">+19</h5>
                                    <p className='text-muted text-body'>projects</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 mr-2 mb-3">
                            <div class="card text-center">
                                <div class="card-body">
                                <FontAwesomeIcon className='icons' icon={faGithub} /> 
                                    <h5 class="card-title">+62</h5>
                                    <p className='text-muted text-body'>Github Repos</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 mr-2 mb-2">
                            <div class="card text-center">
                                <div class="card-body">
                                <FontAwesomeIcon className='icons' icon={faUserGroup} />                                    <h5 class="card-title">+21</h5>
                                    <p className='text-muted text-body'>Clients</p>
                                </div>
                            </div>
                        </div>




                    </div>
                </div>
            </div>
            <Skills />
        </div>
    );
}

export default About;
