import React from 'react';
import './Banner.css'
import { Carousel } from 'react-bootstrap';
import carouselOne from '../../../images/carousel-1.jpg';
import carouselTwo from '../../../images/carousel-2.jpg';
import carouselThree from '../../../images/carousel-3.jpg';
import { Link } from 'react-router-dom';
const Banner = () => {
    return (
        <Carousel fade>
            <Carousel.Item>
                <img 
                className="d-block w-100 carousel-image"
                src={carouselOne}
                alt="First slide"
                />
                <Carousel.Caption>
                <Link to="/exploreProducts"><button style={{fontSize:'20px', fontFamily:'sans-serif'}} className="btn text-light border px-5" >Explore Now!</button></Link>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100 carousel-image"
                src={carouselTwo}
                alt="Second slide"
                />
                <Carousel.Caption>
                <Link to="/exploreProducts"><button style={{fontSize:'20px', fontFamily:'sans-serif'}} className="btn text-light border px-5 " >Explore Now!</button></Link>
                </Carousel.Caption>
                
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100 carousel-image"
                src={carouselThree}
                alt="Third slide"
                />
                <Carousel.Caption>
                <Link to="/exploreProducts"><button style={{fontSize:'20px', fontFamily:'sans-serif'}} className="btn text-light border px-5" >Explore Now!</button></Link>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;