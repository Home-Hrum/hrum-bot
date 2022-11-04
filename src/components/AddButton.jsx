import React, {useState} from 'react';
import btn from "../css/AddButton.module.css";

const AddButton = ({id, callback}) => {
    const [button, setButton] = useState(0);

    const buttonPressed = () => {
        callback(id, true, buttonUnpressed)
        setButton(1);
    };

    const buttonUnpressed = () => {
        setButton(0);
    }

    const addProduct = () => {
        callback(id, true, buttonUnpressed);
    }

    const removeProduct = () => {
        callback(id, false, buttonUnpressed);
    }

    return (
        <div>
            <div>
                {!button
                    ? <button type="submit" onClick={buttonPressed} className={btn.btn}>Add</button>
                    : <div>
                        <button onClick={removeProduct}>-</button>
                        <button onClick={addProduct}>+</button>
                      </div>
                }
            </div>
        </div>
    );
};

export default AddButton;