const {playlistCreate, playlistDelete} = require('./../services/playlist.service');

const createPlaylist = async (req, res) => {
    try{
        await playlistCreate(req, res);
    }
    catch(err){
        console.log(err.message);
    }
};

const deletePlaylist = async (req, res) => {
    //deletePlaylist api logic here
    try{
        await playlistDelete(req, res);
    }
    catch(err){
        console.log(err.meesage);
    }
};

const addASongToPlaylist = (req, res) => {
    //addASongToPlaylist api logic here
    

};

const removeSongFromPlaylist = (req, res) => {
    //removeSongFromPlaylist api logic here
};

const PlaylistController = {
    createPlaylist,
    deletePlaylist,
    addASongToPlaylist,
    removeSongFromPlaylist
};

module.exports = PlaylistController;