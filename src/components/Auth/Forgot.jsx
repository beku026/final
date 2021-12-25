import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useAuth } from "../../context/authContext";
import { message } from "antd";
const Forgot = () => {
  const [email, setEmail] = useState("");
  const { forgotPassword } = useAuth();
  const success = () => {
    message.success(
      <span style={{ color: "green" }}>
        На адрес {email} будет отправлено электронное письмо с инструкциями по
        сбросу пароля.
      </span>,
      5
    );
  };
  return (
    <div
      style={{
        padding: "100px 0px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          border: "grey 2px solid",
          borderRadius: "10px",
          width: "350px",
          height: "300px",
          padding: "20px 20px",
        }}
      >
        <h3>Сброс пароля</h3>
        <Form
          onSubmit={async (e) => {
            e.preventDefault();
            try {
              await forgotPassword(email);
            } catch (error) {
              console.log(error.message);
            }
          }}
        >
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Логин</Form.Label>
            <Form.Control
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              name="email"
              type="email"
              placeholder="Введите email"
            />
            <Form.Text className="text-muted">
              Мы никогда никому не передадим ваше имя пользователя.
            </Form.Text>
          </Form.Group>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Button variant="primary" type="submit" onClick={success}>
              Восстановить
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Forgot;
