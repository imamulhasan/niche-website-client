import React from 'react';
import Footer from '../Shared/Footer/Footer';
import Nevigetion from '../Shared/Nevigetion/Nevigetion';
import NotFound from '../Shared/NotFound/NotFound';

const NotFoundPage = () => {
    return (
        <div>
            <Nevigetion/>
            <NotFound/>
            <Footer/>
        </div>
    );
};

export default NotFoundPage;