import React from 'react'
import './About.css'
import Heading from '../Heading/Heading'

function About() {
  return (<>
    <Heading img="jai.jpg" about="About" title="biography & abilities"/>
    <div className="about mt-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-12">
            <div className="lhs text-light rounded-4 px-5">
              <h1 className='fw-normal my-4 '>Jai Bagaria</h1>
              <div className="blue_line "></div>
              <div>
                <h5 className='fw-normal mt-4 '>Front-End Developer</h5>
              </div>
              <div >
                <img className="about_img my-4  rounded-5" src="jai.jpg" alt="" />
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-12 text-light">
            <img src="chakra.png" className='chakra_img my-5' alt="" />
            <div className='fs-1 about_text fw-bold'>I'M JAI BAGARIA, A SKILLED AND INNOVATIVE  FRONT-END DEVELOPER. MY EXPERTISE LIES IN CREATING INTUITIVE AND VISUALLY APPEALING DIGITAL EXPERIENCES THAT CAPTIVATE USERS.</div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default About