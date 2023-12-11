import React from 'react'
import Header from '../Header/Header'
import Home from '../Home/Home'
import './background.css'
import Services from '../Services/Services'
import Footer from '../Footer/Footer'
import Heading from '../Heading/Heading'
import About from '../About/About'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Contact from '../../Component/Contact/Contact'
import Project from '../../Component/work/Project'
import Modal from '../Modal'

function Background() {
  return (
    <>
        <div className="background" style={{backgroundColor:"#1a1b20" ,width:"100%",height:"100%"}}>
          <div className="container outer_container pt-5 pb-1 " >
          <Router>
      <Header />
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/services" element={<Services/>}></Route>
          <Route path="/contact" element={<Contact  />}></Route>
          <Route path="/work" element={<Project  />}></Route>
          <Route path="/popup" element={<Modal  />}></Route>
        </Routes>
      <Footer/>
      </Router>
          
            </div>
        </div>
    </>
  )
}

export default Background