import './intro.css';
import picture from '../images/IMG_7440.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5 } from '@fortawesome/free-brands-svg-icons';
const Intro =() =>{
    return(
        <>
        <div className='intro-container'>
            <div className='left-part'>
            <p className='introname'>Hi! I'm Ripandeep Sidhu, a frontend developer.</p>
            <span className='intro-para'></span>
            <FontAwesomeIcon icon="fa-solid fa-check-square" />
            <FontAwesomeIcon icon={faHtml5} />
            </div>
           
                <img src={picture} alt='' className='my-img'/>
            
        </div>
        <div className='divider'></div>
        
        </>
    )
}
export default Intro;