require("dotenv").config();
const jwt = require("jsonwebtoken");

async function jwtTokenValidation (req, res, next){
    try{
        const authHeader = req.headers['authorization']
        const token = authHeader && authHeader.split(" ")[1];
        if(!token){
            res.setHeader('content-type', 'application/json');
            res.writeHead(401);
            res.end(JSON.stringify(
            {
                message : "Token is not present",
            }
            ));
        }
        jwt.verify(token, process.env.ACCESS_TOKEN, (err, user) => {
            if(err){
                res.setHeader('content-type', 'application/json');
                res.writeHead(403);
                res.end(JSON.stringify(
                {
                    message : "Not authenticated",
                }
                ));
            }
            req.user = user
            next();
        })
    }
    catch(err){
        console.log(err.message);
        res.setHeader('content-type', 'application/json');
        res.writeHead(500);
        res.end(JSON.stringify(
            {
                message : "Error while validating JWT token",
                error : err.message
            }
        ));
        return;
    }
}

module.exports = jwtTokenValidation;