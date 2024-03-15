import React from 'react'
import Facebook from '../Homepics/facebook.png';
import Instagram from '../Homepics/instagram.png';
import Youtube from '../Homepics/youtube.png'
import Whatsapp from '../Homepics/whatsapp.png'

export default function Connectwus() {
  return (
    <div>
          <div id="service" className='outer-page-content-container'>
          <div className="connectw-us">
          <div className="con-w-layout">
                <h1>Connect with Us</h1>
                <div className="icons-con-w">
                        <img src={Facebook} alt="#" />
                          <img src={Instagram} alt="#" />
                          <img src={Youtube} alt="#" />
              <a href="https://wa.me/9160940061?text=
                Hello Vsn granites and exports"><img src={Whatsapp} alt="#" /></a>
                    
                </div>
          </div>

          </div>


          </div>
          
    </div>
  )
}
