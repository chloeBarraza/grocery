const express = require('express');
const app = express();
const cors = require('cors');
const pool = require('./db');

app.use(cors());
app.use(express.json());

app.post('/groceries', async(req, res) => {
    try {
        const {description} = req.body;
        const newGrocery = await pool.query('INSERT INTO grocries (description) VALUES($1)', 
        [description]);

        res.json(newGrocery);
    } catch (err) {
        console.error(err.message);
    }
})






app.listen(5000, () => {
    console.log("server 5000")
})