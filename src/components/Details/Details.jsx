import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { TanksContext } from "../../context/TanksContext";
import "./Details.css";

const Details = () => {
  const { getMore, more } = useContext(TanksContext);
  const { id } = useParams();
  const [tank, setTank] = useState({});

  useEffect(() => {
    getMore(id);
  }, []);

  useEffect(() => {
    setTank(more);
  }, [more]);

  return (
    <>
      {tank ? (
        <div className="angar">

          <div
            style={{
              backgroundImage: `url(${tank.image})`,
              height: "100%",
              width: "100%",
              paddingTop: '100px',
              paddingLeft: '180px' 
            }}
            className="d-flex justify-content-between align-items-center"
          >
            <div style={{width:"30%"}}>
              <h1 style={{ color: "white" }}>{tank.name}</h1>
              <div style={{ marginTop: "100px" }}>
                <span style={{ color: "grey" }}>Тип: </span>
                <span>{tank.type}</span>
              </div>
              <div style={{ marginTop: "50px" }}>
                <span style={{ color: "grey" }}>Нация: </span>
                <span>{tank.country}</span>
              </div>
              <div style={{ marginTop: "50px" }}>
                <span style={{ color: "grey" }}>Цена: </span>
                <span>{tank.price}</span>
                <span style={{ color: "red" }}> токенов</span>
              </div>
            </div>
            <div
              style={{ width: "40%" }}
            >
              <p style={{ fontSize: "22px", color: "white" }}>
                {tank.description}
              </p>
            </div>
          </div>
          </div>
      ) : (
        <h1>loading</h1>
      )}
    </>
  );
};

export default Details;