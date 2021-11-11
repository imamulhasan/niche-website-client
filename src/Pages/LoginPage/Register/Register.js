import React from 'react';
import { Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import Footer from '../../Shared/Footer/Footer';
import Nevigetion from '../../Shared/Nevigetion/Nevigetion';
import bike from '../../../images/bike.png'
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { useHistory, useLocation } from "react-router";

const Register = () => {
    const {registerUser,error}=useAuth()
    const { register, handleSubmit} = useForm();
    const location = useLocation()
    const history = useHistory()
    const onSubmit = data =>{
        registerUser(data.email , data.password, data.name, location , history);
        
        const user = {email:data.email , displayName:data.name};
        fetch('https://intense-sea-70523.herokuapp.com/users',{
            method:'POST',
             headers:{'content-type':'application/json'},
             body:JSON.stringify(user)
        })

    }
    return (
        <div>
            <Nevigetion/>
            <Container style={{minHeight:'68vh'}}>
                <div className="row mt-5">
                <div className="col-md-6 d-block m-auto"> 
                <form onSubmit={handleSubmit(onSubmit)}>
                <h3 style={{padding:'20px 0'}}>PLEASE, REGISTER</h3>
                        <input type="text"  className="input-field"  {...register("name",{ required: true })} placeholder="User name" /> <br />
                        <input type="email"  className="input-field"  {...register("email",{ required: true })} placeholder="Email" /> <br />
                        <input type="password" className="input-field"  {...register("password",{ required: true })} placeholder="Password" /> <br />
                        <p className="text-danger">{error}</p>
                        <button  className="btn btn-outline-dark  my-2 input-button">REGISTER</button>
                        <p>Already have an acount?<Link to="/login">Login</Link></p>
                        </form>
                </div>
                <div className="col-md-6">

                <img width="100%" src={bike} alt="" />

                </div>
                </div>
            </Container>
            <Footer/>
        </div>
    );
};

export default Register;