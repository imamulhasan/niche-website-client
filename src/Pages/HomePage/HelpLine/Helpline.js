import React from 'react';
import inform from '../../../images/inform.png'

const Helpline = () => {
    const handleHeplLine = () =>{
        alert('Help line comming soon.!')
    }
    return (
        <div>
        <div className="container-fluid inform-banner">
            <div className="container">
                <div className="row py-5">
                    <div className="col-lg-6 my-auto">
                        <h1 className="fw-light">Need more information?</h1>
                        <p>If you want to want more about bike, vecheles, or anything else hondas Cloud related, get in
                            touch today. Our product experts are standing by and ready to help.</p>
                        <button onClick={handleHeplLine} className="btn info-button text-light px-4 pt-2">CONTACT US</button>
                    </div>
                    <div className="col-lg-6 py-5">
                        <img className="w-100" src={inform} alt=""/>
                    </div>
                </div>

            </div>
        </div>
        </div>
    );
};

export default Helpline;