import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Nevigetion from '../../Shared/Nevigetion/Nevigetion';
import Banner from '../Banner/Banner';
import Helpline from '../HelpLine/Helpline';
import Reviews from '../Reviews/Reviews';
import TopProducts from '../TopProducts/TopProducts';

const Home = () => {
    return (
        <div>
            <Nevigetion/>
            <Banner/>
            <TopProducts/>
            <Helpline/>
            <Reviews/>
            <Footer/>
        </div>
    );
};

export default Home;