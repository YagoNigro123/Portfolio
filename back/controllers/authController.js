import bcrypt from 'bcryptjs';
import User from '../models/userModel.js';

export const showLoginForm = (req, res) => {
    res.render('auth/login', { error_msg: null });
}

export const loginUser = async (req, res) => {
    try {
        const { username, password } = req.body;

        if (!username || !password) {
            return res.render('auth/login', {
                error_msg: 'Usuario y contraseña son requeridos'
            });
        }

        const user = await User.findOne({
            attributes: ['id', 'username', 'password'],
            where: {
                username,
                isSoftDeleted: false
            }
        });

        if (!user) {
            return res.render('auth/login', {
                error_msg: 'Credenciales inválidas'
            });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.render('auth/login', {
                error_msg: 'Credenciales inválidas'
            });
        }

        req.session.regenerate(err => {
            if (err) throw err;

            req.session.userId = user.id;
            req.session.username = user.username;
            req.session.isLoggedIn = true;

            const redirectTo = req.session.returnTo || '/dashboard';
            delete req.session.returnTo;

            return res.redirect(redirectTo);
        });

    } catch (error) {
        console.error('Error en login:', error);
        return res.render('auth/login', {
            error_msg: 'Error en el servidor. Intente nuevamente.'
        });
    }
}


export const showDashboard = (req, res) => {
    res.render('dashboard', { user: req.session.username });
}

export const logout = (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            console.error('Error al cerrar sesión:', err);
            return res.redirect('/dashboard');
        }
        res.clearCookie('connect.sid');
        res.redirect('/login');
    });
}