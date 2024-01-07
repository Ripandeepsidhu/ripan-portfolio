import './about.css';
import React from 'react';
import htmlpicture from '../images/html5-1841458_1280.png';
import csspicture from '../images/logo-2582747_1280.webp';
import jspicture from '../images/JavaScript-logo.png';
import githubpicture from '../images/github-154769_1280.webp';
import graduate from '../images/graduation-4319259_1280.png';
import coding from '../images/code-6127616_1280.webp';

const About = () => {
    return(
    
        <div className='intro'>
        <div>
        <p className='title'>EDUCATION</p>
        </div> 
        <div className='education-bars'>
            <div className='education-bar'>
                <img src={graduate} alt='' className='graduate'/>
            </div>
            <div className='education-bar'>
            <img src={coding} alt='' className='graduate'/>
            </div>
            
        </div>
        <div className='divider'></div>
       {/* <img src={htmlpicture} alt='' className='logo'/>
        <img src={csspicture} alt='' className='logo'/>
        <img src={jspicture} alt='' className='logo'/>
        <img src={githubpicture} alt='' className='logo'/>*/}

        </div>
    )
}
export default About;


