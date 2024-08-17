import React, { useEffect } from 'react';
import './ContactUs.css';
import Heading from '../Heading/Heading';
import contact from "../../components/img/h_contact.png";
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS CSS

const Contact = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 }); // Initialize AOS with a duration of 1000ms
    }, []);

    return (
        <>
            <Heading img={contact} about="Contact" title="Let's Talk" />
            <div className="container Contact my-5 px-5" data-aos="fade-up">
                <form action="https://formspree.io/f/mvojljrz" method="POST">
                    <div className='my-5 fs-3' data-aos="fade-down">
                        Say hello!
                    </div>

                    <div className="mb-3" data-aos="fade-up"
     data-aos-duration="3000">
                        <input className='input w-100 px-3 py-2' name='name' type="text" placeholder='Name' autoComplete='off' required />
                    </div>
                    <div className="mb-3" data-aos="fade-up"
     data-aos-duration="3000">
                        <input className='input w-100 px-3 py-2 mb-2' name='email' type="email" placeholder='E-mail' autoComplete='off' required />
                    </div>

                    <div className="mb-3" data-aos="fade-up"
     data-aos-duration="3000">
                        <input className='input w-100 px-3 py-2 mb-2' name='website' type="text" placeholder='Subject' autoComplete='off' />
                    </div>
                    <div className="mb-3"data-aos="fade-up"
     data-aos-duration="3000">
                        <textarea name="message" className='input input_style w-100' cols="30" rows="10" autoComplete='off' placeholder='Message'></textarea>
                    </div>

                    <div className="mb-3" data-aos="fade-up"
     data-aos-duration="3000">
                        <button type='submit' className='send_button mb-3'>SEND</button>
                    </div>
                </form>
            </div>
        </>
    );
}

export default Contact;
