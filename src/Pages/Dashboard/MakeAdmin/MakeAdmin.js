import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';

const MakeAdmin = () => {
    const { register, handleSubmit, reset} = useForm();
    const {token}=useAuth()
    const onSubmit = data => {
       const process = window.confirm('you want to make admin?')
       if(process){
        fetch('https://intense-sea-70523.herokuapp.com/users/admin',{
            method:'PUT',
            headers:{
                'content-type':'application/json',
                'authorization':`Bearer ${token}`
            },
            body:JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.matchedCount){
                alert('succefully added')
                reset()
            }
        })
       }
    };
    return (
    <div className="container" style={{height:'65vh'}}> 
    <h3 className="mt-5 mb-3">MAKE ADMIN </h3> 
    <form onSubmit={handleSubmit(onSubmit)}>
      <input className="input-field" placeholder="write email" {...register("email")} /> <br/> <br/>
      <button className="btn btn-dark" type="submit">Make Admin</button>
    </form>
        </div>
    );
};

export default MakeAdmin;