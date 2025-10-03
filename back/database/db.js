import { Sequelize } from "sequelize";
import 'dotenv/config'; 

const dbConfig = {
    database: process.env.DB_NAME ,
    username: process.env.DB_USER ,
    password: process.env.DB_PASS,
    host: process.env.DB_HOST ,
    dialect: 'mysql',
    port: process.env.DB_PORT || 3306
};

const db = new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password, {
    host: dbConfig.host,
    dialect: dbConfig.dialect,
    port: dbConfig.port,
    logging: console.log
});

export default db;