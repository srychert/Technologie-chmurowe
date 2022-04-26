require('dotenv').config();
const { Client } = require('pg');


const dbConnData = {
    host: process.env.PGHOST || '172.20.0.5',
    port: process.env.PGPORT || 5432,
    database: process.env.PGDATABASE || 'postgres',
    user: process.env.PGUSER || 'postgres',
    password: process.env.PGPASSWORD || 'tajne'
};

module.exports = new Client(dbConnData);