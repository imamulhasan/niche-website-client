import React from 'react';
import { Card, Col } from 'react-bootstrap';

const AllOrder = ({allOrder, manageAllOrders, setManageAllOrders}) => {
    const {email, productName, price ,_id ,status}=allOrder;

    const handleShipped = id =>{
        const process = window.confirm('Do you want to ship the product?')
        if(process){
            fetch(`https://intense-sea-70523.herokuapp.com/update/${id}`,{
                method:'PUT'
            })
            .then(res=>res.json())
            .then(data=>{
                window.location.reload(true)
            })
        
        }
    }

    const handleOrderDelete = id =>{
        const process = window.confirm('')
        if(process){
            fetch(`https://intense-sea-70523.herokuapp.com/delete/${id}`,{
            method:'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{
            if(data){
                const remaining = manageAllOrders.filter(order=> order._id !== id)
                setManageAllOrders(remaining)
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
            <div className="d-flex  justify-content-between">
            <button onClick={()=>handleOrderDelete(_id)} className=" border-0 rounded text-light bg-danger p-2"><i className="fas fa-trash-alt"></i> Delete</button>
            {status==="pending"? <button onClick={()=>handleShipped(_id)} className=" border-0 rounded text-danger bg-light fw-bold p-2">{status}</button>:
            <button className=" border-0 rounded text-success bg-light fw-bold p-2">{status}</button>
            }
            </div>
            </Card.Body>
        </Card>
        </Col>
    );
};

export default AllOrder;