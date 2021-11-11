import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../hooks/useAuth';


const PrivateRoute = ({children, ...rest}) => {
  const {user,isLoading} = useAuth()

  if(isLoading){
    return  <div style={{height:"77vh"}} className="d-flex justify-content-center py-5">
                 <h3>Loading...</h3>
             </div>
 }

    return (
        <Route {...rest}
        render={({location})=>
        user?.email? children :
        <Redirect to={{
            pathname:'/login',
            state:{from:location}
        }}>

        </Redirect>
        }
        >
            
        </Route>
    );
};

export default PrivateRoute;