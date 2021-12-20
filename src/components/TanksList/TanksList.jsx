import React, { useContext, useEffect } from "react";
import { TanksContext } from "../../context/TanksContext";
import Tanks from "../Tanks/Tanks";

const TanksList = () => {
  const { getTanks, tanks } = useContext(TanksContext);

  useEffect(() => {
    getTanks();
  }, []);

  return (
    <div
      className="d-flex justify-content-center flex-wrap"
      style={{
        backgroundImage:
          "url(https://gagadget.com/media/post_big/WoTB_art_European_Tree_1920x1080.jpg)",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        paddingTop: '100px', 
        paddingBottom: '100px'
      }}
    >
      {tanks.map((item) => (
        <Tanks key={item.id} item={item} />
      ))}
    </div>
  );
};

export default TanksList;
