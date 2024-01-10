import './myworks.css';
import Liveweb from './Liveweb';
import Livewebsite from './Livewebsite';
import Screenshot from '../images/Screenshot 2024-01-08 at 18.09.15.png';
import Screenshot2 from '../images/Screenshot 2024-01-08 at 18.23.56.png';
const Myworks =()=>{
    return(
        <>
         <p className='works-title'>MY WORKS</p>
        <div className='works'>
        <div className='works-container'>
            <div className='works-bars'>
                <div className='works-bar'>
                <p className='work'>GENESIS</p>
                <p className='description'>This project is focused on creating a layout for a portfolio of photographs.This is fully responsive website</p>
                <p className='built-on'>Built on: HTML, CSS, Figma </p>
                <img src={Screenshot} alt='' className='screenshot'/>
                <Liveweb/>
                </div>
            </div>
            <div className='works-bars'>
                <div className='works-bar'>
                    <p className='work'>BHROMAON TRAVEL</p>
                    <p className='description'>This project is a responsive website that incorporated basics of website development within a narrow timeline</p>
                    <p className='built-on'>Built on: HTML, CSS, Sass, Figma </p>
                    <img src={Screenshot2} alt='' className='screenshot'/>
                    <Livewebsite/>
                </div>
            </div>
        </div>
        </div>
        <p className='github'>MY GITHUB :- Ripandeepsidhu</p>
        <div className='divider3'></div>
        </>
    )
}
export default Myworks;