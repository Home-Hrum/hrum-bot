import React, { useState } from "react";
import btn from "./AddButton.css";

const AddButton = ({ id, callback }) => {
  const [button, setButton] = useState(false);

  const buttonPressed = () => {
    callback(id, true, buttonUnpressed);
    setButton(true);
  };

  const buttonUnpressed = () => {
    setButton(false);
  };

  const addProduct = () => {
    callback(id, true, buttonUnpressed);
  };

  const removeProduct = () => {
    callback(id, false, buttonUnpressed);
  };

  return (
    <div>
      <div>
        {!button ? (
          <button type="submit" onClick={buttonPressed} className={btn.btn}>
            Add
          </button>
        ) : (
          <div>
            <button
              type="submit"
              onClick={removeProduct}
              className={`${btn.btn} ${btn.btn__minus}`}
            >
              -
            </button>
            <button
              type="submit"
              onClick={addProduct}
              className={`${btn.btn} ${btn.btn__plus}`}
            >
              +
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AddButton;
