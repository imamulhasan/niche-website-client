import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css'
const NotFound = () => {
    return (
       <div>
            <div className="text-center not-found mx-2">
            
            <div>
            <h1 className="notfound-number">404</h1>
            <p className="h5">Page not found :(</p>
            <p className="h5">This is not the web page you are looking for.</p>
            <Link to="/home">
            <button className=" border-0 px-5 py-2 rounded-pill  mt-4">back</button>
            </Link>
            </div>
        </div>
       </div>
    );
};

export default NotFound;