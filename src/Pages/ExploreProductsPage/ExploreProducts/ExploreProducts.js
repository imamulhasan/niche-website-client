import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import Footer from '../../Shared/Footer/Footer';
import Nevigetion from '../../Shared/Nevigetion/Nevigetion';
import ExploreProduct from '../ExploreProduct.js/ExploreProduct';

const ExploreProducts = () => {
    const [exploreProducts, setExploreProducts]=useState([])
    const {isLoading}=useAuth()
    useEffect(()=>{
        fetch('https://intense-sea-70523.herokuapp.com/products')
        .then(res=>res.json())
        .then(data=>setExploreProducts(data))
    },[])
    
    return (
        <div>
            <Nevigetion/>
            <div style={{ padding:'20px 0', minHeight:'70vh'}}>
        <h1 className="text-center pt-5">EXPLORE BIKES</h1>

        {isLoading ? <div style={{height:"35vh"}} className="text-center text-primary mt-5"> <h3>loading...</h3> </div>
            :
            <Row  xs={1} md={3} className="g-4 container mx-auto my-5">
                {
                    exploreProducts.map(exploreProduct=><ExploreProduct
                    key={exploreProduct._id}
                    exploreProduct={exploreProduct}
                    ></ExploreProduct>)
                }
            </Row>
         } 
        </div>
            <Footer/>
        </div>
    );
};

export default ExploreProducts;