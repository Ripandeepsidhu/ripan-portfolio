import './intro.css';
import picture from '../images/IMG_7440.png'
const Intro =() =>{
    return(
        <>
        <div className='intro-container'>
            <div className='left-part'><p className='hello'>ABOUT ME</p>
            <p className='introname'>Hi! I'm Ripandeep Sidhu.</p>
            <span className='intro-para'>I have done bachelors in computer applications and now studying frontend development.I love technology and thats why i started my journey as frontend developer.</span>
            </div>
           
                <img src={picture} alt='' className='my-img'/>
            
        </div>
        <div className='divider'></div>
        </>
    )
}
export default Intro;