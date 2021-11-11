import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import MyOrder from '../MyOrder/MyOrder';


const MyOrders = () => {
    const [myOrders, setMyOrders]=useState([])
    const {user,isLoading}=useAuth()

    useEffect(()=>{
        fetch(`https://intense-sea-70523.herokuapp.com/orders/${user?.email}`)
        .then(res=> res.json())
        .then(data=>setMyOrders(data))
    },[user?.email])
    return (
        <div>
            <div style={{ padding:'20px 0', minHeight:'70vh', }}>
        <h1 className="text-center pt-5">MY ORDERS</h1>

        {isLoading ? <div style={{height:"35vh"}} className="text-center text-primary mt-5"> <h3>loading...</h3> </div>
            : 
            <Row  xs={1} md={3} className="g-4 container mx-auto my-5">
                {
                    myOrders.map(myOrder=><MyOrder
                    key={myOrder._id}
                    myOrder={myOrder}
                    myOrders={myOrders}
                    setMyOrders={setMyOrders}
                    ></MyOrder>)
                }
            </Row>
         } 
        </div>
        </div>
    );
};

export default MyOrders;