import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/authContext";
import { cartContext } from "../../context/cartContext";
import { Button } from "react-bootstrap";
import "./Invoic.css";
import Logo from "../image/logo-3.png";

const Invoic = () => {
  const [user, setUser] = useState(null);
  const {
    user: { email },
  } = useAuth();

  const { cart } = useContext(cartContext);
  useEffect(() => {
    getCart(user);
  }, []);

  function getCart(user) {
    let cart = JSON.parse(localStorage.getItem("Cartinfo"));
    user = cart;
    setUser(user);
    console.log(cart);
  }

  function deleteFromCart() {
    JSON.parse(localStorage.getItem("Cartinfo"));
    let cart2 = {};
    localStorage.setItem("Cartinfo", JSON.stringify(cart2));

    localStorage.removeItem("cart");
  }

  return (
    <div
      style={{
        paddingTop: "150px",
        paddingBottom: "100px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundImage:
          "url(https://media.wotblitz.com/media/filer_public/26/4f/264fafcf-d60b-4e20-b831-dd382a698697/gold-preview.jpg)",
          backgroundSize: 'cover',
          backgroundAttachment: 'fixed'
      }}
    >
      <div className="check">
        <div className="check_inner">
          <img width="100px" src={Logo} alt="logo" />
          <div>
            <span className="check-words">User's email : </span>
            <span style={{ color: "black" }}>{email}</span>
          </div>
          <div>
            <span className="check-words">Username : </span>
            <span style={{ color: "black" }}>{user?.username}</span>
          </div>
          <div>
            <span className="check-words">City : </span>
            <span style={{ color: "black" }}>{user?.provinсe}</span>
          </div>
          <div>
            <span className="check-words">Street : </span>
            <span style={{ color: "black" }}>{user?.street}</span>
          </div>
          <div>
            <span className="check-words">Email : </span>
            <span style={{ color: "black" }}>{user?.email}</span>
          </div>
          <div className="ch">
            <div>
              <span className="check-words">Name of product </span>
              {cart?.products?.map((product) => {
                return <li>{product.item.name}</li>;
              })}
            </div>
            <div>
              <span className="check-words">Price </span>
              {cart?.products?.map((product) => {
                return <li>{product.item.price} $</li>;
              })}
            </div>
            <div>
              <span className="check-words">Count </span>
              {cart?.products?.map((product) => {
                return <li>{product.count}</li>;
              })}
            </div>
            <div>
              <span className="check-words">Sum </span>
              {cart?.products?.map((product) => {
                return <li>{product.subPrice + "  $"}</li>;
              })}
            </div>
          </div>
          <div className="total">
            <h3 className="check-words">TOTAL :</h3>
            <strong>{cart?.totalPrice + "  $"}</strong>
          </div>
          <h1 className="thanks" style={{ color: "red" }}>
            <i> Thanks for shopping!</i>
          </h1>
        </div>
      </div>
      <Link to="/">
        <Button
          variant="warning"
          style={{
            marginTop: "100px",
            color: 'white',
          }}
          onClick={() => deleteFromCart()}
        >
          GO HOME
        </Button>
      </Link>
    </div>
  );
};

export default Invoic;
