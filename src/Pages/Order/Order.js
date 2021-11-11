import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router';
import Footer from '../Shared/Footer/Footer';
import Nevigetion from '../Shared/Nevigetion/Nevigetion';
import bike from '../../images/bike.png'
import useAuth from '../../hooks/useAuth';

const Order = () => {
    const { register, handleSubmit, reset} = useForm();
    const [products, setProducts]=useState([])
    const history = useHistory()
    const {id}=useParams()
    const {user}=useAuth()

    // get orders product 
    useEffect(()=>{
        fetch('https://intense-sea-70523.herokuapp.com/products')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])

    const singleProduct = products.filter(product=>product._id === id)

    const onSubmit = data => { 
        data.productName = singleProduct[0]?.name;
        data.price = singleProduct[0]?.price;
        data.status = 'pending'

        const process = window.confirm('Yout want to buy this porduct?')
        if(process){
            fetch('https://intense-sea-70523.herokuapp.com/order',{
            method:'POST',
             headers:{'content-type':'application/json'},
             body:JSON.stringify(data)
        })
        .then(res=>res.json())
         .then(data=>{
             if(data.insertedId){
                alert('order successfully')
                history.push('/dashboard/myOrder')
                 reset()
                
             }
         })
        }
       
     };
    return (
        <div>
            <Nevigetion/>
            <div className="text-center container"  style={{minHeight:"70vh"}}>

            <h2 style={{padding:'50px 0'}}>BUY BIKE</h2>

        <div className="row">
            <div className="col-md-6">
            <img width="100%" src={bike} alt="" />

            </div>
            <div className="col-md-6">

                <form onSubmit={handleSubmit(onSubmit)}>
                <input  className="input-field"  {...register("name",{ required: true })} defaultValue={user?.displayName}/> <br />
                <input  className="input-field"  {...register("email",{ required: true })}  defaultValue={user?.email} /> <br />
                <input  className="input-field"  {...register("address",{ required: true })} placeholder="address" /> <br />
                <input  className="input-field"  {...register("phone", { required: true })} placeholder="Phone Number" /> <br />
                <input  className="input-field"  {...register("date", { required: true })} defaultValue={new Date().toDateString()} /> <br />
                <input  className="input-button" type="submit" value="ORDER NOW" />
                </form>

            </div>
            
        </div>
        </div>
           
        <div className="mt-5">
        <Footer />
        </div>
            
        </div>
    );
};

export default Order;