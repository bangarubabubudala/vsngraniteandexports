import React from 'react'
import { Container } from 'react-bootstrap';

import img1 from '../assets/img_1.jpg';
import './Gallarypics.css'



const Products = () => {
    return (

        <div id="products" className='outer-page-content-container'>


            <h2 className='abt-title'>Our Gallary</h2>
            <div className="gallery">
                <div className="image-container">
                    <img src={img1}/>
                </div>
                <div className="image-container">
                    <img src="2.jpg"/>
                </div>
                <div className="image-container tall">
                    <img src="3.jpg"/>
                </div>
                <div className="image-container">
                    <img src="4.jpg"/>
                </div>
                <div className="image-container">
                    <img src="5.jpg"/>
                </div>
                <div className="image-container tall">
                    <img src="6.jpg"/>
                </div>
                <div className="image-container">
                    <img src="7.jpg"/>
                </div>
                <div className="image-container">
                    <img src="8.jpg"/>
                </div>
                <div className="image-container">
                    <img src="9.jpg"/>
                </div>
                <div className="image-container">
                    <img src="10.jpg"/>
                </div>
                <div className="image-container tall">
                    <img src="11.jpg"/>
                </div>
                <div className="image-container tall">
                    <img src="12.jpg"/>
                </div>
                <div className="image-container">
                    <img src="13.jpg"/>
                </div>
                <div className="image-container">
                    <img src="14.jpg"/>
                </div>
                <div className="image-container tall">
                    <img src="15.jpg"/>
                </div>
                <div className="image-container tall">
                    <img src="16.jpg"/>
                </div>
                <div className="grid-item">
                    <img src="17.jpg"/>
                </div>
                <div className="image-container tall">
                    <img src="18.jpg"/>
                </div>
                <div className="image-container tall">
                    <img src="19.jpg"/>
                </div>
                <div className="image-container tall">
                    <img src="20.jpg"/>
                </div>
                <div className="image-container">
                    <img src="21.jpg"/>
                </div>
                <div className="image-container tall">
                    <img src="22.jpg"/>
                </div>
                <div className="image-container">
                    <img src="23.jpg"/>
                </div>
                <div className="image-container">
                    <img src="24.jpg"/>
                </div>
                <div className="image-container">
                    <img src="25.jpg"/>
                </div>
            </div>

            






        </div>

    )
}

export default Products