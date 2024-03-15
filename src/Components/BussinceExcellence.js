import React from 'react'
import { Container } from 'react-bootstrap'
import Image from '../assets/Image.jpeg'
import video1 from '../assets/Manufacture.mp4'
import video2 from '../assets/Quality.mp4'
import video3 from '../assets/Packing.mp4'
import video4 from '../assets/Delivary.mp4';
import './BussinceExcellence.css'

const BussinceExcellence = () => {


  return (
    <div id="service" className='outer-page-content-container'>


      <div className="wbc-heading clearfix">
        <h3 className="special-heading-3">Our 4 Step Process Towards <span className="wbc-color">Business Excellence</span></h3>
      </div>
      <hr className="wbc-hr" />

      {/* <h3 className='abt-title'>Our 4 Step Process Towards Business Excellence</h3> */}


      <main className="main">

        <section className="card-area">

          {/* <!-- Card: City --> */}
          <section className="card-section">
            <div className="card">
              <div className="flip-card">
                <div className="flip-card__container">
                  <div className="card-front">
                    <div className="card-front__tp card-front__tp--city">
                      {/* svg heree */}

                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="72" height="72" fill="rgba(255,255,255,1)"><path fill="none" d="M0 0h24v24H0z"></path><path d="M9 19H12V12.9416L8 9.45402L4 12.9416V19H7V15H9V19ZM21 21H3C2.44772 21 2 20.5523 2 20V12.4868C2 12.1978 2.12501 11.9229 2.34282 11.733L6 8.54435V4C6 3.44772 6.44772 3 7 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21ZM16 11V13H18V11H16ZM16 15V17H18V15H16ZM16 7V9H18V7H16ZM12 7V9H14V7H12Z"></path></svg>

                      <h2 className="card-front__heading">
                        Manufacture
                      </h2>

                    </div>

                    <div className="card-front__bt">
                      <p className="card-front__text-view card-front__text-view--city">
                        View me
                      </p>
                    </div>
                  </div>
                  <div className="card-back">
                    <video className="video__container" autoPlay muted loop>
                      <source className="video__media" src={video1} type="video/mp4" />
                    </video>
                  </div>
                </div>
              </div>

              <div className="inside-page">
                <div className="inside-page__container">
                  <h3 className="inside-page__heading inside-page__heading--city">
                    Manufacturining
                  </h3>
                  <p className="inside-page__text">
                    " VSN Granites and Exports leverages state-of-the-art manufacturing units and over two decades of expertise to meet diverse client needs. We process granite blocks, cut slabs precisely, prepare various stone articles, and use advanced machinery to deliver optimally treated granite products to importers, architects, and construction companies worldwide."
                  </p>
                  {/* <!--                             <a href="#" className="inside-page__btn inside-page__btn--city">View deals</a> --> */}
                </div>
              </div>
            </div>
          </section>
          {/* <!-- Card: Ski --> */}
          <section className="card-section">
            <div className="card">
              <div className="flip-card">
                <div className="flip-card__container">
                  <div className="card-front">
                    <div className="card-front__tp card-front__tp--ski">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="72" height="72" fill="rgba(255,255,255,1)"><path fill="none" d="M0 0h24v24H0z"></path><path d="M10.007 2.10377C8.60544 1.65006 7.08181 2.28116 6.41156 3.59306L5.60578 5.17023C5.51004 5.35763 5.35763 5.51004 5.17023 5.60578L3.59306 6.41156C2.28116 7.08181 1.65006 8.60544 2.10377 10.007L2.64923 11.692C2.71404 11.8922 2.71404 12.1078 2.64923 12.308L2.10377 13.993C1.65006 15.3946 2.28116 16.9182 3.59306 17.5885L5.17023 18.3942C5.35763 18.49 5.51004 18.6424 5.60578 18.8298L6.41156 20.407C7.08181 21.7189 8.60544 22.35 10.007 21.8963L11.692 21.3508C11.8922 21.286 12.1078 21.286 12.308 21.3508L13.993 21.8963C15.3946 22.35 16.9182 21.7189 17.5885 20.407L18.3942 18.8298C18.49 18.6424 18.6424 18.49 18.8298 18.3942L20.407 17.5885C21.7189 16.9182 22.35 15.3946 21.8963 13.993L21.3508 12.308C21.286 12.1078 21.286 11.8922 21.3508 11.692L21.8963 10.007C22.35 8.60544 21.7189 7.08181 20.407 6.41156L18.8298 5.60578C18.6424 5.51004 18.49 5.35763 18.3942 5.17023L17.5885 3.59306C16.9182 2.28116 15.3946 1.65006 13.993 2.10377L12.308 2.64923C12.1078 2.71403 11.8922 2.71404 11.692 2.64923L10.007 2.10377ZM6.75977 11.7573L8.17399 10.343L11.0024 13.1715L16.6593 7.51465L18.0735 8.92886L11.0024 15.9999L6.75977 11.7573Z"></path></svg>

                      <h2 className="card-front__heading">
                        Quality
                      </h2>

                    </div>

                    <div className="card-front__bt">
                      <p className="card-front__text-view card-front__text-view--ski">
                        View me
                      </p>
                    </div>
                  </div>

                  <div className="card-back">
                    <video className="video__container" autoPlay muted loop>
                      <source className="video__media" src={video2} type="video/mp4" />
                    </video>
                  </div>
                </div>
              </div>

              <div className="inside-page">
                <div className="inside-page__container">
                  <h3 className="inside-page__heading inside-page__heading--ski">
                    Quality
                  </h3>
                  <p className="inside-page__text">
                    " VSN Granites and Exports is committed to quality, adhering to global standards, ensuring client satisfaction, meticulously inspecting granite at all manufacturing stages, and scrutinizing all types of granite defects as part of our comprehensive quality control procedure."
                  </p>
                  {/* <a href="#" className="inside-page__btn inside-page__btn--ski">View deals</a> */}
                </div>
              </div>
            </div>
          </section>


          {/* <!-- Card: Beach --> */}
          <section className="card-section">
            <div className="card">
              <div className="flip-card">
                <div className="flip-card__container">
                  <div className="card-front">
                    <div className="card-front__tp card-front__tp--beach">
                      {/* svhg */}
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="72" height="72" fill="rgba(255,255,255,1)"><path fill="none" d="M0 0h24v24H0z"></path><path d="M3 10H21V20.0044C21 20.5543 20.5551 21 20.0066 21H3.9934C3.44476 21 3 20.5552 3 20.0044V10ZM9 12V14H15V12H9ZM2 3.99981C2 3.44763 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44372 22 3.99981V8H2V3.99981Z"></path></svg>
                      <h2 className="card-front__heading">
                        Package
                      </h2>
                      {/* <p className="card-front__text-price">
                        From £229
                      </p> */}
                    </div>

                    <div className="card-front__bt">
                      <p className="card-front__text-view card-front__text-view--beach">
                        View me
                      </p>
                    </div>
                  </div>
                  <div className="card-back">
                    <video className="video__container" autoPlay muted loop>
                      <source className="video__media" src={video3} type="video/mp4" />
                    </video>
                  </div>
                </div>
              </div>

              <div className="inside-page">
                <div className="inside-page__container">
                  <h3 className="inside-page__heading inside-page__heading--beach">
                    Packaging
                  </h3>
                  <p className="inside-page__text">
                    “ VSN Granites and Exports prioritizes packaging in the granite industry, using sturdy, fumigated wooden crates and high-quality plastic sheets to prevent damage and ensure safe transit. For more details about our meticulous packaging procedure, please inquire further.”
                  </p>
                  {/* <a href="#" className="inside-page__btn inside-page__btn--beach">View deals</a> */}
                </div>
              </div>
            </div>
          </section>

          {/* <!-- Card: Camping --> */}
          <section className="card-section">
            <div className="card">
              <div className="flip-card">
                <div className="flip-card__container">
                  <div className="card-front">
                    <div className="card-front__tp card-front__tp--camping">
                      {/* svg hereee */}
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="72" height="72" fill="rgba(255,255,255,1)"><path fill="none" d="M0 0h24v24H0z"></path><path d="M8.96456 18C8.72194 19.6961 7.26324 21 5.5 21C3.73676 21 2.27806 19.6961 2.03544 18H1V6C1 5.44772 1.44772 5 2 5H16C16.5523 5 17 5.44772 17 6V8H20L23 12.0557V18H20.9646C20.7219 19.6961 19.2632 21 17.5 21C15.7368 21 14.2781 19.6961 14.0354 18H8.96456ZM15 7H3V15.0505C3.63526 14.4022 4.52066 14 5.5 14C6.8962 14 8.10145 14.8175 8.66318 16H14.3368C14.5045 15.647 14.7296 15.3264 15 15.0505V7ZM17 13H21V12.715L18.9917 10H17V13ZM17.5 19C18.1531 19 18.7087 18.5826 18.9146 18C18.9699 17.8436 19 17.6753 19 17.5C19 16.6716 18.3284 16 17.5 16C16.6716 16 16 16.6716 16 17.5C16 17.6753 16.0301 17.8436 16.0854 18C16.2913 18.5826 16.8469 19 17.5 19ZM7 17.5C7 16.6716 6.32843 16 5.5 16C4.67157 16 4 16.6716 4 17.5C4 17.6753 4.03008 17.8436 4.08535 18C4.29127 18.5826 4.84689 19 5.5 19C6.15311 19 6.70873 18.5826 6.91465 18C6.96992 17.8436 7 17.6753 7 17.5Z"></path></svg>
                      <h2 className="card-front__heading">
                        Delivary
                      </h2>

                    </div>

                    <div className="card-front__bt">
                      <p className="card-front__text-view card-front__text-view--camping">
                        View me
                      </p>
                    </div>
                  </div>
                  <div className="card-back">
                    <video className="video__container" autoPlay muted loop>
                      <source className="video__media" src={video4} type="video/mp4" />
                    </video>
                  </div>
                </div>
              </div>

              <div className="inside-page">
                <div className="inside-page__container">
                  <h3 className="inside-page__heading inside-page__heading--camping">
                    Delivary
                  </h3>
                  <p className="inside-page__text">
                    " VSN Granites and Exportsensures complex granite shipping with early planning, robust transportation, and punctual delivery. We prioritize client satisfaction, consignment safety, and adherence to delivery timelines."
                  </p>
                  {/* <a href="#" className="inside-page__btn inside-page__btn--camping">View deals</a> */}
                </div>
              </div>
            </div>
          </section>
        </section>

      </main>

      {/* choose us----------------------------------------------------- */}

      <div className="y-choose-us">
        <h1 className='abt-title'>Why choose Us ?</h1>

        <hr className="wbc-hr-1" />
        <div className="choose">
          <div className="content-adjust">
            <p style={{ textAlign: "center", wordWrap: "break-word", padding:'0px 10px' }}>For our worldwide & national clients, we understand the importance of the correct granite, marbles. size and pattern depending on their evolving requirements. From extracting material to loading, from cleaning to cutting, from drying to polishing, and from packaging to an inspection of quality, we offer reasonable priority to all global rules and norms.</p>
          </div>
        </div>
        <div className="bar-images">
          <div className="bar-items">

            <div className="item">
              <img src="https://graniteofindia.com/wp-content/uploads/2019/07/20years.png" alt="" />
              <h4>10 YEARS OF EXPERIANCE</h4>
              {/* <p>The vast experience of more than 20 years working in the stone sector as an organization.</p> */}
            </div>
            <div className="item">
              <img src="https://graniteofindia.com/wp-content/uploads/2019/07/product-range1.png" alt="" />
              <h4>LARGE RANGE OF PRODUCTS</h4>
              {/* <p>The vast experience of more than 20 years working in the stone sector as an organization.</p> */}
            </div>
            <div className="item">
              <img src="https://graniteofindia.com/wp-content/uploads/2019/07/processing.png" alt="" />
              <h4>ADVANCED TECHNOLOGIES</h4>
              {/* <p>The vast experience of more than 20 years working in the stone sector as an organization.</p> */}
            </div>
            <div className="item">
              <img src="https://graniteofindia.com/wp-content/uploads/2019/07/marble-polishing.png" alt="" />
              <h4>PREMIEUM FINISHES</h4>
              {/* <p>The vast experience of more than 20 years working in the stone sector as an organization.</p> */}
            </div>
            <div className="item">
              <img src="https://graniteofindia.com/wp-content/uploads/2019/07/experience-in-serving.png" alt="" />
              <h4>CATER ALL</h4>
              {/* <p>The vast experience of more than 20 years working in the stone sector as an organization.</p> */}
            </div>
            <div className="item">
              <img src="https://graniteofindia.com/wp-content/uploads/2019/07/real-time-projects.png" alt="" />
              <h4>REAL TIME PROJECTS</h4>
              {/* <p>The vast experience of more than 20 years working in the stone sector as an organization.</p> */}
            </div>

          </div>
        </div>



      </div>

    </div>




  )
}

export default BussinceExcellence
