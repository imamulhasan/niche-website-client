import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import Review from '../Review/Review';

const Reviews = () => {
    const [reviews, setReviews]=useState([])
    const {isLoading}=useAuth()
    useEffect(()=>{
        fetch('https://intense-sea-70523.herokuapp.com/reviews')
        .then(res=>res.json())
        .then(data=>setReviews(data))
    },[])

    return (
        <div style={{ padding:'20px 0'}}>
            <h1 className="text-center pt-5">USERS REVIEW</h1>

            {isLoading ? <div style={{height:"35vh"}} className="text-center text-primary mt-5"> <h3>loading...</h3> </div>
                :
                <Row  xs={1} md={3} className="g-4 container mx-auto my-5">
                    {
                        reviews.map(review=><Review
                            key = {review._id}
                            review={review}
                        ></Review>)
                    }
                </Row>
            } 
        </div>
    );
};

export default Reviews;