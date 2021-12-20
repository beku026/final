import Header from "./components/Header/Header";
import React from 'react';
import { BrowserRouter} from 'react-router-dom';
import Footer from './components/Footer/Footer'
import 'antd/dist/antd.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import TanksContextProvider from "./context/TanksContext";
import AuthContextProvider from "./context/AuthContext";
import Routing from "./Routing";
const App = () => {
  return (
    <div>
      <AuthContextProvider>
        <TanksContextProvider>
          <BrowserRouter>
            <Header />
              <Routing/>
            <Footer />
          </BrowserRouter>
        </TanksContextProvider>
      </AuthContextProvider>
    </div>
  );
};

export default App;