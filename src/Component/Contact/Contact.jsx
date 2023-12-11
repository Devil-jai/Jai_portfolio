import React from 'react';
import './ContactUs.css'
import Heading from '../../components/Heading/Heading';

const Contact = () => {
    return (
        <>
        <Heading img="h_contact.png" about="Contact" title="Let's Talk"/>
            <div className="container Contact my-5 px-5">
            <form action="https://formspree.io/f/mvojljrz" method="POST"   >
                    <div className='my-5 fs-3'>
                        Say hello!
                    </div>

                    <div class="mb-3">
                        <input className='input w-100 px-3 py-2 ' name='name' type="text" placeholder='Name' autoComplete='off' required/>
                    </div>
                    <div class="mb-3">
                        
                        <input className='input w-100 px-3 py-2 mb-2' name='email' type="email" placeholder='E-mail' autoComplete='off' required/>
                    </div>

                    <div class="mb-3">
                        <input className='input w-100 px-3 py-2 mb-2' name='website' type="text" placeholder='Subject' autoComplete='off' />
                    </div>
                    <div class="mb-3">
                        <textarea name="message" id=""  className='input input_style w-100'  cols="30" rows="10" autoComplete='off' placeholder='Message'></textarea>
                    </div>

                    <div class="mb-3">
                        <button type='submit' className='send_button mb-3'>SEND</button>
                    </div>
                </form>
            </div>
        </>
    );
}

export default Contact;
