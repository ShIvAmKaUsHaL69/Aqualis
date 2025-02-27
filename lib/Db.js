import mysql from 'mysql2/promise';

const pool = mysql.createPool({
    host: process.env.host,
    user: process.env.user,
    password: process.env.password,
    database: 'ekreps_Aqualis',
});

export default pool;