import React, { useContext, useEffect } from "react";
import { Container, Navbar } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";
import Logo from "../image/logo-3.png";
import { useAuth } from "../../context/authContext";
import {
  HeartOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons/lib/icons";
import { Badge } from "antd";
import { cartContext } from "../../context/cartContext";
import { favouriteContext } from "../../context/favouritesContext";
const Header = () => {
  const location = useLocation();

  const {
    handleLogout,
    user: { email },
  } = useAuth();

  const { getCart, cartLength } = useContext(cartContext);
  useEffect(() => {
    getCart();
  }, []);

  const { getFavourite, favouriteLength } = useContext(favouriteContext);
  useEffect(() => {
    getFavourite();
  }, []);

  return (
    <Navbar
      variant="light"
      className="d-flex justify-content-between"
      style={{
        height: "80px",
        width: "100%",
        background: "rgba(0,0,0,0.4)",
        position: "fixed",
        zIndex: "5",
      }}
    >
      <Container>
        <Link to="/">
          <img className="logo" width="80px" src={Logo} alt="" />
        </Link>
        <>
          {email === "tarieltairov1@gmail.com" ? (
            <Link
              className={
                location.pathname === "/add"
                  ? "navbar__item-active"
                  : "navbar__item"
              }
              to="/add"
            >
              ДОБАВИТЬ ТАНК
            </Link>
          ) : null}

          <Link
            className={
              location.pathname === "/tanks"
                ? "navbar__item-active"
                : "navbar__item"
            }
            to="/tanks"
          >
            ТАНКИ
          </Link>
        </>

        <div
          style={{ width: "250px" }}
          className=" d-flex justify-content-between align-items-center"
        >
          <Link to="/cart">
            <Badge count={+cartLength}>
              <ShoppingCartOutlined
                className="shop-icon"
                style={{ color: "white" }}
              />
            </Badge>
          </Link>

          <Link to="/favourites">
            <Badge count={+favouriteLength}>
              <HeartOutlined className="shop-icon" style={{ color: "white" }} />
            </Badge>
          </Link>

          {email ? (
            <Link to="/auth" style={{ textDecoration: "none" }}>
              <div
                className="div-reg  d-flex justify-content-center align-items-center"
                onClick={handleLogout}
              >
                <div className="reg">Выйти</div>
              </div>
            </Link>
          ) : null}

          {email ? null : (
            <Link to="/auth" style={{ textDecoration: "none" }}>
              <div className="div-reg  d-flex justify-content-center align-items-center">
                <div className="reg">Войти</div>
              </div>
            </Link>
          )}
        </div>
      </Container>
    </Navbar>
  );
};

export default Header;
