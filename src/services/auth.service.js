require("dotenv").config();
const User = require("./../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

async function login (req, res){
    try{
        const user =await User.findOne({username : req.body.username});
        if(!user){
            res.setHeader('content-type', 'application/json');
            res.writeHead(404);
            res.end(JSON.stringify(
                {
                    message : "Requested user not found in the database"
                })
            )
            return;
        }
        else{
            const comp = await bcrypt.compare(req.body.password, user.password);

            if(!comp){
                res.setHeader('content-type', 'application/json');
                res.writeHead(400);
                res.end(JSON.stringify(
                    {
                        message : "Wrong password"
                    })
                )
            }
            else{
                const payload = {
                    username : user.username
                }
                const access_token = jwt.sign(payload, process.env.ACCESS_TOKEN);

                res.setHeader('content-type', 'application/json');
                res.writeHead(200);
                res.end(JSON.stringify(
                    {
                        message : "Successfully logged in",
                        access_token : access_token
                    })
                )
                return;
            }
        }
    }
    catch(err){
        console.log(err.message);
        res.setHeader('content-type', 'application/json');
        res.writeHead(500);
        res.end(JSON.stringify(
                {
                    message : "Error occured while logging you in",
                    Error : err.message
                })
        )
        return;  
    }
};


module.exports = login;
