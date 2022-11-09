const express = require('express');
const app = express();
const cors = require('cors');
const pool = require('./db');

app.use(cors());
app.use(express.json());


//making a new list item
app.post('/groceries', async(req, res) => {
    try {
        const {description} = req.body;
        const newGrocery = await pool.query('INSERT INTO grocries (description) VALUES($1) RETURNING *', 
        [description]);

        res.json(newGrocery.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
})

//get all
app.get('/groceries', async(req, res) => {
    try {
        const allGroceries = await pool.query('SELECT * FROM grocries');
        res.json(allGroceries.rows);
    } catch (err) {
        console.error(err.message);
    }
})



app.listen(5000, () => {
    console.log("server 5000")
})