import React from 'react';
import './Default.css'
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import dashbourdCarousel from '../../../images/dashboard.jpg'

import BikeOverView from '../BikeOverview/BikeOverView';




const Default = () => {
    return (
    <div>
        <Carousel className="mb-5" fade>
        <Carousel.Item>
                <Link to="/exploreProducts">
                <img 
                className="d-block w-100 carousel-image"
                src={dashbourdCarousel}
                alt=""
                />
                </Link>
        </Carousel.Item>
        </Carousel>
        <BikeOverView></BikeOverView>
       </div>
    );
};

export default Default;