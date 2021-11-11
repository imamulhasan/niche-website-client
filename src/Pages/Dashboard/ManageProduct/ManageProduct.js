import React from 'react';
import { Card, Col } from 'react-bootstrap';


const ManageProduct = ({manageProduct, manageProducts,setManageProducts}) => {
    const {name,description,_id,price}=manageProduct;
    

    const handleDeleteProduct = (id) =>{
        const process = window.confirm('Are you want to delete products?')
        if(process){
            const url = `https://intense-sea-70523.herokuapp.com/product/${id}`
        fetch(url,{
            method:'DELETE'            
        })
        .then(res=>res.json())
        .then(data=>{
            if(data){
                alert('Delted Successfully')
                const remaining =manageProducts.filter(td => td._id !==id)
                setManageProducts(remaining)
            }
        })
        }
    }
    return (
        <Col>
        <Card>
            <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text className="fw-light h5">
              ${price}
            </Card.Text>
            <Card.Text>
               {description} 
            </Card.Text>
            <button style={{backgroundColor:'#CD6155'}} onClick={()=>handleDeleteProduct(_id)} className="w-100 border-0 text-light p-1">
            <i className="fas fa-trash-alt"></i> DELETE PRODUCT</button>
            </Card.Body>
        </Card>
        </Col>
    );
};

export default ManageProduct;