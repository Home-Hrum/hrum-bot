import React from "react";
import "./CardsList.css";
import Card from "../ProductCard/Card";

const CardsList = ({ products, bin, callback }) => {
  return (
    <div>
      {products.map((category) => (
        <div className={"list"}>
          <h1>{category.category_name}</h1>
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
      ))}
    </div>
  );
};

export default CardsList;
