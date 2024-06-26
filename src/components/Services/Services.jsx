import './Services.css'
import '../Home/Home.css'
import React from 'react'
import Heading from '../Heading/Heading'
import html from '../../components/img/html.png';
import css from '../../components/img/css.png';
import js from '../../components/img/js.png';
import react from '../../components/img/react.png';
import boot from '../../components/img/bootstrap.png';
import logo from '../../components/img/react.png';
import tailwind from '../../components/img/tailwind.svg';



function Services() {
  return (
    <>
    <Heading img={logo}  about="Services" title="Elite Solutions"/>
      <div className="container mt-5 ">
        <div className="row justify-content-center  ">
          <div className="col-xl-5 col-12  services_img_div col_background px-5  py-4 mx-auto ">
            <div className="row ser">
              <div className="col-4 service ">
                <img className='service_img' src={html} alt="not available" />
              </div>
              <div className="col-xl-7 col-xl-6 col-sm-7 col-12  text-light mt-2 ms-3">
                <h5>HTML</h5>
                <div>HTML is the code that is used to structure a web page and its content</div>
              </div>
            </div>
          </div>
          <div className="col-xl-5 col-12 services_img_div col_background px-5  py-4 mx-auto">
            <div className="row ser">
              <div className="col-4 service">
                <img className='service_img' src={css} alt="" />
              </div>
              <div className="col-xl-7 col-xl-6 col-sm-7 col-12  text-light mt-2 ms-3">
                <h5>CSS</h5>
                <div>CSS is the language we use to style an HTML document</div>
              </div>
            </div>
          </div>
          <div className="col-xl-5 col-12 services_img_div col_background px-5  py-4  mx-auto mt-5">
            <div className="row ser">
              <div className="col-4 service">
                <img className='service_img bootstrap' src={boot} alt="" />
              </div>
              <div className="col-xl-7 col-xl-6 col-sm-7 col-12  text-light mt-2 ms-3">
                <h5>Bootstrap</h5>
                <div>Bootstrap is the most popular HTML, CSS, and JavaScript framework for developing responsive, mobile-first websites.</div>
              </div>
            </div>
          </div>
          <div className="col-xl-5 col-12 services_img_div col_background px-5  py-4 mt-5 mx-auto">
            <div className="row ser ">
              <div className="col-4 service">
                <img className='service_img' src={js} alt="" />
              </div>
              <div className="col-xl-7 col-xl-6 col-sm-7 col-12 text-light mt-2 ms-3">
                <h5>JavaScript</h5>
                <div>an object-oriented computer programming language commonly used to create interactive effects within web browsers.</div>
              </div>
            </div>
          </div>
          <div className="col-xl-5 col-12 services_img_div col_background px-5  py-4 mt-5 mx-auto">
            <div className="row ser">
              <div className="col-4 service">
                <img className='service_img' src={react} alt="" />
              </div>
              <div className="col-xl-7 col-xl-6 col-sm-7 col-12  text-light mt-2 ms-3">
                <h5>ReactJs</h5>
                <div>React is a free and open-source front-end JavaScript library for building user interfaces based on components</div>
              </div>
            </div>
          </div>
          <div className="col-xl-5 col-12 services_img_div col_background px-5  py-4 mt-5 mx-auto">
            <div className="row ser">
              <div className="col-4 service">
                <img className='service_img' src={tailwind} alt="" />
              </div>
              <div className="col-xl-7 col-xl-6 col-sm-7 col-12  text-light mt-2 ms-3">
                <h5>Tailwind Css</h5>
                <div>Tailwind CSS is a utility-first CSS framework for rapidly building modern websites without ever leaving your HTML.</div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </>
  )
}

export default Services