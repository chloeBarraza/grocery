import React, { useEffect, useState } from "react";
import EditGrocery from "./EditGrocery";
import DeleteGrocery from "./DeleteGrocery";

const ListGroceries = () => {
  const [groceries, setGroceries] = useState([]);

  return (
    <>
      <table className="table mt-5 text-center">
        <thead>
          <tr>
            <th>Description</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {groceries.map((groceryItem) => (
            <tr key={groceryItem.grocery_id}>
              <td>{groceryItem.description}</td>
              <td>
                <EditGrocery groceryItem={groceryItem} />
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => DeleteGrocery(groceryItem.grocery_id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default ListGroceries;
