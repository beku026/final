import React, { useContext, useEffect, useState } from "react";
import { cartContext } from "../../context/cartContext";
import { Modal, List } from "antd";
import "antd/dist/antd.css";
import CartItem from "./CartItem";
import { Form, Input, Tooltip, Space, Typography } from "antd";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const Cart = () => {
  const [newUser, setNewUser] = useState({
    username: "",
    provinсe: "",
    street: "",
    email: "",
  });

  function handleValues(e) {
    let values = {
      ...newUser,
      [e.target.name]: e.target.value,
    };
    setNewUser(values);
  }

  function checkValues() {
    if (
      !newUser.username ||
      !newUser.provinсe ||
      !newUser.street ||
      !newUser.email
    ) {
      alert("Please, fill in all fields!");
      return;
    } else {
      localStorage.setItem("Cartinfo", JSON.stringify(newUser));
      console.log(newUser);
    }
  }

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const { getCart, cart } = useContext(cartContext);
  useEffect(() => {
    getCart();
  }, []);

  return (
    <div style={{ paddingTop: "100px", marginBottom: "50px" }}>
      <List
        itemLayout="vertical"
        size="large"
        dataSource={cart?.products}
        footer={<h2>Итого: {cart?.totalPrice}$</h2>}
        renderItem={(item) => <CartItem item={item} />}
      />

      <>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            height: "100px",
          }}
        >
          {" "}
          {cart.totalPrice === 0 ? null : (
            <Button type="primary" onClick={showModal}>
              Checkout
            </Button>
          )}
          {cart.totalPrice === 0 ? null : (
            <Link to="/pay">
              <div>
                <Button variant="success">Buy</Button>
              </div>
            </Link>
          )}
        </div>
        <Modal
          title="Paymound metod"
          visible={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <Form
            name="complex-form"
            onFinish={onFinish}
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
          >
            <Form.Item label="Username">
              <Space>
                <Form.Item
                  noStyle
                  rules={[{ required: true, message: "Username is required" }]}
                >
                  <Input
                    style={{ width: 160 }}
                    placeholder="Please input"
                    name="username"
                    onChange={handleValues}
                  />
                </Form.Item>
                <Tooltip title="Useful information">
                  <Typography.Link href="#API">Need Help?</Typography.Link>
                </Tooltip>
              </Space>
            </Form.Item>
            <Form.Item label="Provinсe">
              <Space>
                <Form.Item
                  noStyle
                  rules={[{ required: true, message: "Provinсe is required" }]}
                >
                  <Input
                    style={{ width: 160 }}
                    placeholder="Please input"
                    name="provinсe"
                    onChange={handleValues}
                  />
                </Form.Item>
                <Tooltip title="Useful information">
                  <Typography.Link href="#API">Need Help?</Typography.Link>
                </Tooltip>
              </Space>
            </Form.Item>
            <Form.Item label="Street">
              <Space>
                <Form.Item
                  noStyle
                  rules={[{ required: true, message: "Street is required" }]}
                >
                  <Input
                    style={{ width: 160 }}
                    placeholder="Please input"
                    name="street"
                    onChange={handleValues}
                  />
                </Form.Item>
                <Tooltip title="Useful information">
                  <Typography.Link href="#API">Need Help?</Typography.Link>
                </Tooltip>
              </Space>
            </Form.Item>

            <Form.Item label="Email">
              <Space>
                <Form.Item
                  noStyle
                  rules={[{ required: true, message: "Email is required" }]}
                >
                  <Input
                    onChange={handleValues}
                    name="email"
                    style={{ width: 160 }}
                    placeholder="Please input email"
                  />
                </Form.Item>
                <Tooltip title="Useful information">
                  <Typography.Link href="#API">Need Help?</Typography.Link>
                </Tooltip>
              </Space>
            </Form.Item>
            <Form.Item label=" " colon={false}>
              <Button
                onClick={() => checkValues()}
                type="primary"
                htmlType="submit"
              >
                submit
              </Button>
            </Form.Item>
          </Form>
        </Modal>
      </>
    </div>
  );
};

export default Cart;
