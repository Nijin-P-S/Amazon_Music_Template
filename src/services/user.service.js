const User = require("./../models/User");
const bcrypt = require("bcrypt");

async function registerUser(req, res){
    try{
        const user = {
            username : req.body.username,
            password : req.body.password
        }
    
        const hashPassword = await bcrypt.hash(user.password, 8);
        user.password = hashPassword;
    
        await User.create(user);
    
        
        res.setHeader('content-type', 'application/json');
        res.writeHead(201);
        res.end(JSON.stringify({
            message: 'Successfully registered the user'
        }));
        return;
    }
    catch(err){
        console.log(err.message);
        res.setHeader('content-type', 'application/json');
        res.writeHead(400);
        res.end(JSON.stringify({
            message: 'Couldn\'t register the user',
            Error : err.message
        }));
    }
};


module.exports = registerUser