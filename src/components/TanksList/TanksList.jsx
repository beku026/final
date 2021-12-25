import { Input } from "antd";
import React, { useContext, useEffect, useState } from "react";
import { TanksContext } from "../../context/TanksContext";
import Tanks from "../Tanks/Tanks";
import { useSearchParams } from "react-router-dom";
import { Pagination } from "antd";
import Filter from "../Filter/Filter";

const TanksList = () => {
  const { getTanks, tanks, total } = useContext(TanksContext);
  const [searchParams, setSearchParams] = useSearchParams();
  const [type, setType] = useState([]);

  const [search, setSearch] = useState(
    searchParams.get("q") ? searchParams.get("q") : ""
  );
  const [page, setPage] = useState(
    searchParams.get("_page") ? searchParams.get("_page") : 1
  );
  const [limit, setLimit] = useState(
    searchParams.get("_limit") ? searchParams.get("_limit") : 9
  );

  useEffect(() => {
    setSearchParams({
      q: search,
      _limit: limit,
      _page: page,
      type: type,
    });
  }, []);

  useEffect(() => {
    getTanks();
  }, [searchParams]);

  useEffect(() => {
    setSearchParams({
      q: search,
      _limit: limit,
      _page: page,
      type: type,
    });
  }, [search, limit, page, type]);

  return (
    <div
      style={{
        backgroundImage:
          "url(https://gagadget.com/media/post_big/WoTB_art_European_Tree_1920x1080.jpg)",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        paddingTop: "100px",
        paddingBottom: "100px",
      }}
    >
      <div
        style={{
          paddingLeft: "50px",
          paddingRight: "50px",
          marginBottom: "70px",
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        <Input
          className="m-1"
          placeholder="Поиск "
          enterButton="Search"
          size="large"
          style={{ width: "25vw" }}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <Filter type={type} setType={setType} />
      </div>

      <div
        className="d-flex justify-content-center flex-wrap"
        style={{ marginBottom: "100px" }}
      >
        {tanks.map((item) => (
          <Tanks key={item.id} item={item} />
        ))}
      </div>

      <div className="d-flex justify-content-center">
        <Pagination
          size="medium"
          total={+total}
          onChange={(page, limit) => {
            setPage(page);
            setLimit(limit);
          }}
          current={+page}
          pageSize={+limit}
          defaultCurrent={1}
        />
      </div>
    </div>
  );
};

export default TanksList;
