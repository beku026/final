import { List } from "antd";
import React, { useContext, useEffect } from "react";
import { favouriteContext } from "../../context/favouritesContext";
import FavouritesItem from "./FavouritesItem";

const Favourites = () => {
  const { getFavourite, favourite } = useContext(favouriteContext);
  useEffect(() => {
    getFavourite();
  }, []);
  return (
    <div style={{ paddingTop: "100px", marginBottom: "50px" }}>
        <List
        itemLayout="vertical"
        size="large"
        dataSource={favourite?.products}
        renderItem={(item) => <FavouritesItem item={item} />}
      />
    </div>
  );
};

export default Favourites;
