import React from 'react';
import { Container, Form, FormControl, Nav, Navbar ,Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import navlogo from '../../../images/navlogo.png'

const Nevigetion = () => {
    const {user,logOut}=useAuth()
    return (
        <div>
            <Navbar sticky="top" bg="light" expand="lg">
                <Container>
                    <Navbar.Brand>
                    <img width="150px" src={navlogo} alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        
                        
                        <Link className="text-decoration-none text-center nav-link ms-3 fw-bold " to="/home">Home</Link>
                        
                        {user?.email&&<Link className="text-decoration-none text-center nav-link ms-3 fw-bold " to="/dashboard">Dashboard</Link>}
                        
                        {user?.email?<button onClick={logOut} className=" border-0 bg-light text-secondary ms-3 fw-bold">Sing Out</button>:
                        <Link to="/login" className="text-decoration-none nav-link ms-3 fw-bold">Login</Link>}
                        
                    </Nav>
                    <Form className="d-flex">
                        <FormControl
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                        />
                        <Button variant="outline-dark">Search</Button>
                    </Form>
                    {user?.email&& <p className="h5 ms-3 text-secondary mt-2 text-center"><i className="fas fa-user-circle"></i> {user?.displayName}</p>}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Nevigetion;