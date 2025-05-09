function verificarAutenticacion(req, res, next) {
    if (req.session.loggedIn) {
        next();
    } else {
        res.redirect('/admin/login');
    }
}

module.exports = { verificarAutenticacion };