// Song Model
const mongoose = require("mongoose");

const songSchema = new mongoose.Schema(
    {
        name : {
            type : String,
            required : true,
            lowercase : true
        },
        singer : {
            type : String,
            required : true
        },
        genre : {
            type : String,
            required : true
        },
        played_count :{
            type : Number,
            default : 0
        }
    },{timestamps : true}
);

const songModel = mongoose.model("Song", songSchema);

module.exports = songModel;