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

  const deleteGrocery = async (id) => {
    try {
      const deleteGrocery = await fetch(
        `http://localhost:5000/groceries/${id}`,
        {
          method: "DELETE",
        }
      );

      setGrocery(groceries.filter((grocery) => grocery.grocery_id !== id));
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
              <tr key={grocery.grocery_id}>
                <td>{grocery.description}</td>
                <td><EditGrocery /></td>
                <td>
                  <button
                    className="btn btn-outline-danger"
                    onClick={() => deleteGrocery(grocery.grocery_id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </body>
    </>
  );
};

export default ListGroceries;
