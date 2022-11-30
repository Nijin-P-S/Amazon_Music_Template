const AuthLogin = require('./../services/auth.service');

const login = async (req, res) => {
    try{   
        await AuthLogin(req, res);
    }
    catch(err){
        console.log(err.message);
    }
};


const AuthController = {
    login
};

module.exports = AuthController;