import './contact.css';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
const Contactme = () =>{
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_rw118p4', 'template_7wxxk6s',form.current, 'SQXNdJ3jQ-eEr8bsW8qtH')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };
    return(
        <div id='contact'>
            <p className='contact-title'>CONTACT ME</p>
            <form className='contact-form' ref={form} onSubmit={sendEmail}>
                <input type='text' className='name' placeholder='Your Name' name='your_name'/>
                <input type='email' className='email' placeholder='Your Email' name='your_email'/>
                <textarea name='message' rows="5" className='msg' placeholder='Your Message'></textarea>
                <button type='submit' value='send' className='submit-btn'>Submit</button>
            </form>
            <div className='divider4'></div>
        </div>
    )
}
export default Contactme;
