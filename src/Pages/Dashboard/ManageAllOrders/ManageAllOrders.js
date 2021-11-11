import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import AllOrder from '../AllOrder/AllOrder';

const ManageAllOrders = () => {
    const [manageAllOrders, setManageAllOrders]=useState([])
    const {isLoading}=useAuth()
    useEffect(()=>{
        fetch('https://intense-sea-70523.herokuapp.com/allOrders')
        .then(res=> res.json())
        .then(data=>setManageAllOrders(data))
    },[])
    return (
        <div>
            <div style={{ padding:'20px 0', minHeight:'70vh'}}>
        <h1 className="text-center pt-5">MANAGE ALL ORDERS</h1>

        {isLoading ? <div style={{height:"35vh"}} className="text-center text-primary mt-5"> <h3>loading...</h3> </div>
            : 
            <Row  xs={1} md={3} className="g-4 container mx-auto my-5">
                {
                    manageAllOrders.map(allOrder=><AllOrder
                    key={allOrder._id}
                    allOrder={allOrder}
                    manageAllOrders={manageAllOrders}
                    setManageAllOrders={setManageAllOrders}
                    ></AllOrder>)
                }
            </Row>
         } 
        </div>
        </div>
    );
};

export default ManageAllOrders;