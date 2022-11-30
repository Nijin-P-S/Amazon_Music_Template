const {songAdd, songRemove, songSearchByName, songSearchByGenre} = require('./../services/song.service');

const addSong = async (req, res) => {
    //addSong api logic here
    try{
        await songAdd(req, res);
    }
    catch(err){
        console.log("Couldn't add the song")
    }
};

const removeSong = async (req, res) => {
    //removeSong api logic here
    try{
        await songRemove(req, res);
    }
    catch(err){
        console.log(err.message);
    }
};

const searchSongByName = async (req, res) => {
    //searchSongByName api logic here
    try{
        await songSearchByName(req, res);
    }
    catch(err){
        console.log(err.message);
    }
};

const searchSongByGenre = async (req, res) => {
    //searchSongByGenre api logic here
    try{
        await songSearchByGenre(req, res);
    }
    catch(err){
        console.log(err.message);
    }
};

const SongsController = {
    addSong,
    removeSong,
    searchSongByName,
    searchSongByGenre
};

module.exports = SongsController;