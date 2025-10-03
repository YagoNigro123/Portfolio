import mysql from 'mysql2/promise';
import 'dotenv/config';

const pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
}).promise();

const connectDB = async () => {
    try {
        const connection = await pool.getConnection();
        console.log('Conexión a MySQL establecida correctamente');
        connection.release();
        return true;
    } catch (error) {
        console.error('Error al conectar a MySQL:', error.message);
        return false;
    }
};

module.exports = { pool, connectDB };