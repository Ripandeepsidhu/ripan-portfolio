import './about.css';
import React from 'react';
import graduate from '../images/graduation-4319259_1280.png';
import coding from '../images/code-6127616_1280.webp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const About = () => {
    return(
    
        <div className='about'>
        <p className='about-title'>ABOUT ME</p>
        <p className='about-para'>I have done bachelors in computer applications and now studying frontend development.I love technology and thats why i started my journey as frontend developer.</p> 
        <p className='title'>EDUCATION</p> 
        <div className='education-bars'>
            <div className='education-bar'>
                <img src={graduate} alt='' className='graduate'/>
                <div className='education-bar-text'>
                <p className='study'>Bachelor's in Computer Applications</p>
                <p className='edu-para'>I have completed this degree from Baba Farid College, India.</p>
            </div>
            </div>
            <div className='education-bar'>
            <img src={coding} alt='' className='graduate'/>
            <div className='education-bar-text'>
                <p className='study'>IT Tech for women</p>
                <p className='edu-para'>It's a frontend development course that i have studied from sundsgården folkhögskola, Helsingborg.</p>
            </div>
            </div>
            
        </div>
        <div className='divider2'></div>
       

        </div>
    )
}
export default About;


