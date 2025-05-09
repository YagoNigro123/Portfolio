import { Sequelize } from "sequelize";

const dbConfig = {
    database: process.env.DB_NAME || 'database_app',
    username: process.env.DB_USER || 'root',
    passsword: process.env.DB_PASS || '',
    host: process.env.DB_HOST || 'localhost',
    dialect: 'mysql',
    port: process.env.DB_PORT || 3306
};

const db = new Sequelize(dbConfig.database, dbConfig.username, dbConfig.passsword, {
    host: dbConfig.host,
    dialect: dbConfig.dialect,
    port: dbConfig.port
});

export default db;