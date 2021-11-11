import React from 'react';
import { Card, Col } from 'react-bootstrap';
import Rating from 'react-rating'

const Review = ({review}) => {
    const {name, email, rating,comments}= review
    return (
        <Col>
        <Card>
            <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text className="fw-light h5">
              {email}
            </Card.Text>
            <Card.Text>
               {comments} 
            </Card.Text>
            <Card.Text>
                  <Rating
                  fullSymbol="fas fa-star text-warning"
                  emptySymbol="far fa-star text-warning"
                  initialRating={rating}
                  readonly
                  />
            </Card.Text>
            </Card.Body>
        </Card>
        </Col>
    );
};

export default Review;