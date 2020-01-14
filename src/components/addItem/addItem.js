import React from "react";
import "./addItem.css";

const AddItem = ( { addItem } ) => {
  return (
    <div>
      <span>
        <input type="text" className="form-control" placeholder = 'Add something task'/>
        <button type="button" className="btn btn-outline-secondary button"
        onClick = { addItem }>
          Add item
        </button>
      </span>
    </div>
  );
};

export default AddItem;
