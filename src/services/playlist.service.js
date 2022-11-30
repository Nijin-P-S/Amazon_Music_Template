const User = require("./../models/User");
const Playlist = require('./../models/Playlist');

async function playlistCreate(req, res){
    try{

        const currUser= await User.findOne({username : req.user.username});
        const playlistObjs = currUser.playlists;

        for(let i=0; i<playlistObjs.length; i++){
            const currPlaylist = await Playlist.findById(playlistObjs[i]);
            if(currPlaylist.name == req.body.name){
                res.setHeader('content-type', 'application/json');
                res.writeHead(400);
                res.end(JSON.stringify(
                {
                    Message : "Playlist with the name already exists for the user",
                }));
                return;
            }
        }

        const playlistObj = {
            name : req.body.name
        };

        const playlist = await Playlist.create(playlistObj);
        await User.updateOne({username : req.user.username},
            {
                $addToSet: {playlists : playlist}
            }
            );
        res.setHeader('content-type', 'application/json');
        res.writeHead(201);
        res.end(JSON.stringify(
            {
                Message : "Playlist added successfully",
            }
        ));
        return;
    }
    catch(err){
        console.log(err.message);
        res.setHeader('content-type', 'application/json');
        res.writeHead(500);
        res.end(JSON.stringify(
            {
                Message : "Error while creating new playlist",
                Error : err.message
            }
        ))
    }
};

async function playlistDelete(req, res){
    try{
        const currUser= await User.findOne({username : req.user.username});
        const playlistObjs = currUser.playlists;
        let reqPlaylistId = null;
        for(let i=0; i<playlistObjs.length; i++){
            const currPlaylist = await Playlist.findById(playlistObjs[i]);
            if(currPlaylist.name == req.body.name){
                reqPlaylistId = currPlaylist._id;
                break;
            }
        }

        if(!reqPlaylistId){
            res.setHeader('content-type', 'application/json');
            res.writeHead(400);
            res.end(JSON.stringify(
                {
                    Message : "Playlist not found",
                }
            ));
            return;
        }

        await User.updateOne({username : currUser.username}, {$pull : {playlists : reqPlaylistId}});
        await Playlist.deleteOne({_id : reqPlaylistId});

        res.setHeader('content-type', 'application/json');
        res.writeHead(201);
        res.end(JSON.stringify(
            {
                Message : "Playlist Removed successfully",
            }
        ));
        return;
    }
    catch(err){
        console.log(err.message);
        res.setHeader('content-type', 'application/json');
        res.writeHead(500);
        res.end(JSON.stringify(
            {
                Message : "Error while deleting  playlist",
                Error : err.message
            }
        ))
    }
}



module.exports = {
    playlistCreate,
    playlistDelete
}