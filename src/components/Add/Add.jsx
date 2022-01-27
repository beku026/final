import React, { useContext } from "react";
import { useState } from "react";
import { TanksContext } from "../../context/TanksContext";
import { useNavigate } from "react-router-dom";

const Add = () => {

const navigate = useNavigate();

const [newTank, setNewTank] = useState({
  name: "",
  type: "",
  country: "",
  image: "",
  price: "",
  description: "",
  comments: "",
});

const { createTank } = useContext(TanksContext);

function handleValues(e) {
  let values = {
    ...newTank,
    [e.target.name]: e.target.value,
  };
  setNewTank(values);
}

function checkValues() {
  if (
    !newTank.name ||
    !newTank.type ||
    !newTank.image ||
    !newTank.country ||
    !newTank.price ||
    !newTank.description
  ) {
    alert("Заполните поля!");
    return;
  } else {
    createTank(newTank);
    navigate("/tanks");
  }
}

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{
        backgroundImage:
          "url(https://cdn.igromania.ru/mnt/news/6/9/4/3/0/6/87235/aff8b0534843c376_1920xH.jpg)",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
    >
      <div
        style={{
          border: "grey solid 4px",
          borderRadius: "5%",
          marginTop: "120px",
          marginBottom: "100px",
          backgroundColor: "rgba(0,0,0,0.4)",
          minWidth: '320px'
        }}
        className="col-4 d-flex flex-column align-items-center"
      >
        <h3 style={{ color: "white" }}>Форма для добавления танка</h3>
        <input
          onChange={handleValues}
          style={{ height: "40px" }}
          type="text"
          placeholder="Введите имя"
          name="name"
          className="m-3 col-9"
        />
        <input
          onChange={handleValues}
          style={{ height: "40px" }}
          type="text"
          placeholder="Введите тип"
          name="type"
          className="m-3 col-9"
        />
        <input
          onChange={handleValues}
          style={{ height: "40px" }}
          type="text"
          placeholder="Введите нацию"
          name="country"
          className="m-3 col-9"
        />
        <input
          onChange={handleValues}
          style={{ height: "40px" }}
          type="text"
          placeholder="Введите url для картинки"
          name="image"
          className="m-3 col-9"
        />
        <input
          onChange={handleValues}
          style={{ height: "40px" }}
          type="text"
          placeholder="Введите описание"
          name="description"
          className="m-3 col-9"
        />
        <input
          onChange={handleValues}
          style={{ height: "40px" }}
          type="number"
          placeholder="Введите цену"
          name="price"
          className="m-3 col-9"
        />
        <button
          onClick={() => checkValues()}
          style={{
            background: "orangered",
            color: "white",
            fontSize: "20px",
            fontWeight: "500",
          }}
          className="btn m-3 col-5"
        >
          ДОБАВИТЬ
        </button>
      </div>
    </div>
  );
};

export default Add;
