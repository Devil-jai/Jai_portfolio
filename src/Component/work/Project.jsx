import React from 'react';
import { NavLink } from 'react-router-dom';
import Heading from '../../components/Heading/Heading';
import './Project.css';
import roboto from '../../components/img/3.webp';
import netflix from '../../components/img/netf.jpg';
import car from '../../components/img/Car.jpg';
import Matrimonial from '../../components/img/Matri_Jai.png';
import rock from '../../components/img/stone.webp';
import project from '../../components/img/h_project.png';
import date from '../../components/img/date.png';

const Project = () => {
    return (
        <>
            <Heading img={project} about="Our Work" title="inspiring selection" />
            <div className="container my-5">
                <div className="row justify-content-center">
                    <div className="col-4 col-sm-8 outer_div mb-3">
                        <NavLink to='https://devil-jai.github.io/Matrimonial_Website/' className='card' target='_blank'>
                            <img src={Matrimonial} class="card-img proj_image height_3 img-fluid" alt="not available" />
                            <div class="overlay">
                                <div class="text">Matrimonial Website</div>
                            </div>
                        </NavLink>
                    </div>

                    <div className="col-4 col-sm-8 outer_div mb-3">
                        <NavLink to='https://6576b22f5345c13bfa843ab7--extraordinary-mermaid-17602b.netlify.app/' className='card' target='_blank'>
                            <img src={netflix} class="card-img proj_image img-fluid height_3" alt="not available" />
                            <div class="overlay">
                                <div class="text">Netflix</div>
                            </div>
                        </NavLink>
                    </div>

                    <div className="col-4 col-sm-8 outer_div mb-3">
                        <NavLink to='https://devil-jai.github.io/Bootstrap-Roberto/' className='card' target='_blank'>
                            <img src={roboto} class="card-img proj_image img-fluid height_3" alt="not available" />
                            <div class="overlay">
                                <div class="text">Roberto Clone Website</div>
                            </div>
                        </NavLink>
                    </div>
            
                    <div className="col-4 outer_div mb-3">
                        <NavLink to='https://devil-jai.github.io/Rock-Paper-Scissor/' className='card' target='_blank'>
                            <img src={rock} class="card-img proj_image height_3 img-fluid" alt="not available" />
                            <div class="overlay">
                                <div class="text">Rock , Paper and Scissor</div>
                            </div>
                        </NavLink>
                    </div>

                    <div className="col-4 outer_div mb-3">
                        <NavLink to='https://devil-jai.github.io/Car-Game/' className='card' target='_blank'>
                            <img src={car} class="card-img proj_image height_3 img-fluid" alt="not available" />
                            <div class="overlay">
                                <div class="text">Car Animation</div>
                            </div>
                        </NavLink>
                    </div>
                    <div className="col-4 outer_div mb-3">
                        <NavLink to='https://devil-jai.github.io/date/' className='card' target='_blank'>
                            <img src={date} class="card-img proj_image height_3 img-fluid" alt="not available" />
                            <div class="overlay">
                                <div class="text">Date</div>
                            </div>
                        </NavLink>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Project;