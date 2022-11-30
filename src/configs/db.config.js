require("dotenv").config();
const mongoose = require("mongoose");

const createConnection = async ()=>{
    console.log("Connection requested");
    await mongoose.connect(process.env.DB_URL);
    console.log("Connection established")
}
module.exports = {
    createConnection
}