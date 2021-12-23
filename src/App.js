import Header from "./components/Header/Header";
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Footer from './components/Footer/Footer'
import 'antd/dist/antd.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import TanksContextProvider from "./context/TanksContext";
import AuthContextProvider from "./context/AuthContext";
import Routing from "./Routing";
import CommentContextProvider from "./context/commentsContext";
import CartContextProvider from "./context/cartContext";
import FavouriteContextProvider from "./context/favouritesContext";
const App = () => {
  return (
    <div>
      <AuthContextProvider>
        <TanksContextProvider>
          <CommentContextProvider>
            <CartContextProvider>
              <FavouriteContextProvider>
                <BrowserRouter>
                  <Header />
                  <Routing />
                  <Footer />
                </BrowserRouter>
              </FavouriteContextProvider>
            </CartContextProvider>
          </CommentContextProvider>
        </TanksContextProvider>
      </AuthContextProvider>
    </div>
  );
};

export default App;