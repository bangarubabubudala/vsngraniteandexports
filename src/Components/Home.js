import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import About from './About';
import Productsrange from '../Pages/Productsrange';
import Infraart from './Infraart';
import BussinceExcellence from './BussinceExcellence';
import ContactUs from './ContactUs';
import Testimonials from './Testimonials';
import TagLine from './TagLine';
import './Home.css'

const Home = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 2000); // Change the interval time (in milliseconds) as needed

        return () => clearInterval(interval);
    }, []); // Empty dependency array means it will only run once on mount
    const images = [
        process.env.PUBLIC_URL + '/img/img1.jpg',
        process.env.PUBLIC_URL + '/img/img22.jpeg',
        process.env.PUBLIC_URL + '/img/img3.jpg',
        process.env.PUBLIC_URL + '/img/img4.avif',
    ];

    const companyDetails = [
        {
            name: 'Products',
            description: '“Enhance home aesthetics with various finishes like mirror-polish, satin.”',
        },
        {
            name: 'Products',
            description: '“Delivering the Superior Quality of Nature"s Bounty to You”',
        },
        {
            name: 'Product',
            description: '“GIVE YOURSELF QUALITY & STYLE Designed For Life”',
        },
        {
            name: 'Product',
            description: '“LEADING GRANITE & MARBLE SUPPLIERS AND EXPORTERS”',
        },
    ];
    const currentCompany = companyDetails[currentImageIndex];

    return (
        < div id="home">
            <div className="slideshow-container" style={{ margin: "20px" }}>
                {/* <marquee class="marq" 
                 direction="left" loop=""> 
            <div class="geek1"> 
                ""WELCOME TO  VSN GRANITES AND EXPORTS""
            </div> 
        </marquee> */}
                <img
                    src={images[currentImageIndex]}
                    alt={`Slide ${currentImageIndex + 1}`}
                    className="slideshow-image"
                />
                <div className="company-details">
                    {/* <h2>{currentCompany?.name}</h2> */}
                    <p>{currentCompany?.description}</p>
                </div>
            </div>

            <About />
            <Productsrange />
            <Infraart />
            <BussinceExcellence />
            <TagLine />
            <Testimonials />
            <ContactUs />
        </div>
    )
}

export default Home
