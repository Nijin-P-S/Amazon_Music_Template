function parameterValidation (req, res, next){
    if(!req.body.username) {
        res.setHeader('content-type', 'application/json');
        res.writeHead(400);
        res.end(JSON.stringify({
            message: 'username Should Be Present'
        }));
        return;
    }

    if(!req.body.password) {
        res.setHeader('content-type', 'application/json');
        res.writeHead(400);
        res.end(JSON.stringify({
            message: 'password should be present'
        }));
        return;
    }
    next();
}


module.exports = {
    parameterValidation
}