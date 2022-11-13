import React, { useState } from "react";
import card from "./Card.css";
import AddButton from "../Button/AddButton.jsx";

const Card = ({ id, img, name, price, bin, callback }) => {
  const [indicator, setIndicator] = useState(0);

  // Update count of product in the bin
  const updateIndicator = () => {
    setIndicator(bin[id]);
  };

  return (
    <div className={card.item}>
      {indicator ? (
        <div className={card.item__indicator}>
          <p>{indicator}</p>
        </div>
      ) : (
        <></>
      )}

      <div
        style={{
          backgroundImage: `url(${require("./placeholder.png")})`,
        }}
        className={card.item__img}
      ></div>
      <p className={card.item__text}>
        {name} ∙ <b>{price}€</b>
      </p>

      <div onClick={updateIndicator}>
        <AddButton id={id} callback={callback} />
      </div>
    </div>
  );
};

export default Card;
