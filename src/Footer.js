import React from 'react'
import { Link } from 'react-router-dom';
import Popicon from './Components/Popicon';
import { INSTAGRAM, LINKEDIN, TWITTER, XTWITTER } from './CommonFunctions';

const Footer = () => {
  return (
    <>
      <div className="Footer mx-2">
        <Popicon />
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-5 col-12 ft-1">
              <h3><span>VSN</span> Granites And Exports</h3>
              <p style={{ textAlign: "justify", wordWrap: "break-word" }}>We at VSN Granites and Expoters, are the manufacturers and granite exporters in Andhra Pradesh,
                India. We offer quality products in exquisite finishes and variety of colours to our clients.
                Today, we have established ourselves as one of the pioneers in the domain of granite exporters of India.
                We are one of the leading granite exporters in India with multiple export units to deliver all over India.</p>
              {/* <div className="footer-icons">
                <XTWITTER size='40' style={{ color: "white" }} />&nbsp;&nbsp;
                <INSTAGRAM size='40' style={{ color: "white" }} />&nbsp;&nbsp;
                <LINKEDIN size='40' style={{ color: "white" }} />&nbsp;&nbsp;

              </div> */}
              <div className="footer-icons">
                <i class="ri-facebook-circle-fill"></i>
                <i class="ri-instagram-fill"></i>

                <i class="ri-twitter-x-fill"></i>
                <i class="ri-youtube-fill"></i>


                <a href="https://wa.me/9160940061?text=
                Hello Vsn granites and exports" style={{ textDecoration: 'none' }}><i class="ri-whatsapp-fill"></i></a>
              </div>
              
            </div>
            <div className="col-md-6 col-lg-3 col-12 ft-2">
              <h5>Quick Links</h5>
              <ul>

                <Link to="/">
                  <li className="nav-item">

                    <a className="" href="/">Home</a>
                  </li>
                </Link>
                <Link to="/products">
                  <li className="nav-item">
                    <a className="" href="/">Our Products</a>
                  </li>
                </Link>
                <Link to="/">
                  <li className="nav-item">
                    <a className="" href="/">Gallary</a>
                  </li>

                </Link>


                <li className="nav-item">
                  <a className="" href="/">Infrastructure</a>
                </li>
                <li className="nav-item">
                  <a className="" href="/contactus">Contact Us</a>
                </li>
              </ul>
            </div>
            <div className="col-md-6 col-lg-4 col-12 ft-3">
              <h5>Contact Us</h5>
              <a href="tellto: +91 9160940061" style={{ textDecoration: "none", }}><p>+91 9160940061</p></a>

              <a href="mailto: vsngraniteadnexports@gmail.com" style={{ textDecoration: "none", }}><p>vsngraniteadnexports@gmail.com</p></a>
              <p>St.No.120/1, Kurnool Road, Yeluru -(V), Podili -(M), Prakasam dist, Andhrapradesh -523253.</p>
            </div>
          </div>
        </div>
      </div>
      <div className='Last-footer mx-2'>
        <p>CopyRights@2024</p>
      </div>
    </>
  )
}

export default Footer;