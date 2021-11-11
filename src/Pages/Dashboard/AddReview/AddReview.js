import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';
import bike from '../../../images/bike.png'
import useAuth from '../../../hooks/useAuth';

const AddReview = () => {
    const {user}=useAuth()
    const { register, handleSubmit, reset} = useForm();
    const history = useHistory()
    const onSubmit = data => { 
        const procced = window.confirm('You want to add a review?')
        if(procced){
         fetch('https://intense-sea-70523.herokuapp.com/review',{
             method:'POST',
             headers:{'content-type':'application/json'},
             body:JSON.stringify(data)
         })
         .then(res=>res.json())
         .then(data=>{
             if(data.insertedId){
                history.push('/home')
                 reset()
             }
         })
        }
     };
    return (
        <div className="text-center container"  style={{minHeight:"70vh"}}>

            <h2 style={{padding:'50px 0'}}>ADD A REVIEW</h2>

        <div className="row">
            <div className="col-md-6">

                <form onSubmit={handleSubmit(onSubmit)}>
                <input  className="input-field"  {...register("name",{ required: true })} defaultValue={user?.displayName} /> <br />

                
                <input  className="input-field"  {...register("email", { required: true })} defaultValue={user.email} /> <br />

                <input type="number"  className="input-field"  {...register("rating", { min: 1, max: 5 })} 
                placeholder="Rating 1 to 5" /> <br />

                <textarea  className="input-textarea"  {...register("comments",{ required: true })}  placeholder="Comments" /> <br />

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

export default AddReview;