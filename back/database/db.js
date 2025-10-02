import { Sequelize } from "sequelize";

const dbConfig = {
    database: process.env.DB_NAME || 'database_app',
    username: process.env.DB_USER || 'portfolio_user',
    password: process.env.DB_PASS || 'power',
    host: process.env.DB_HOST || 'localhost',
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