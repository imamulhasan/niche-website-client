import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const TopProduct = ({topProduct}) => {
    const {name,image,description,_id,price}=topProduct
    return (
        <Col>
        <Card>
            <Card.Img variant="top" src={image}/>
            <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text className="fw-light h5">
              ${price}
            </Card.Text>
            <Card.Text>
               {description} 
            </Card.Text>
            <Link to={`/order/${_id}`}><button className="w-100 border-0 text-light bg-dark p-1">BUY NOW</button></Link>
            </Card.Body>
        </Card>
        </Col>
    );
};

export default TopProduct;