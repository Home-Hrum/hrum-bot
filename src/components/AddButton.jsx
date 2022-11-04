import React from 'react';
import btn from "../css/AddButton.module.css";

const AddButton = () => {
    return (
        <div>
            <div>
                <button type="submit" className={btn.btn}>Add</button>
            </div>
        </div>
    );
};

export default AddButton;