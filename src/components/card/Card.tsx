import React, { useState, useEffect } from "react";
import "./Card.css";
import { CardInfo } from "./CardInfo";

export interface CardInfoProps extends CardInfo {}

export type CardInfoPropsType = {
  cardInfoData: CardInfoProps;
};

const Card = ({ cardInfoData }: CardInfoPropsType) => {
  const [valueData, setValueData] = useState<number>(1);

  const { carName, price } = cardInfoData;
  const buttonLabel: String = "הוסף";
  const inStock = true;
  const notInStock: String = "Not in stock";
  const listOdClients: string[] = ["Shimi", "Sami", "Rivka"];

  const handleClick = (cdi: CardInfo) => (e: React.SyntheticEvent) => {
    alert("on click  " + cdi.cardId);
  };

  const add = () => {
    setValueData((prev) => prev + 1);
  };

  useEffect(() => {
    // on  stage component creation
    var myInterval = setInterval(() => {
      console.log("Shimi");
      setValueData(Math.floor(Math.random() * 10));
    }, 1000);
    // on stage destroy  component
    return clearInterval(myInterval);
  }, []);

  return (
    <div className="cardContent">
      <div className="caption">{carName}</div>
      <div className="caption">{`${price} ש"ח`} </div>
      <div className="caption">{valueData}</div>
      {inStock && <div className="caption">low in Stock</div>}
      {listOdClients.map((client, index) => (
        <div key={index}>{client}</div>
      ))}

      <button onClick={add}>Add</button>

      <div className="buttonContainer">
        {inStock ? (
          <button onClick={handleClick(cardInfoData)}>{buttonLabel}</button>
        ) : (
          <div>{notInStock}</div>
        )}
      </div>
    </div>
  );
};

export default Card;
