import React from 'react';
import './BikeOverView.css'
import hondaBike from '../../../images/honda-1.jpg';


const BikeOverView = () => {
    const handlebikeOverview = () =>{
        alert('This bike is not available! please choise anather bike and buy thats bike!')
    }
    return (
        <div>
             <section className="container">
            <h1 className="text-center fw-bolder number-1-bike-title">World Number <span>One</span></h1>
            <div className="row shadow-lg pb-5 pt-3 px-3 rounded-3">
                <div className="col-lg-6 d-block m-auto">
                    <h4 className="text-uppercase">Global-GXS</h4>
                    <p>Our bike is one of the best bikes in the world. The equipment of this bike is of
                        high quality. It travels at a speed of 1000 kilometers per hour.</p>
                   <button onClick={handlebikeOverview} className="btn text-light px-4 top-bike-button pt-2">BYE NOW</button>
                </div>
                <div className="col-lg-6">
                   <img width="100%" src={hondaBike} alt="" />
                </div>
            </div>
        </section>
        </div>
    );
};

export default BikeOverView;