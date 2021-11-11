import React, { useState } from 'react';
import './dashboard.css'
import { Offcanvas, Navbar, Container, Nav } from 'react-bootstrap';
import { useRouteMatch } from 'react-router';
import { Link, Switch, Route } from 'react-router-dom';
import navlogo from '../../../images/navlogo.png'
import NotFound from '../../Shared/NotFound/NotFound';
import Footer from '../../Shared/Footer/Footer';
import AddProduct from '../AddService/AddProduct';
import ManageProducts from '../ManageProducts/ManageProducts';
import useAuth from '../../../hooks/useAuth';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import MyOrders from '../MyOrders/MyOrders';
import ManageAllOrders from '../ManageAllOrders/ManageAllOrders';
import AddReview from '../AddReview/AddReview';
import Default from '../Default/Default';




const Dashboard = () => {

    const {path, url}=useRouteMatch()
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    const {logOut,user, admin}=useAuth()
    return (
        <div>
        {/* dashboard header */}

        <Navbar sticky="top" bg="light" expand="lg">
                <Container>
                    
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                            <button className="border-0 bg-light h2 ms-5" title="Click Dashboard" onClick={handleShow}>
                            <i className="fas fa-th-list "></i>
                            </button>
                    </Nav>                    
                    <Link to="/home">
                    <img title="Go home" width="150px" src={navlogo} alt="" />
                    </Link>
                </Container>
            </Navbar>

        {/* dashboard options */}  
        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>DASHBOARD</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>

          {user.email&& <h4 style={{padding:"10px 0"}} className="text-dark"><i className="fas fa-user-circle"></i> {user.displayName}</h4>}

          <Link className="text-decoration-none text-dark" onClick={handleClose} to="/home">
               <h5 className="dashboard-btn" style={{padding:"10px 0"}}><i class="fas fa-house-user"></i> Home</h5>
              </Link>

          {!admin ?<div>
          <Link className="text-decoration-none text-dark" onClick={handleClose} to={`${url}/pay`}>
               <h5 className="dashboard-btn" style={{padding:"10px 0"}}><i className="fas fa-money-check-alt"></i> Pay</h5>
              </Link>

          <Link className="text-decoration-none text-dark"  onClick={handleClose} to={`${url}/myOrder`}>
              <h5 className="dashboard-btn" style={{padding:"10px 0"}}><i className="fas fa-shopping-cart"></i> My Order</h5>
            </Link>

          <Link className="text-decoration-none text-dark" onClick={handleClose} to={`${url}/review`}>
              <h5 className="dashboard-btn" style={{padding:"10px 0"}}><i className="fas fa-star"></i> Review</h5>
              </Link>
          </div>:

          <div>
          <Link className="text-decoration-none text-dark" onClick={handleClose} to={`${url}/addProduct`}>
              <h5 className="dashboard-btn" style={{padding:"10px 0"}}><i className="fas fa-cart-plus"></i> Add Product</h5>
              </Link>

              <Link className="text-decoration-none text-dark" onClick={handleClose} to={`${url}/manageProducts`}>
            <h5 className="dashboard-btn" style={{padding:"10px 0"}}><i className="fas fa-toolbox"></i> Manage Products</h5>
          </Link>

          <Link className="text-decoration-none text-dark " onClick={handleClose} to={`${url}/manageAllOrders`}>
              <h5 className="dashboard-btn" style={{padding:"10px 0"}}><i className="fas fa-cogs"></i> Manage All Orders</h5>
          </Link>

          <Link className="text-decoration-none text-dark" onClick={handleClose} to={`${url}/makeAdmin`}>
              <h5 className="dashboard-btn" style={{padding:"10px 0"}}><i className="fas fa-user-cog"></i> Make Admin</h5>
            </Link>
          </div>}
          
              <h5 onClick={logOut} className="dashboard-btn" style={{padding:"10px 0"}}><i className="fas fa-sign-out-alt"></i> Log Out</h5>

          </Offcanvas.Body>
        </Offcanvas>
           <div>
           <Switch>
            <Route exact  path={`${path}/`}>
                <Default/>
            </Route>
            <Route  path={`${path}/myOrder`}>
                <MyOrders/>
            </Route>
            <Route  path={`${path}/addProduct`}>
                <AddProduct/>
            </Route>
            <Route  path={`${path}/manageAllOrders`}>
                <ManageAllOrders/>
            </Route>
            <Route  path={`${path}/review`}>
                <AddReview/>
            </Route>
            <Route  path={`${path}/makeAdmin`}>
                <MakeAdmin/>
            </Route>
            <Route  path={`${path}/manageProducts`}>
                <ManageProducts/>
            </Route>
            <Route  path={`${path}/pay`}>
                <div style={{minHeight:"70vh"}}>
                <h2 className="text-center mt-5">Pay comming soon..</h2>
                </div>
            </Route>
            <Route  path={`${path}*`}>
                <NotFound/>
            </Route>
        </Switch>
            <div className="mt-5">
            <Footer/>
            </div>
           </div>
        </div>
    );
};

export default Dashboard;