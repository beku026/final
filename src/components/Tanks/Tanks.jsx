import { DeleteOutlined, EditOutlined, ShoppingCartOutlined } from "@ant-design/icons/lib/icons";
import React, { useContext } from "react";
import { Card, Button} from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { TanksContext } from "../../context/TanksContext";
import './Tanks.css'
const Tanks = ({item}) => {
  const {deleteTanks}=useContext(TanksContext)

  const {
    handleLogout,
    user: { email },
  } = useAuth();
  return (
    <>
        <div className="m-4 card">
          <Card style={{ width: "24rem", border: "none"}}>
            <Card.Img
              variant="top"
              src={item.image} 
              className="c"         
            />
            <Card.Body>
              <Card.Title>{item.name}</Card.Title>
              <div>
                <span style={{color: 'black'}}>Тип: </span>
                <span style={{ fontSize: "20px", fontWeight: "bold",  color: 'black' }}>
                  {item.type}
                </span>
                <br />
                <span style={{color: 'black'}}>Нация: </span>
                <span style={{ fontSize: "20px", fontWeight: "bold", color: 'black' }}>
                  {item.country}
                </span>
                <br />
                <span style={{color: 'black'}}>Цена: </span>
                <span style={{ fontSize: "20px", fontWeight: "bold", color: 'red'}}>
                  {item.price}
                </span><span style={{color: 'black'}}> токенов</span>
              </div>
              {email==="tarieltairov1@gmail.com" ? (
                <DeleteOutlined style={{color: 'orangered'}} onClick={()=>deleteTanks(item.id)} className="m-3"/>
                ): null}
              {email=== "tarieltairov1@gmail.com" ? (
                <Link to={`/edit/${item.id}`}><EditOutlined style={{color: 'orangered'}} className="m-3"/></Link>              
              ):null}
              <Link to={`/details/${item.id}`}><Button variant="secondary" className="m-3" >Подробнее</Button></Link>
              {email? <ShoppingCartOutlined style={{color: 'red'}} /> : null}
              
            </Card.Body>
          </Card>          
        </div>
        </>     
  );
};

export default Tanks;
