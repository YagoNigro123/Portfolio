await User.destroy({ where: { username: 'admin' } });

import bcrypt from 'bcrypt';
import User from '../models/userModel.js';
import db from '../database/db.js';

async function initDatabase() {
    try {
        await db.sync({ alter: true });

        const adminExists = await User.findOne({ where: { username: 'admin' } });

        if (!adminExists) {
            const hashedPassword = await bcrypt.hash('admin123', 10);

            await User.create({
                username: 'admin',
                password: hashedPassword
            });

            console.log('Usuario admin creado correctamente');
        } else {
            console.log('El usuario admin ya existe');
        }

        console.log('Base de datos inicializada correctamente');
        process.exit(0);
    } catch (error) {
        console.error('Error al inicializar la base de datos:', error);
        process.exit(1);
    }
}

initDatabase();