import React, { useState } from "react";

const EditGrocery = ({ grocery }) => {
  const [description, setDescription] = useState(grocery.description);
  const updateGrocery = async (e) => {
    //e.preventDefault(); //cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur
    try {
      const body = { description };
      const response = await fetch(
        `http://localhost:5000/groceries/${grocery.grocery_id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        }
      );

      window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <>
      <button
        type="button"
        className="btn btn-outline-warning"
        data-toggle="modal"
        data-target={`#id${grocery.grocery_id}`}
      >
        Edit
      </button>

      <div className="modal" id={`id${grocery.grocery_id}` }>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Edit Grocery</h4>
              <button type="button" className="close" data-dismiss="modal">
                &times;
              </button>
            </div>

            <div className="modal-body">
              <input
                type="text"
                className="form-control"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-success"
                data-dismiss="modal"
                onClick={(e) => updateGrocery(grocery.description)}
              >
                Edit
              </button>
              <button
                type="button"
                className="btn btn-warning"
                data-dismiss="modal"
                onClick={(e) => updateGrocery(grocery.description)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditGrocery;
