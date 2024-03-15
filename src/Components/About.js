import React, { useState } from 'react'
import { Container } from 'react-bootstrap';
import videoBg1 from '../assets/VideoBg.mp4';
import './About.css';

const About = () => {
    const [show, setShow] = useState(false);
    const [showAnch, setAnchor] = useState(true);
    const showCnt = () => {
        setShow(show === true ? false : true)
        setAnchor(showAnch === false ? true : false)
    }
    return (
        <div div id="about" className='outer-page-content-container mt-1'>
            <div className="wpb_wrapper">
                <div className="wbc-heading clearfix">

                </div>
                <div className="wbc-heading clearfix">
                    <h3 className="special-heading-1" style={{ textAlign: "center" }}> <span style={{ color: "#efdc0c" }}>WELCOME TO</span> VSN GRANITE AND EXPORTS. A LEADING GRANITE SUPPLIERS </h3>
                </div>
                <h4 style={{ textAlign: "center" }} className='h4wbc'>Manufactures Suppliers and Exporters of indian Granite and Marble</h4>
                <hr className="wbc-hr-line" />
                <div className="wbc-heading clearfix">
                    <div className="default-heading-1" style={{ textAlign: "justify", wordWrap: "break-word", }}>
                        <b>VSN Granites and Exporters</b>&nbsp;
                        The Parent Company of the Group was established in 1996 by Mr. Shankar Naidu Veluri. Is one of the market leaders
                        and an ISO 9001:2015 Certified Manufacturers, Exporters & Suppliers of Natural Stones Chi.granite, Marble. Ever Since
                        its inception, the company has seen tremdous growth and till date continues to be one of the most reputed names in
                        the marble and Granite industry. The Company has regularly supplied marbles and Granite slabs. &nbsp;
                        {showAnch && (<a href="#" style={{ textDecoration: "none", }} onClick={showCnt}>Read More</a>)} 
                        {show && (
                            <div>
                                We are backed by a team of qualified professionals who have a rich knowledge of stone industry,
                                our professionals are well-versed with the handling knowledge of latest cutting & finishing machines,
                                We are offering such Granites and other Products that are globally acclaimed of their excellent finishing,
                                hardness easy to clean properly and resistance to acid, moreover, We have mustered huge patronage due
                                to our nominal rates and availability of entire range of natural stones and granites in different colors,
                                textures, thickness and sizes.
                                The journey of transforming rocks into pure beauty, give us an opportunity to
                                introduce ourselves to you!
                                The company has various expansion plans lined up and the future looks brights &nbsp;
                                <a href="#" style={{ textDecoration: "none", }} onClick={showCnt}>Read less</a>
                            </div>
                        )}

                    </div>
                </div>
            </div>


            <div className="aboutus-layout">
                <div className='center-vsn-about'>


                    <div className='video-play' style={{ width: '100%' }}>
                        <video src={videoBg1} autoPlay loop muted></video>
                    </div>


                </div>

            </div>





            {/* <div>
                <h2 className='button-About'><button>view More</button></h2>
            </div> */}

        </div>

    )
}

export default About
