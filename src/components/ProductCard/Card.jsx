import React, { useState } from "react";
import "./Card.css";
import AddButton from "../Button/AddButton.jsx";

const Card = ({ id, img, name, price, bin, callback }) => {
  const [indicator, setIndicator] = useState(0);

  // Update count of product in the bin
  const updateIndicator = () => {
    setIndicator(bin[id]);
  };

  return (
    <div className={"item"}>
      {indicator ? (
        <div className={"item__indicator"}>
          <p>{indicator}</p>
        </div>
      ) : (
        <></>
      )}

      <div
        style={{
          backgroundImage:
            "url(/home/alkosenko/Documents/homehrum/hrum-bot/src/components/ProductCard/placeholder.png)",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        className={"item__img"}
      >
        dsdssdsdd
      </div>
      <p className={"item__text"}>
        {name} ∙ <b>{price}€</b>
      </p>

      <div onClick={updateIndicator}>
        <AddButton id={id} callback={callback} />
      </div>
    </div>
  );
};

export default Card;
