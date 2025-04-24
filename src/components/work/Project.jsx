import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import Heading from '../Heading/Heading';
import './Project.css';
import roboto from '../../components/img/3.webp';
import car from '../../components/img/Car.jpg';
import rock from '../../components/img/stone.webp';
import project from '../../components/img/h_project.png';
import date from '../../components/img/date.png';
import createx from '../../components/img/createx.jpg';
import woodwavewonders from '../../components/img/woodwavewonders.png';
import weather from '../../components/img/weather.png';
import almabetter from '../../components/img/almabetter.png';
import { FaTimes } from 'react-icons/fa';
import userinfo from '../../components/img/userinfo.jpg'
import todolist from '../../components/img/todolist.jpg'
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS CSS

const projects = [
  { img: almabetter, title: "Resume Builder", link: 'https://devil-jai.github.io/Resume-Builder/', description: "A resume builder to help you create professional resumes easily.", sourceCodeLink: 'https://github.com/devil-jai/Resume-Builder' },
  { img: roboto, title: "Roberto Clone Website", link: 'https://devil-jai.github.io/Bootstrap-Roberto/', description: "A clone of the Roberto website using Bootstrap.", sourceCodeLink: 'https://github.com/devil-jai/Bootstrap-Roberto' },
  { img: rock, title: "Rock, Paper, Scissors", link: 'https://devil-jai.github.io/Rock-Paper-Scissor/', description: "A simple rock, paper, scissors game.", sourceCodeLink: 'https://github.com/devil-jai/Rock-Paper-Scissor' },

  { img: createx, title: "Createx", link: 'https://65c63b274809de029359b0dc--rainbow-yeot-9bea9a.netlify.app/', description: "A creative project showcasing various features.", sourceCodeLink: 'https://github.com/Rakshit21-git/Createx' },
  { img: woodwavewonders, title: "WoodwaveWonders", link: 'https://devil-jai.github.io/WoodwaveWonders/', description: "A website for Woodwave Wonders with interactive elements.", sourceCodeLink: 'https://github.com/Devil-jai/WoodwaveWonders' },
  { img: weather, title: "Weather", link: 'https://6624ecfee17b489a41345545--candid-dusk-c72fc6.netlify.app/', description: "A weather application displaying current weather information.", sourceCodeLink: 'https://github.com/Devil-jai/weather-app' },
  { img: userinfo, title: "UserInfo", link: 'https://userinfo-1-wg7g.onrender.com/', description: "A UserInfo application user create, Update, delete their info ", sourceCodeLink: 'https://github.com/Devil-jai/UserInfo' },
  { img: todolist, title: "TodoList", link: 'https://todolist-frontend-gkdl.onrender.com/', description: "A full-stack ToDoList app built with the MERN stack, offering robust task management with seamless data persistence and a responsive user interface. ", sourceCodeLink: 'https://github.com/Devil-jai/TodoList' }
];

const Project = () => {
  const [show, setShow] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = (project) => {
    setSelectedProject(project);
    setShow(true);
  };

  React.useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS
  }, []);

  return (
    <>
      <Heading img={project} about="My Work" title="Projects" />
      <div className="container my-5">
        <div className="row justify-content-center">
          {projects.map((proj, index) => (
            <div className="col-4 col-sm-8 outer_div mb-3" key={index} data-aos="flip-up">
              <div className='card' onClick={() => handleShow(proj)} data-aos="zoom-in">
                <img src={proj.img} className="card-img proj_image img-fluid height_3" alt="not available" />
                <div className="overlay">
                  <div className="text">{proj.title}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Modal show={show} onHide={handleClose} dialogClassName="custom-modal">
        <Modal.Header className="custom-modal-header">
          <FaTimes className="custom-close-icon" onClick={handleClose} />
          <Modal.Title className="custom-modal-title" data-aos="fade-down">{selectedProject?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body data-aos="fade-up">
          <img src={selectedProject?.img} className="img-fluid mb-3" alt="not available" />
          <p>{selectedProject?.description}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button data-aos="fade-right" variant="primary" href={selectedProject?.link} target="_blank">
            Visit Project
          </Button>
          <Button data-aos="fade-left" variant="primary" href={selectedProject?.sourceCodeLink} target="_blank">
            View Source Code
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Project;
