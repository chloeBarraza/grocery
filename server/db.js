const Pool = require('pg').Pool;

const pool = new Pool ({
user: 'postgress',
host:'localhost',
password: '1742',
port:5432,
database: 'grocerylist'
})

module.exports = pool;