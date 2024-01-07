import './intro.css';
import picture from '../images/IMG_7440.png'
const Intro =() =>{
    return(
        <div className='intro-container'>
            <div className='left-part'><p className='hello'>Hi!</p>
            <p className='introname'>I'm Ripan Frontend Developer</p>
            <span className='intro-para'>I am a skilled and passionate frontend developer. </span>
            </div>
           
                <img src={picture} alt='' className='my-img'/>
            
        </div>
    )
}
export default Intro;