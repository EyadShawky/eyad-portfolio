import React from 'react';
import '../style/skills.scss'
import { Card } from 'antd';
import py from '../lottie/paython.json'
import Lottie from 'lottie-react';
import cpp from '../lottie/cpp.json'
import react from '../lottie/react.json'
import ubuntu from '../lottie/ubuntu.json'
import HTMLCSS from '../lottie/HTML_CSS.json'
import JS from '../lottie/JS.json'
import Laravel from '../lottie/Laravel.json'
import Sql from '../lottie/database.json'
import Git from '../lottie/gitRequst.json'

const { Meta } = Card;

const cardData = [
    { title: "HTML/CSS", animationData: HTMLCSS },
    { title: "JavaScript", animationData: JS },
    { title: "React/Next.js", animationData: react },
    { title: "Laravel", animationData: Laravel },
    { title: "SQL/MySQL", animationData: Sql },
    { title: "GIT source Control", animationData: Git },
    { title: "Python", animationData: py },
    { title: "c | c++ | c#", animationData: cpp },
    { title: "Lunix", animationData: ubuntu }
];

const Skills = () => {
    return (
        <div className="container skills-vh">
            <div className='d-flex justify-content-center mt-5 mb-4'>
                <h2>My Skills</h2>
            </div>

         
           <div className="row text-center card-flex">
                {cardData.map((item, index) => (
                    <div key={index} className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 mb-4">
                        <Card className='style-card' style={{ width: 300 }}>
                            <Lottie animationData={item.animationData} className='lottie-logos' />
                            <Meta className='mt-5' title={item.title} />
                        </Card>
                        {(index + 1) % 3 === 0 && <div className="w-100"></div>}
                    </div>
                ))}
           </div>
        </div>
    );
}

export default Skills;
