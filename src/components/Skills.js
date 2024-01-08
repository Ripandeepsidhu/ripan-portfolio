import './skills.css';
import './about.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3, faReact, faJs, faGithub, faFigma } from '@fortawesome/free-brands-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';
const Skills= ()=>{
    return(
        <>
         <p className='skills-title'>SKILLS</p> 
        <div className='skills-container'>
       
            <div className='education-bars'>
                <div className='education-bar'>
                <FontAwesomeIcon className='icon' icon={faHtml5} size="2x" />
                    <div className='education-bar-text'>
                    <p className='study'>HTML5</p>
                    </div>
                </div>
                <div className='education-bar'>
                <FontAwesomeIcon className='icon' icon={faCss3} size="2x" />
                    <div className='education-bar-text'>
                    <p className='study'> CSS3</p>
                    </div>
                </div>
                <div className='education-bar'>
                <FontAwesomeIcon className='icon' icon={faJs} size="2x" />
                    <div className='education-bar-text'>
                    <p className='study'>JAVASCRIPT</p>
                    </div>
                </div>
               
            </div>
            <div className='education-bars'>
                <div className='education-bar'>
                <FontAwesomeIcon className='icon' icon={faFigma} size="2x" />
                    <div className='education-bar-text'>
                    <p className='study'>FIGMA</p>
                    </div>
                </div>
                <div className='education-bar'>
                <FontAwesomeIcon className='icon' icon={faGithub} size="2x" />
                    <div className='education-bar-text'>
                    <p className='study'>GIT/GITHUB</p>
                    </div>
                </div>
                <div className='education-bar'>
                <FontAwesomeIcon className='icon' icon={faReact} size="2x" />
                    <div className='education-bar-text'>
                    <p className='study'>REACT</p>
                    </div>
                </div>
        </div>
        </div>
        <div className='divider3'></div>
        </>
    )
}
export default Skills;