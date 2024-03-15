import React, { useEffect, useState } from 'react'
import './Testimonials.css'
import { LEFTARROW, QUOTELEFT, QUOTERIGHT, RIGHTARROW, USERICON } from '../CommonFunctions';
import man from '../assets/man.png'
import { Button, Col, Row } from 'react-bootstrap';

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [slideshowInterval, setSlideshowInterval] = useState(null);


    const reviews = [
        {
            name: "Prasad Reddy", value: `
        VSN Granites and Exports has been my go-to supplier for high-quality granite 
        on several international construction projects.Their stones are consistently 
        beautiful, with a wide variety of colors and patterns to choose from.
        They were also very accommodating when it came to custom cutting and finishing
        the granite to our exact specifications.The entire export process was smooth, 
        and the stones arrived on-site safely and securely.I wouldn't hesitate to recommend 
        VSN to anyone looking for top-notch granite for their next project.` },
        {
            name: "Tara Bhai", value: `
        I've been working with VSN Granites and Exports for a
        few years now on smaller residential projects. Their granite selection is impressive, and
        their prices are very competitive. The quality of the stone is generally good, though I
        have occasionally encountered a minor imperfection. However, VSN's customer service is excellent,
        and they've always been quick to address any concerns I've had. Overall, I'm a satisfied customer
        and would recommend them to others, especially those looking for good value.👍.` },
        {
            name: "Ashok", value: `
        VSN Granites and Exports strikes the perfect balance between value and customization.
        Their competitive pricing allows for beautiful granite countertops without breaking the bank.
        I especially appreciated their willingness to work with me to achieve the exact finish I desired.
        The granite I received is high quality, adding a touch of luxury to my recent home renovation.
        VSN's customer service is attentive and responsive, ensuring a smooth and satisfying experience.` },
        {
            name: "Krishna Mohan", value: `
        While a minor imperfection was initially present in the first granite slab
        I chose from VSN Granites and Exports,  they were incredibly transparent throughout
        the selection process.  Their customer service team went above and beyond to ensure
        my satisfaction. They promptly provided a replacement slab, and upon careful inspection,
        it was perfect. VSN's dedication to customer satisfaction and their commitment to
        resolving any concerns quickly make them a reliable and trustworthy source for
        beautiful granite.` },
    ];



    const handleBubbleClick = (index) => {
        setCurrentIndex(index);
        resetSlideshowTimer();
    };

    const handlePrevClick = () => {
        const newIndex = (currentIndex - 1 + reviews.length) % reviews.length;
        setCurrentIndex(newIndex);
        resetSlideshowTimer();
    };

    const handleNextClick = () => {
        const newIndex = (currentIndex + 1) % reviews.length;
        setCurrentIndex(newIndex);
        resetSlideshowTimer();
    };

    const resetSlideshowTimer = () => {
        clearInterval(slideshowInterval);
        startSlideshow();
    };

    const startSlideshow = () => {
        const totalDuration = 160000; // Total duration for displaying all slides (in milliseconds)
        const intervalDuration = totalDuration / reviews.length;
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
        }, intervalDuration);
        setSlideshowInterval(interval);
    };

    useEffect(() => {
        startSlideshow();
        return () => {
            clearInterval(slideshowInterval);
        };
    }, []);


    return (
        <div id="service" className='outer-page-content-container'>
            <h2 className='Testimonial-title'>Happy client Works</h2>
            <div className='arrowline'>
                <div className='under-line'>

                </div> <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="rgba(61,210,218,1)"><path fill="none" d="M0 0h24v24H0z"></path><path d="M12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2ZM12 11H8V13H12V16L16 12L12 8V11Z"></path></svg></span>

            </div>
            <div className="slideshow-container">
                <div className="text-end pe-5">
                    <Button onClick={handlePrevClick} variant='outline-success'>
                        <LEFTARROW />
                    </Button> &nbsp;&nbsp;&nbsp;&nbsp;
                    <Button onClick={handleNextClick} variant='outline-success'>
                        <RIGHTARROW />
                    </Button>
                </div>
                <Row >
                    <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12} style={{ textAlign: "center" }}>
                        <img style={{ width: "100px" }} src={man} alt='usericon' />
                    </Col>
                </Row>
                {reviews.map((item, index) => (
                    <div
                        key={index}
                        className={`slide ${index === currentIndex ? 'active' : ''}`}
                    >
                        <Row >
                            <Col xs={4} sm={4} md={4} lg={4} xl={4} xxl={4} className='text-end mt-2 px-5'>
                                <span className='text-start'><QUOTELEFT /></span>
                            </Col>
                            <Col xs={4} sm={4} md={4} lg={4} xl={4} xxl={4} style={{ textAlign: "center" }}>
                                <p style={{ textAlign: "center", margin: "20px" }}>{item?.name}</p>
                            </Col>
                            <Col xs={4} sm={4} md={4} lg={4} xl={4} xxl={4} className='text-start mt-2 px-5'>
                                <span className='text-end'><QUOTERIGHT /></span>
                            </Col>
                        </Row>
                        <div className="testimonial">
                            <p>{item?.value}</p>

                        </div>

                        
                    </div>
                ))}
            </div>
            <div className="bubbles-container">
                {reviews.map((_, index) => (
                    <div
                        key={index}
                        className={`bubble ${index === currentIndex ? 'active' : ''}`}
                        onClick={() => handleBubbleClick(index)}
                    />
                ))}
            </div>
        </div>
    )
}

export default Testimonials
