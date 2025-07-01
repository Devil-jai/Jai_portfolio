import React, { useEffect } from "react";
import "./Home.css";
import { NavLink } from "react-router-dom";
import logo from "../../components/img/react.png";
import js from "../../components/img/js.png";
import tailwind from "../../components/img/tailwind.svg";
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS CSS
import BlurImage from "../../components/common/BlurImage";
function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="container mt-5 px-4">
      <div className="row">
        <NavLink to="/about" className="col-12 col-lg-4 profile_img_div text-decoration-none" data-aos="fade-right">
          <div className="profile_img"></div>
          <div className="profile_text_div">
            <h1>ABOUT</h1>
            <div className="d-flex align-items-center">
              <img
                className="me-2"
                src="https://uploads-ssl.webflow.com/64d0b64341df5d5d652f8857/64d1249482f35f915c7dd694_square.png"
                alt="Biography Icon"
                loading="lazy"
              />
              <span>Biography</span>
            </div>
          </div>
        </NavLink>

        <div className="col-lg-8 col-12 p-0">
          <div className="row">
            <NavLink to="/services" className="col-lg-10 col-12 blog_img_div services_img_div mx-auto text-decoration-none" data-aos="fade-up">
              <div className="services_circle">
                <div className="row">
                  <div className="col-3">
                    <BlurImage className="service_img" src={logo} alt="React Logo" />
                  </div>
                  <div className="col-1"></div>
                  <div className="col-3">
                    <BlurImage className="service_img" src={tailwind} alt="Tailwind Logo" />
                  </div>
                  <div className="col-1"></div>
                  <div className="col-3">
                    <BlurImage className="service_img" src={js} alt="JavaScript Logo" />
                  </div>
                </div>
              </div>
              <div className="blog_text_div1 px-2 py-1 d-flex align-items-center">
                <img
                  className="me-2"
                  src="https://uploads-ssl.webflow.com/64d0b64341df5d5d652f8857/64d1249428c7cbf1c3be206f_circle%20blue.png"
                  alt="Service Icon"
                  loading="lazy"
                />
                <span>elite solutions</span>
              </div>
              <div className="blog_text_div2">
                <h5 className="text-light">TECHNICAL SKILLS</h5>
              </div>
            </NavLink>
          </div>

          <div className="row">
            <div className="col-md-7 col-12 mt-4 Work_div px-lg-3" data-aos="fade-up">
              <NavLink to="/work" className="blog_img_div work_img_div text-decoration-none">
                <div className="services_circle">
                  <div className="row">
                    <div className="col-4">
                      <div className="work">
                        <div className="work_img"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="blog_text_div1 px-2 py-1 d-flex align-items-center">
                  <img
                    className="me-2"
                    src="https://uploads-ssl.webflow.com/64d0b64341df5d5d652f8857/64d1249428c7cbf1c3be206f_circle%20blue.png"
                    alt="Projects Icon"
                    loading="lazy"
                  />
                  <span>Projects</span>
                </div>
                <div className="blog_text_div2">
                  <h5 className="text-light">WORK</h5>
                </div>
              </NavLink>
            </div>

            <div className="col-md-5 col-12 mt-4 pe-xxl-4 contact_div" data-aos="fade-up">
              <NavLink to="/contact" className="blog_img_div contact_img_div text-decoration-none">
                <div className="services_circle">
                  <div className="row">
                    <div className="col-4">
                      <div className="contact">
                        <img
                          className="contact_img img-fluid"
                          src="https://uploads-ssl.webflow.com/64d0b64341df5d5d652f8857/64dde7425ddbfdf9c28e5079_contact-p-500.png"
                          alt="Contact Icon"
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="blog_text_div1 px-2 py-1 d-flex align-items-center">
                  <img
                    className="me-2"
                    src="https://uploads-ssl.webflow.com/64d0b64341df5d5d652f8857/64d1249428c7cbf1c3be206f_circle%20blue.png"
                    alt="Let's Talk Icon"
                    loading="lazy"
                  />
                  <span>let's talk</span>
                </div>
                <div className="blog_text_div2">
                  <h5 className="text-light">CONTACT</h5>
                </div>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;