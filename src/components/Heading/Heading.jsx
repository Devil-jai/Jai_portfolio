import React from 'react'
import './Heading.css'

function Heading(props) {
    return (
        <>
            <div className="heading">
                <div className="bg_color">
                    <div className="container pt-5">
                        <div className="text-light rounded-pill p-4 d-flex justify-content-between align-items-center">
                            <div className='d-flex align-items-center'>
                            <img src={props.img} className='reactimg' alt="" />
                            <h4 className='fw-normal ms-4 about_heading'>{props.about}</h4>
                            </div>
                            <div className='d-flex align-items-center'>
                            <img className='me-2 title_img' src="	https://uploads-ssl.webflow.com/64d0b64341df5d5d652f8857/64d1249428c7cbf1c3be206f_circle%20blue.png" alt="" />
                            <h5 className='fw-normal title me-4 mt-1 '>{props.title}</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Heading