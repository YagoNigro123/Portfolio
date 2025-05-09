const express = require('express');
const router = express.Router();
const { pool } = require('../config/database');
const { verificarAutenticacion } = require('../middleware/auth');

router.get('/admin/messages', verificarAutenticacion, async (req, res) => {
    try {
        const [rows] = await pool.query(`
            SELECT id, name, email, message, DATE_FORMAT(created_at, '%d/%m/%Y %H:%i') as formatted_date 
            FROM messages 
            ORDER BY created_at DESC
        `);
        res.render('admin/messages', {
            messages: rows,
            title: 'Panel de Mensajes',
            username: req.session.username
        });
    } catch (error) {
        console.error('Error al obtener los mensajes:', error);
        res.status(500).render('error', {
            message: 'Ocurrió un error al cargar los mensajes',
            error: { status: 500, stack: error.stack }
        });
    }
});

router.post('/admin/messages/delete/:id', verificarAutenticacion, async (req, res) => {
    try {
        const messageId = req.params.id;
        await pool.execute('DELETE FROM messages WHERE id = ?', [messageId]);
        res.redirect('/admin/messages');
    } catch (error) {
        console.error('Error al eliminar el mensaje:', error);
        res.status(500).render('error', {
            message: 'Ocurrió un error al eliminar el mensaje',
            error: { status: 500, stack: error.stack }
        });
    }
});

router.get('/contact', (req, res) => {
    res.render('contact');
});

router.post('/contact', async (req, res) => {
    try {
        const { email, name, message } = req.body;
        if (!email || !name || !message) {
            return res.status(400).render('contact', {
                error: 'Todos los campos son obligatorios',
                formData: req.body
            });
        }
        await pool.execute(
            'INSERT INTO mensaje (nombre, email, mensaje) VALUES (?, ?, ?)', 
            [name, email, message]
        );
        res.render('contact', { success: 'Mensaje enviado correctamente' });
    } catch (error) {
        console.error('Error al guardar el mensaje:', error);
        res.status(500).render('contact', {
            error: 'Error al procesar tu mensaje. Por favor, intenta de nuevo',
            formData: req.body
        });
    }
});

router.post('/api/contact', async (req, res) => {
    try {
        const { email, name, message } = req.body;
        if (!email || !name || !message) {
            return res.status(400).json({ error: 'Todos los campos son obligatorios' });
        }
        const [result] = await pool.execute(
            'INSERT INTO messages (name, email, message) VALUES (?, ?, ?)',
            [name, email, message]
        );
        res.status(201).json({
            success: true,
            message: 'Mensaje enviado correctamente',
            id: result.insertId
        });
    } catch (error) {
        console.error('Error al guardar el mensaje:', error);
        res.status(500).json({ error: 'Error al procesar tu mensaje' });
    }
});

module.exports = router;