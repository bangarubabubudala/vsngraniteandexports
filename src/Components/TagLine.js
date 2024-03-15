import React from 'react';
import './TagLine.css';

const TagLine = () => {
  return (
    <div>
          <div div id="about" className='outer-page-content-container'>
          <div className="support-boxs">

          
          <div className="tagLine">
            {/* <img src={BG} alt="" /> */}
            <h1 className='Line-ct'>Our Real bussiness is not selling property, But helping our clients make the decision that best fits them.</h1>
          </div>
          </div>
          <div className="spt-boxs">
            <div className="row-box-sut">
              <div className="col-sut-box">
              <h1>10 +</h1>
              <p>Years Experience</p>
              </div>
              <div className="col-sut-box">
                <h1>95%</h1>
                <p>Customer Satisfaction Rate</p>
              </div>
              <div className="col-sut-box">
                <h1>24/7</h1>
                <p>Available</p>
              </div>
            </div>
          </div>
      </div>
  
    </div>
  )
}

export default TagLine
