import React from 'react';
import { Navigate, Route, Routes } from 'react-router';
import Add from './components/Add/Add';
import Login from './components/Auth/Login';
import Details from './components/Details/Details';
import Edit from './components/Edit/Edit';
import Home from './components/Home/Home';
import TanksList from './components/TanksList/TanksList';
import { useAuth } from './context/AuthContext';

const Routing = () => {
    const {user} = useAuth()
    let routes = [
        {
          link: '/',
          element: <Home />,
          id: 1
        },
        {
          link: '/tanks',
          element: <TanksList />,
          id: 2
        },
        {
          link: 'edit/:id',
          element: <Edit />
        },
        {
          link: 'details/:id',
          element: <Details />
        },
        {
            link: '/auth',
            element: <Login/>
        }
      ]
    
      let admin = [
        {
          link: '/add',
          element: <Add />
        }
      ]
    return (
        <Routes>
        {routes.map((item) => (
          <Route path={item.link} element={item.element} />))}
        {user ? admin.map((item) => (
          <Route path={item.link} element={user.email === "tarieltairov1@gmail.com" ? item.element : <Navigate replace to="*" />} />
        )) : null}
      </Routes>
    );
};

export default Routing;