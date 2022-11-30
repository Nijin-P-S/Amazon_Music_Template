const Song = require('./../models/Song');

async function songAdd (req, res){
    try{
        const song = {
            name : req.body.name,
            genre : req.body.genre,
            singer : req.body.singer
        };

        await Song.create(song);

        res.setHeader('content-type', 'application/json');
        res.writeHead(201);
        res.end(JSON.stringify(
            {
                message : "Song successfully added"
            }
        ));
        return;
    }
    catch(err){
        res.setHeader('content-type', 'application/json');
        res.writeHead(500);
        res.end(JSON.stringify(
            {
                message : err.message
            }
        ));
    }
}


async function songRemove(req, res){
    try{
        await Song.deleteOne({name : req.body.name, genre : req.body.genre, singer : req.body.singer});
        res.setHeader('content-type', 'application/json');
        res.writeHead(200);
        res.end(JSON.stringify(
            {
                message : "Successfully removed the song"
            }
        ));
    }catch(err){
        res.setHeader('content-type', 'application/json');
        res.writeHead(500);
        res.end(JSON.stringify(
            {
                message : err.message
            }
        ));
    }
}

async function songSearchByName(req, res){
    try{
        const song = await Song.findOne({name : req.body.name});
        if(!song){
            res.setHeader('content-type', 'application/json');
            res.writeHead(400);
            res.end(JSON.stringify(
                {
                    message : "No song found"
                }
            ));
            return;
        }
        Song.findOneAndUpdate({name : req.body.name}, {$inc : {played_count : 1}}).exec();
        res.setHeader('content-type', 'application/json');
        res.writeHead(200);
        res.end(JSON.stringify(
            {
                song
            }
        ));
        return;
    }
    catch(err){
        res.setHeader('content-type', 'application/json');
        res.writeHead(500);
        res.end(JSON.stringify(
            {
                message : err.message
            }
        ));
        return;
    }
}

async function songSearchByGenre(req, res){
    try{
        const songs = await Song.find({genre : req.body.genre});
        if(!songs.length){
            res.setHeader('content-type', 'application/json');
            res.writeHead(400);
            res.end(JSON.stringify(
                {
                    message : "No song found"
                }
            ));
        }
        res.setHeader('content-type', 'application/json');
        res.writeHead(200);
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
                message : err.message
            }
        ));
        return;
    }
}


module.exports = {
    songAdd,
    songRemove,
    songSearchByName,
    songSearchByGenre
}