import React, {useState} from 'react';
import card from "../css/Card.module.css";
import AddButton from "./AddButton.jsx";

const Card = ({id, img, name, price, bin, callback}) => {
    const [indicator, setIndicator] = useState(0)

    const updateIndicator = () => {
        setIndicator(bin[id])
        console.log("dsdsd", bin)
    }

    return (
        <div className={card.item}>
            {indicator
                ? <div className={card.item__indicator}>
                    <p>{indicator}</p>
                  </div>
                : <></>
            }

            <div style={
                {
                    backgroundImage: `url(${require("./a.png")})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat'
                }
            } className={card.item__img}></div>
            <p className={card.item__text}>{name} ∙ <b>{price}€</b></p>
            <div onClick={updateIndicator}><AddButton id={id} callback={callback} /></div>
        </div>
    );
};

export default Card;