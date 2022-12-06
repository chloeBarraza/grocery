const Pool = require('pg').Pool;

const pool = new Pool ({
user: 'postgres',
host:'localhost',
password: '5309',
port:5432,
database: 'grocerylist',
})

module.exports = pool;