import './skills.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3, faReact, faJs, faGithub, faFigma } from '@fortawesome/free-brands-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';
const Skills= ()=>{
    return(
        <>
         <p className='skills-title'>SKILLS</p> 
        <div className='skills-container'>
       
            <div className='skills-bars'>
                <div className='skills-bar'>
                <FontAwesomeIcon className='icon' icon={faHtml5} size="2x" />
                    <div>
                    <p className='skill'>HTML5</p>
                    </div>
                </div>
                <div className='skills-bar'>
                <FontAwesomeIcon className='icon' icon={faCss3} size="2x" />
                    <div>
                    <p className='skill'> CSS3</p>
                    </div>
                </div>
                <div className='skills-bar'>
                <FontAwesomeIcon className='icon' icon={faJs} size="2x" />
                    <div>
                    <p className='skill'>JAVASCRIPT</p>
                    </div>
                </div>
               
            </div>
            <div className='skills-bars'>
                <div className='education-bar'>
                <FontAwesomeIcon className='icon' icon={faFigma} size="2x" />
                    <div>
                    <p className='skill'>FIGMA</p>
                    </div>
                </div>
                <div className='skills-bar'>
                <FontAwesomeIcon className='icon' icon={faGithub} size="2x" />
                    <div>
                    <p className='skill'>GIT/GITHUB</p>
                    </div>
                </div>
                <div className='skills-bar'>
                <FontAwesomeIcon className='icon' icon={faReact} size="2x" />
                    <div>
                    <p className='skill'>REACT</p>
                    </div>
                </div>
        </div>
        </div>
        <div className='divider3'></div>
        </>
    )
}
export default Skills;