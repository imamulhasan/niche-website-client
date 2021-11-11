import React from 'react';
import { Card, Col } from 'react-bootstrap';

const MyOrder = ({myOrder, myOrders ,setMyOrders}) => {
    const {productName, email, price, status,_id}= myOrder
    
            const handleOrderDelete = id =>{
                const process = window.confirm('')
                if(process){
                    fetch(`https://intense-sea-70523.herokuapp.com/delete/${id}`,{
                    method:'DELETE'
                })
                .then(res=>res.json())
                .then(data=>{
                    if(data){
                        const remaining = myOrders.filter(order=> order._id !== id)
                        setMyOrders(remaining)
                    }
                })
                }
            }
    return (
        <Col>
        <Card>
            <Card.Body>
            <Card.Title>{productName}</Card.Title>
            <Card.Text className="fw-light h5">
              {email}
            </Card.Text>
            <Card.Text>
               ${price}
            </Card.Text>
            {status==="pending"? <div className="d-flex  justify-content-between">
            <button onClick={()=>handleOrderDelete(_id)}  className=" border-0 rounded text-light bg-danger p-2"><i className="fas fa-trash-alt"></i> Delete</button>
            <button className=" border-0 rounded text-danger bg-light fw-bold p-2">{status}</button>
            </div>:
            <div className="d-flex  justify-content-between">
            <button className=" border-0 rounded text-light bg-success p-2"><i class="fas fa-check-circle"></i> Confirmed</button>
            <button className=" border-0 rounded text-success bg-light fw-bold p-2">{status}</button>
            </div>}
            </Card.Body>
        </Card>
        </Col>
    );
};

export default MyOrder;