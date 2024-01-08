import './intro.css';
import picture from '../images/IMG_7440.png';
const Intro =() =>{
    return(
        <>
        <div className='intro-container'>
            <div className='left-part'>
            <p className='introname'>Hi! I'm Ripandeep Sidhu, a frontend developer.</p>
            <span className='intro-para'></span>
            </div>
           
                <img src={picture} alt='' className='my-img'/>
            
        </div>
        <div className='divider'></div>
        
        </>
    )
}
export default Intro;