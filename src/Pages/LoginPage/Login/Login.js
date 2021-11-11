import React from 'react';
import { Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import Footer from '../../Shared/Footer/Footer';
import Nevigetion from '../../Shared/Nevigetion/Nevigetion';
import bike from '../../../images/bike.png'
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { useHistory, useLocation } from 'react-router';

const Login = () => {
    const { register, handleSubmit} = useForm();
    const {loginUser,error}=useAuth()
    const location = useLocation()
    const history = useHistory()
    const onSubmit = data =>{
        loginUser(data.email , data.password, location, history)
    }
    return (
        <div>
            <Nevigetion/>
            <Container style={{minHeight:'68vh'}}>
                <div className="row mt-5">
                <div className="col-md-6 d-block m-auto">
                
                <form className="ms-2" onSubmit={handleSubmit(onSubmit)}>
                <h3 style={{padding:'20px 0'}}>PLEASE, LOGIN</h3>
                        <input type="email"  className="input-field"  {...register("email",{ required: true })} placeholder="Email" /> <br />
                        <input type="password" className="input-field"  {...register("password",{ required: true })} placeholder="Password" /> <br />
                        <p className="text-danger">{error}</p>
                        <button  className="btn btn-outline-dark input-button my-2">LOGIN</button>
                        <p>Don't have an acount?<Link to="/register">Create an acount</Link></p>
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

export default Login;