import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import TopProduct from '../TopProduct/TopProduct';

const TopProducts = () => {
    const [products, setProducts]=useState([])
    const {isLoading}=useAuth()
    useEffect(()=>{
        fetch('https://intense-sea-70523.herokuapp.com/products')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    const topProducts =products.slice(0,6)
    return (
        <div style={{ padding:'20px 0'}}>
            <h1 className="text-center pt-5">TOP RATED BIKES</h1>

            {isLoading ? <div style={{height:"35vh"}} className="text-center text-primary mt-5"> <h3>loading...</h3> </div>
                :
                <Row  xs={1} md={3} className="g-4 container mx-auto my-5">
                    {
                        topProducts.map(topProduct=><TopProduct
                        key={topProduct._id}
                        topProduct={topProduct}
                        ></TopProduct>)
                    }
                </Row>
            } 
        </div>
    );
};

export default TopProducts;