import './intro.css';
import picture from '../images/IMG_7440.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Intro =() =>{
    return(
        <>
        <div className='intro-container'>
            <div className='left-part'><p className='hello'><FontAwesomeIcon className='html-icon' icon="fa-brands fa-html5"  />ABOUT ME</p>
            <p className='introname'>Hi! I'm Ripandeep Sidhu.</p>
            <span className='intro-para'>I have done bachelors in computer applications and now studying frontend development.I love technology and thats why i started my journey as frontend developer.</span>
            <FontAwesomeIcon icon="fa-solid fa-check-square" />
            </div>
           
                <img src={picture} alt='' className='my-img'/>
            
        </div>
        <div className='divider'></div>
        </>
    )
}
export default Intro;