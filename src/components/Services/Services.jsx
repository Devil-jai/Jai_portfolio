import React, { useEffect } from 'react';
import './Services.css';
import '../Home/Home.css';
import Heading from '../Heading/Heading';
import html from '../../components/img/html.png';
import css from '../../components/img/css.png';
import js from '../../components/img/js.png';
import react from '../../components/img/react.png';
import boot from '../../components/img/bootstrap.png';
import logo from '../../components/img/react.png';
import tailwind from '../../components/img/tailwind.svg';
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS CSS

function Services() {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a duration of 1000ms
  }, []);

  return (
    <>
      <Heading img={logo} about="Services" title="Elite Solutions" />
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-xl-5 col-12 services_img_div col_background px-5 py-4 mx-auto" data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom">
            <div className="row ser">
              <div className="col-4 service">
                <img className='service_img' src={html} alt="HTML" />
              </div>
              <div className="col-xl-7 col-xl-6 col-sm-7 col-12 text-light mt-2 ms-3">
                <h5>HTML</h5>
                <div>HTML is the code that is used to structure a web page and its content</div>
              </div>
            </div>
          </div>
          <div className="col-xl-5 col-12 services_img_div col_background px-5 py-4 mx-auto" data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom" data-aos-delay="100">
            <div className="row ser">
              <div className="col-4 service">
                <img className='service_img' src={css} alt="CSS" />
              </div>
              <div className="col-xl-7 col-xl-6 col-sm-7 col-12 text-light mt-2 ms-3">
                <h5>CSS</h5>
                <div>CSS is the language we use to style an HTML document</div>
              </div>
            </div>
          </div>
          <div className="col-xl-5 col-12 services_img_div col_background px-5 py-4 mx-auto mt-5" data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom" data-aos-delay="200">
            <div className="row ser">
              <div className="col-4 service">
                <img className='service_img bootstrap' src={boot} alt="Bootstrap" />
              </div>
              <div className="col-xl-7 col-xl-6 col-sm-7 col-12 text-light mt-2 ms-3">
                <h5>Bootstrap</h5>
                <div>Bootstrap is the most popular HTML, CSS, and JavaScript framework for developing responsive, mobile-first websites.</div>
              </div>
            </div>
          </div>
          <div className="col-xl-5 col-12 services_img_div col_background px-5 py-4 mt-5 mx-auto" data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom" data-aos-delay="300">
            <div className="row ser">
              <div className="col-4 service">
                <img className='service_img' src={js} alt="JavaScript" />
              </div>
              <div className="col-xl-7 col-xl-6 col-sm-7 col-12 text-light mt-2 ms-3">
                <h5>JavaScript</h5>
                <div>an object-oriented computer programming language commonly used to create interactive effects within web browsers.</div>
              </div>
            </div>
          </div>
          <div className="col-xl-5 col-12 services_img_div col_background px-5 py-4 mt-5 mx-auto" data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom" data-aos-delay="400">
            <div className="row ser">
              <div className="col-4 service">
                <img className='service_img' src={react} alt="React" />
              </div>
              <div className="col-xl-7 col-xl-6 col-sm-7 col-12 text-light mt-2 ms-3">
                <h5>ReactJs</h5>
                <div>React is a free and open-source front-end JavaScript library for building user interfaces based on components</div>
              </div>
            </div>
          </div>
          <div className="col-xl-5 col-12 services_img_div col_background px-5 py-4 mt-5 mx-auto" data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom" data-aos-delay="500">
            <div className="row ser">
              <div className="col-4 service">
                <img className='service_img' src={tailwind} alt="Tailwind CSS" />
              </div>
              <div className="col-xl-7 col-xl-6 col-sm-7 col-12 text-light mt-2 ms-3">
                <h5>Tailwind Css</h5>
                <div>Tailwind CSS is a utility-first CSS framework for rapidly building modern websites without ever leaving your HTML.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
