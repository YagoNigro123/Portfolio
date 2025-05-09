import db from '../database/db.js';

import { DataTypes } from 'sequelize';

const projectsModle = db.define('projects', {
    title: DataTypes.STRING,
    content: DataTypes.TEXT,
    image: DataTypes.STRING,
    lenguages: DataTypes.STRING
}, {
    timestamps: true
});

export default projectsModle