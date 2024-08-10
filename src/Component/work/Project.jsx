import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import Heading from '../../components/Heading/Heading';
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

const projects = [
  { img: almabetter, title: "Resume Builder", link: 'https://devil-jai.github.io/Resume-Builder/' },
  { img: roboto, title: "Roberto Clone Website", link: 'https://devil-jai.github.io/Bootstrap-Roberto/' },
  { img: rock, title: "Rock , Paper and Scissor", link: 'https://devil-jai.github.io/Rock-Paper-Scissor/' },
  { img: car, title: "Car Animation", link: 'https://devil-jai.github.io/Car-Game/' },
  { img: date, title: "Date", link: 'https://devil-jai.github.io/date/' },
  { img: createx, title: "Createx", link: 'https://65c63b274809de029359b0dc--rainbow-yeot-9bea9a.netlify.app/' },
  { img: woodwavewonders, title: "WoodwaveWonders", link: 'https://www.woodwavewonders.com/' },
  { img: weather, title: "Weather", link: 'https://6624ecfee17b489a41345545--candid-dusk-c72fc6.netlify.app/' }
];

const Project = () => {
  const [show, setShow] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = (project) => {
    setSelectedProject(project);
    setShow(true);
  };

  return (
    <>
      <Heading img={project} about="My Work" title="Projects" />
      <div className="container my-5">
        <div className="row justify-content-center">
          {projects.map((proj, index) => (
            <div className="col-4 col-sm-8 outer_div mb-3" key={index}>
              <div className='card' onClick={() => handleShow(proj)}>
                <img src={proj.img} className="card-img proj_image img-fluid height_3" alt="not available" />
                <div className="overlay">
                  <div className="text">{proj.title}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{selectedProject?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={selectedProject?.img} className="img-fluid" alt="not available" />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" href={selectedProject?.link} target="_blank">
            Visit Project
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Project;
