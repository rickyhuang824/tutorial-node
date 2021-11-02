const authorize = (req, res, next) => {
    const { user } = req.query;
    
    if (user === 'ricky') {
        req.user = {name: 'ricky'} ;
        next();
    } else {
        res.status(401).send('unauthorized');
    }
}

module.exports = authorize;