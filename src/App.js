import './App.css';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Home from './Pages/HomePage/Home/Home';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import NotFoundPage from './Pages/NotFoundPage/NotFoundPage';
import ExploreProducts from './Pages/ExploreProductsPage/ExploreProducts/ExploreProducts';
import Login from './Pages/LoginPage/Login/Login';
import Register from './Pages/LoginPage/Register/Register';
import AuthProvider from './Pages/AuthProvider/AuthProvider';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import Order from './Pages/Order/Order';

function App() {
  return (
    <>
     <AuthProvider>
     <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/home">
          <Home/>
        </Route>
        <PrivateRoute path="/dashboard">
          <Dashboard/>
        </PrivateRoute>
        <Route path="/exploreProducts">
          <ExploreProducts/>
        </Route>
        <Route path="/login">
          <Login/>
        </Route>
        <Route path="/register">
          <Register/>
        </Route>
        <PrivateRoute path="/order/:id">
          <Order/>
        </PrivateRoute>
        <Route>
          <NotFoundPage/>
        </Route>
      </Switch>
      </BrowserRouter>
     </AuthProvider>
    </>
  );
}

export default App;
