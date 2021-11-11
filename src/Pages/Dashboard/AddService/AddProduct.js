import React from 'react';
import './AddProduct.css'
import { useForm } from 'react-hook-form';
import bike from '../../../images/bike.png'
import { useHistory } from 'react-router';

const AddProduct = () => {
    const { register, handleSubmit, reset} = useForm();
    const history = useHistory()
    const onSubmit = data => { 
        console.log(data);
        const procced = window.confirm('You want to add a product?')
        if(procced){
         fetch('https://intense-sea-70523.herokuapp.com/product',{
             method:'POST',
             headers:{'content-type':'application/json'},
             body:JSON.stringify(data)
         })
         .then(res=>res.json())
         .then(data=>{
             if(data.insertedId){
                history.push('/dashboard/manageProducts')
                 reset()
             }
         })
        }
     };
    return (
        <div className="text-center container"  style={{minHeight:"70vh"}}>

            <h2 style={{padding:'50px 0'}}>ADD A PRODUCT</h2>

        <div className="row">
            <div className="col-md-6">

                <form onSubmit={handleSubmit(onSubmit)}>
                <input  className="input-field"  {...register("name",{ required: true })} placeholder="name" /> <br />
                <textarea  className="input-textarea"  {...register("description",{ required: true })}  placeholder="Description" /> <br />
                <input type="number"  className="input-field"  {...register("price",{ required: true })} placeholder="Price" /> <br />
                <input  className="input-field"  {...register("image", { required: true })} placeholder="image url" /> <br />
                <input  className="input-button" type="submit" />
                </form>

            </div>
            <div className="col-md-6">

                <img width="100%" src={bike} alt="" />

            </div>
        </div>
        </div>
    );
};

export default AddProduct;