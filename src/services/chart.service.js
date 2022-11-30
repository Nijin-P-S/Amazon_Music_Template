const Song = require('../models/Song');

async function getPopularSongs(req, res){
    try{
        const songs = await Song.find().sort({played_count: -1}).limit(1);
        res.setHeader('content-type', 'application/json');
        res.writeHead(500);
        res.end(JSON.stringify(
            {
               songs
            }
        ));
        return;
    }
    catch(err){
        res.setHeader('content-type', 'application/json');
        res.writeHead(500);
        res.end(JSON.stringify(
            {
                message : "Error occured while fetching popular songs",
                Error : err.message
            }
        ));
        return;
    }
}


async function recentlyAddedSongs(req, res){
    try{
        const songs = await Song.find().sort({createdAt: -1}).limit(1);
        res.setHeader('content-type', 'application/json');
        res.writeHead(500);
        res.end(JSON.stringify(
            {
               songs
            }
        ));
        return;
    }
    catch(err){
        res.setHeader('content-type', 'application/json');
        res.writeHead(500);
        res.end(JSON.stringify(
            {
                message : "Error occured while fetching recently added  songs",
                Error : err.message
            }
        ));
        return;
    }
};

module.exports = {
    getPopularSongs,
    recentlyAddedSongs
}