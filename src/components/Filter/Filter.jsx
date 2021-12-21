import { Select } from "antd";
import React, { useContext, useEffect } from "react";
import { TanksContext } from "../../context/TanksContext";
const { Option } = Select;
const Filter = ({ type, setType }) => {
  const { getTanks, tanks } = useContext(TanksContext);
  useEffect(() => {
    getTanks();
  }, []);
  return (
    <Select
      value={type}
      onChange={(e) => setType(e)}
      style={{ width: "200px", fontSize: '20px' }}
      mode="multiple"
      placeholder="Filter by type"
    >
      {tanks.map((item) =>(
        <Option value={item.type} key={item.id}>
          {item.type}
        </Option>
      ))}
    </Select>
  );
};

export default Filter;

