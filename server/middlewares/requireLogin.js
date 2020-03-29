module.exports = (req, res, next) => {
    if (!req.user) {
        return res.status(401).send({ error: 'Login To Access This Page!' })
    }
    next();
}