async function songFieldsRequired (req, res, next){
    if(!req.body.name){
        res.setHeader('content-type', 'application/json');
        res.writeHead(400);
        res.end(JSON.stringify(
            {
                message : "Song name not provided"
            }
        ))
        return;
    }
    if(!req.body.genre){
        res.setHeader('content-type', 'application/json');
        res.writeHead(400);
        res.end(JSON.stringify(
            {
                message : "Song genre not provided"
            }
        ))
        return;
    }
    if(!req.body.singer){
        res.setHeader('content-type', 'application/json');
        res.writeHead(400);
        res.end(JSON.stringify(
            {
                message : "Singer name field not provided"
            }
        ))
        return;
    }
    next();
}


module.exports = songFieldsRequired;