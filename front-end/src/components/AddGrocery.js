import React, { useState } from "react";

const AddGrocery = () => {
  const [description, setDescription] = useState("");

  const onAdd = async (e) => {
    e.preventDefault();
    try {
      const body = { description };
      const response = await fetch("http://localhost:5000/groceries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <>
      <h1 className="text-center mt-2">Groceries</h1>
      <form className="d-flex mt-5" onSubmit={onAdd}>
        <input
          type="text"
          className="form-control"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button className="btn btn-success">Add</button>
      </form>
    </>
  );
};
export default AddGrocery;
