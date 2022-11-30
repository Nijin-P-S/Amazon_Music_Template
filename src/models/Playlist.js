// Playlist Model
const mongoose = require("mongoose");

const playlistSchema = new mongoose.Schema(
    {
        name : {
            type : String,
            required : true,
            lowercase : true
        },
        songs : [
            {
                type : mongoose.Schema.Types.ObjectId,
                ref : "Song"
            }
        ]
    }, {timestamps : true}
);

const playlistModel = mongoose.model("Playlist", playlistSchema);

module.exports = playlistModel;