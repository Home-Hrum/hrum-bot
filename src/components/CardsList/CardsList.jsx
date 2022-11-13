import React from "react";
import "./CardsList.css";
import Card from "../ProductCard/Card";

const CardsList = ({ products, bin, callback }) => {
  return (
    <div className={"container"}>
      {products.map((category) => (
        <div className={"block"}>
          <h1>{category.category_name}</h1>
          <div className={"list"}>
            {category.items.map((item) => (
              <Card
                id={item.id}
                img={item.img}
                name={item.name}
                bin={bin}
                price={item.price}
                callback={callback}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardsList;
