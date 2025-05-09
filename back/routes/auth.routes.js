import express from 'express';
import {
    showLoginForm,
    loginUser,
    showDashboard,
    logout
} from '../controllers/authController.js';
import { isAuthenticated } from '../middleware/authMiddleware.js';

const router = express.Router();


router.get('/login', (req, res) => {
    if (req.session.isLoggedIn) {
        return res.redirect('/dashboard'); 
    }
    return showLoginForm(req, res); 
});

router.post('/login', loginUser);

router.get('/dashboard', isAuthenticated, (req, res) => {
    return showDashboard(req, res); 
});

router.get('/logout', logout);

export default router;