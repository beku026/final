import React from 'react';
import { Navigate, Route, Routes } from 'react-router';
import Add from './components/Add/Add';
import Login from './components/Auth/Login';
import Cart from './components/Cart/Cart';
import Details from './components/Details/Details';
import Edit from './components/Edit/Edit';
import Favourites from './components/Favourites/Favourites';
import Home from './components/Home/Home';
import TanksList from './components/TanksList/TanksList';
import { useAuth } from './context/authContext';
import Pay from "./components/Pay/Pay";
import Invoic from './components/Invoic/Invoic';

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
          element: <Edit />,
          id:3
        },
        {
          link: 'details/:id',
          element: <Details />,
          id: 4
        },
        {
            link: '/auth',
            element: <Login/>,
            id: 5
        },
        {
          link: "/cart",
          element: <Cart />,
          id: 6,
        },
        {
          link: "/favourites",
          element: <Favourites />,
          id: 7,
        },
        {
          link: "/pay",
          element: <Pay />,
          id: 8,
        },
        {
          link: "/invoic",
          element: <Invoic />,
          id: 9,
        },
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