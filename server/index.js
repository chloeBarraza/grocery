const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

app.use(cors());
app.use(express.json());

//making a new list item -WORKS
app.post("/groceries", async (req, res) => {
  try {
    const { description } = req.body;
    const newGrocery = await pool.query(
      "INSERT INTO grocries (description) VALUES($1) RETURNING *",
      [description]
    );

    res.json(newGrocery.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

//get all -WORKS
app.get("/groceries", async (req, res) => {
  try {
    const allGroceries = await pool.query("SELECT * FROM grocries");
    res.json(allGroceries.rows);
  } catch (err) {
    console.error(err.message);
  }
});

//get one -WORKS
app.get("/groceries/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const grocery = await pool.query(
      "SELECT * FROM grocries WHERE grocery_id = $1",
      [id]
    );

    res.json(grocery.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

//update the groceries
app.put("/groceries/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { description } = req.body;
    const updateGrocery = await pool.query(
      "UPDATE grocries SET description = $1 WHERE grocery_id = $2",
      [description, id]
    );

    res.json("updated");
  } catch (err) {
    console.error(err.message);
  }
});

//delete a grocery -WORKS
app.delete("/groceries/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteGrocery = await pool.query(
      "DELETE FROM grocries WHERE grocery_id = $1",
      [id]
    );

    res.json("deleted");
  } catch (err) {
    console.error(err.message);
  }
});

app.listen(5000, () => {
  console.log("server 5000");
});
