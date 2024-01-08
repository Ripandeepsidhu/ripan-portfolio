import './contact.css';
const Contactme = () =>{
    return(
        <div className='contact'>
            <p className='contact-title'>CONTACT ME</p>
            <form className='contact-form'>
                <input type='text' className='name' placeholder='Your Name'/>
                <input type='email' className='email' placeholder='Your Email'/>
                <textarea name='message' rows="5" className='msg' placeholder='Your Message'></textarea>
                <button type='submit' value='send' className='submit-btn'>Submit</button>
            </form>
            <div className='divider4'></div>
        </div>
    )
}
export default Contactme;