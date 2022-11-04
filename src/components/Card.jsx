import React from 'react';
import card from "../css/Card.module.css";
import AddButton from "./AddButton.jsx";

const Card = ({id, img, name, price, callback}) => {
    return (
        <div className={card.item}>
            <div style={
                {
                    backgroundImage: `url(${require("./a.png")})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat'
                }
            } className={card.item__img}></div>
            <p className={card.item__text}>{name} ∙ <b>{price}€</b></p>
            <AddButton id={id} callback={callback} />
        </div>
    );
};

export default Card;