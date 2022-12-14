import React, { useState } from "react";
import styled from "styled-components";

const AddGrocery = () => {
  const [description, setDescription] = useState("");

  const Button = styled.button`
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border-radius: 3px;
    color: black;
    border: 2px solid;
  `;

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { description };
      const response = await fetch("http://localhost:5000/groceries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      window.location = "/"; //prevents window reloading after
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <>
      <h1 className="text-center mt-4">What do we need?</h1>
      <form className="d-flex mt-4" onSubmit={onSubmitForm}>
        <input
          type="text"
          className="form-control"
          placeholder="Type here..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button className="btn btn-primary">Add</button>
      </form>
    </>
  );
};
export default AddGrocery;
