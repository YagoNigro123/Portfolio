export const isAuthenticated = (req, res, next) => {
    if (req.session.isLoggedIn) {
        return next();
    }
    if (!req.path.startsWith('/auth')) {
        req.session.returnTo = req.originalUrl;
    }
    return res.redirect('/login');
}