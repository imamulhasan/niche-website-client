import React, { useState,useEffect } from 'react';
import { Row } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import ManageProduct from '../ManageProduct/ManageProduct';

const ManageProducts = () => {
    const [manageProducts, setManageProducts]=useState([])
    const {isLoading}=useAuth()
    useEffect(()=>{
        fetch('https://intense-sea-70523.herokuapp.com/products')
        .then(res=>res.json())
        .then(data=>setManageProducts(data))
    },[])
    
    return (
        <div className="container" style={{ padding:'20px 0', minHeight:'70vh'}}>
        <h1 className="text-center pt-5">MANAGE PRODUCTS</h1>

        {isLoading ? <div style={{height:"35vh"}} className="text-center text-primary mt-5"> <h3>loading...</h3> </div>
            :
            <Row  xs={1} md={3} className="g-4 container mx-auto my-5">
                {
                    manageProducts.map(manageProduct=><ManageProduct
                    key={manageProduct._id}
                    manageProduct={manageProduct}
                    manageProducts={manageProducts}
                    setManageProducts={setManageProducts}
                    ></ManageProduct>)
                }
            </Row>
        } 
        </div>
    );
};

export default ManageProducts;