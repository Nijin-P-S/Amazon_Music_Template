// User Model
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        username : {
            type : String,
            required : true,
            unique : true,
            lowercase : true
        },
        password :{
            type : String,
            required : true
        },
        playlists : [
            {
                type : mongoose.Schema.Types.ObjectId,
                ref : "Playlist"
            }
        ]
    }, {timestamps : true}
);

const userModel = mongoose.model("User", userSchema);

module.exports = userModel;