import React from "react";
import { Container, Navbar, Button } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";
import Logo from "../image/logo-3.png";
import { useAuth } from "../../context/AuthContext";
import { ShoppingCartOutlined } from "@ant-design/icons/lib/icons";
const Header = () => {
  const location = useLocation();

  const {
    handleLogout,
    user: { email },
  } = useAuth();

  // const nav_items = [
  //   {
  //     title: "TАНКИ",
  //     link: "/tanks",
  //     id: 2,
  //   },
  //   {
  //     title: "ДОБАВИТЬ ТАНК",
  //     link: "/add",
  //     id: 3,
  //   },
  // ];
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
          style={{ width: "200px" }}
          className=" d-flex justify-content-between align-items-center"
        >
          <ShoppingCartOutlined className="shop-icon" style={{color: "white"}}/>
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
