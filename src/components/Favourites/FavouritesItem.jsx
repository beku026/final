import React, { useContext, useEffect, useState } from "react";
import { List } from "antd";
import { favouriteContext } from "../../context/favouritesContext";
import { Button } from "react-bootstrap";
import { cartContext } from "../../context/cartContext";
import "./Fav.css"
const FavouritesItem = ({ item }) => {
  const { addProductToCart, checkItemInCart } = useContext(cartContext);
  const [checkInCart, setCheckInCart] = useState(checkItemInCart(item.id));
  useEffect(() => {
    setCheckInCart(checkItemInCart(item.item.id));
  });

  const { deleteFromFavourite } = useContext(favouriteContext);
  return (
    <div>
      <List.Item
        key={item.id}
        extra={<img width={272} alt="img" src={item.item.image} />}
      >
        <List.Item.Meta
          title={
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: "30px",
              }}
            >
              <div>
                <h3>{item.item.name}</h3>
                <h4>{item.item.type}</h4>
                <h5>{item.item.country}</h5>
              </div>
              <h3>{"$" + item.item.price}</h3>
            </div>
          }
          description={
            <>
              <div className="desk">{item.item.description}</div>
              <div
                className="d-flex justify-content-between"
                style={{
                  width: "40%",
                  marginTop: "40px",
                  display: "flex",
                  flexWrap: "wrap",
                }}
              >
                <Button
                  className="m-1"
                  variant="danger"
                  onClick={() => deleteFromFavourite(item.item.id)}
                >
                  Удалить с избранных
                </Button>

                <Button
                  className="m-1"
                  variant={checkInCart ? "outline-warning" : "outline-danger"}
                  onClick={() => {
                    addProductToCart(item.item);
                    setCheckInCart(checkItemInCart(item.item.id));
                  }}
                >
                  {checkInCart ? `Удалить с корзины` : `Добавить в корзину`}
                </Button>
              </div>
            </>
          }
        />
        <hr />
      </List.Item>
    </div>
  );
};

export default FavouritesItem;
