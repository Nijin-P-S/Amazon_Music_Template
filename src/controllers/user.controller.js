const userRegister = require('./../services/user.service.js');

const registerUser = async (req, res) => {
    try{
        await userRegister(req, res);
    }
    catch(err){
        console.log(err.message);
    }
};


const UserController = {
    registerUser
};

module.exports = UserController;