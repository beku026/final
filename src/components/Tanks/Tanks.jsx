import {
  DeleteOutlined,
  EditOutlined,
  StarOutlined,
  MoreOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons/lib/icons";
import React, { useContext, useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/authContext";
import { TanksContext } from "../../context/TanksContext";
import { Rate } from "antd";
import "./Tanks.css";
import { cartContext } from "../../context/cartContext";
import { favouriteContext } from "../../context/favouritesContext";

const Tanks = ({ item }) => {
  const { deleteTanks } = useContext(TanksContext);

  const { addProductToCart, checkItemInCart } = useContext(cartContext);
  const [checkInCart, setCheckInCart] = useState(checkItemInCart(item.id));
  useEffect(() => {
    setCheckInCart(checkItemInCart(item.id));
  });

  const { addProductToFavourite, checkItemInFavourite } =
    useContext(favouriteContext);
  const [checkInFavourite, setCheckInFavourite] = useState(
    checkItemInFavourite(item.id)
  );
  useEffect(() => {
    setCheckInFavourite(checkItemInFavourite(item.id));
  });

  const {
    user: { email },
  } = useAuth();
  return (
    <>
      <div className="m-4 card">
        <Card className="card-inner" >
          <Card.Img variant="top" src={item.image} className="c" />
          <Card.Body>
            <Card.Title>{item.name}</Card.Title>
            <div>
              <span style={{ color: "black" }}>Тип: </span>
              <span
                style={{ fontSize: "20px", fontWeight: "bold", color: "black" }}
              >
                {item.type}
              </span>
              <br />
              <span style={{ color: "black" }}>Нация: </span>
              <span
                style={{ fontSize: "20px", fontWeight: "bold", color: "black" }}
              >
                {item.country}
              </span>
              <br />
              <span style={{ color: "black" }}>Цена: </span>
              <span
                style={{ fontSize: "20px", fontWeight: "bold", color: "red" }}
              >
                {item.price}
              </span>
              <span style={{ color: "black" }}> токенов</span>
            </div>
            <Link to={`/details/${item.id}`}>
              <MoreOutlined />
            </Link>
            {email === "tarieltairov1@gmail.com" ? (
              <DeleteOutlined
                style={{ color: "orangered" }}
                onClick={() => deleteTanks(item.id)}
                className="m-3"
              />
            ) : null}
            {email === "tarieltairov1@gmail.com" ? (
              <Link to={`/edit/${item.id}`}>
                <EditOutlined style={{ color: "orangered" }} className="m-3" />
              </Link>
            ) : null}
             

            {email ? (
              <ShoppingCartOutlined
                style={{
                  color: checkInCart ? "red" : "black",
                  fontSize: "25px",
                }}
                onClick={() => {
                  addProductToCart(item);
                  setCheckInCart(checkItemInCart(item.id));
                }}
              />
            ) : null}

            {email ? (<StarOutlined
              style={{
                color: checkInFavourite ? "red" : "black",
                fontSize: "25px",
              }}
              onClick={() => {
                addProductToFavourite(item);
                setCheckInFavourite(checkItemInFavourite(item.id));
              }}
              />):null}

            {/* <Rate /> */}
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default Tanks;
