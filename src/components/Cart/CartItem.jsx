import React, { useContext } from "react";
import { List } from "antd";
import { cartContext } from "../../context/cartContext";
import { Button } from "react-bootstrap";

const CartItem = ({ item }) => {
  const { deleteFromCart, changeProductCount } = useContext(cartContext);
  return (
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
            <div>{item.item.description}</div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
                marginTop: "20px",
              }}
            >
              <div>
                <h4>Количество</h4>
                <Button
                  className="m-1"
                  variant="outline-primary"
                  onClick={() =>
                    changeProductCount(item.count - 1, item.item.id)
                  }
                >
                  -
                </Button>
                <input
                  style={{ width: "40px", height: "35px" }}
                  value={item.count}
                  disabled
                />
                <Button
                  variant="outline-warning"
                  onClick={() =>
                    changeProductCount(item.count + 1, item.item.id)
                  }
                >
                  +
                </Button>
              </div>
              <div>
                <h4>СубЦена</h4>
                <h3>{item.subPrice + " $"}</h3>
              </div>
            </div>
            <Button
              variant="danger"
              onClick={() => deleteFromCart(item.item.id)}
            >
              Удалить с корзины
            </Button>
          </>
        }
      />
    </List.Item>
  );
};

export default CartItem;
