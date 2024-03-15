import React, { useState } from 'react'
import { Button, Container } from 'react-bootstrap';
// import { Media } from './images/Pics.js';
import { Medias } from '../images/Pics-2';
import { Link } from 'react-router-dom';
import { RIGHTARROWBAR } from '../CommonFunctions';


const Productsrange = () => {
  const [file, setFile] = useState(null);

  return (
    <div>
      <div id="service" className='outer-page-content-container'>
        <div className="products-galary-bg">
          <div className="container">
            <div className="wpb_wrapper">
              <div className="default-heading">WHAT MAKES US GREAT
                <h3 className="special-heading-3">OUR <span className="wbc-color">PRODUCT RANGE</span></h3>
                <hr className="wbc-hr" />
                <p className="default-heading" style={{ textAlign: "justify", wordWrap: "break-word" }}>
                  Welcome to India's Top Manufacturer and Exporter of Granite, Marbles. PM International is
                  a wonderful hub for the finest quality Indian granite with a broad selection of marbles.
                  The architecture of households, offices, commercial buildings, hospitals, schools, and other
                  structures serves the collection of diverse granite and marbles.
                </p>
              </div>
            </div>
            <div className="media-container">
              {
                Medias.map((file, index) => (
                  <div className="media" key={index} onClick={() => setFile(file)}>
                    {
                      file.type === 'image' ? <div className="cards-list">

                        <div className="card-stone 1">
                          <div className="card_image"> <img src={file.url} alt='#' /> </div>
                          <div className="card_title title-white">
                            <p>{file.title}</p>
                          </div>
                        </div>
                      </div> : null
                    }
                  </div>

                ))
              }
            </div>
            <div className="popup-media" style={{ display: file ? 'block' : 'none' }}>
              <span onClick={() => setFile(null)}>&times;</span>
              {
                file?.type === 'image' ? <img src={file?.url} ></img> : null
              }
            </div>
          </div>
          <div style={{ textAlign: "center" }}>
            <Button variant='outline-success'><Link to="/gallery" className='text-black'>View More
              &nbsp; <RIGHTARROWBAR /> </Link>
            </Button>
          </div>
        </div>
      </div>
    </div >
  )
}

export default Productsrange
