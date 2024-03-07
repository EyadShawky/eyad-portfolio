import React from 'react';
import '../style/about.scss'
import Lottie from 'lottie-react';
import line from '../lottie/line.json'
import Skills from './Skills';
const About = () => {
    return (
        <div className="container about-vh">
            <h3 className='mb-3 mt-3'>About</h3>
            <div className='d-flex'>
            <Lottie animationData={line} className='lottie-line' />
            <p>As a proficient <span>Full Stack Developer</span> with expertise in <span> React  </span>, <span>Next.js  </span>, and <span>Laravel</span> , I bring extensive experience from both industry and academic settings. With a track record of success at<span> Acute Business </span>and <span> Tatweer Misr </span>, I've contributed to over 20 projects, demonstrating proficiency in database management, backend/frontend integration, and diverse programming languages such as<span> C++</span>, <span>Java</span>, <span>Python</span>, and <span>C#</span>. My portfolio reflects a commitment to excellence, leveraging cutting-edge technologies like <span>AI</span> and <span>Data Science</span> while adhering to sound software engineering principles.</p>
        </div>
        <Skills/>
        </div>
    );
}

export default About;
