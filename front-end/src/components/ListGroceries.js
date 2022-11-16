import React, { useEffect, useState } from "react";
import EditGrocery from "./EditGrocery";

const ListGroceries = () => {
  const [groceries, setGrocery] = useState([]);

  const getGroceries = async () => {
    try {
      const response = await fetch("http://localhost:5000/groceries");
      const jsonData = await response.json();
      setGrocery(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getGroceries();
  }, []);

  return (
    <>
      <body>
        <table className="table mt-5 text-center">
          <thead>
            <tr>
              <th>Grocery</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {groceries.map((grocery) => (
              <tr>
                <td>{grocery.description}</td>
                <td>Edit</td>
                <td>Delete</td>
              </tr>
            ))}
          </tbody>
        </table>
      </body>
    </>
  );
};

export default ListGroceries;
