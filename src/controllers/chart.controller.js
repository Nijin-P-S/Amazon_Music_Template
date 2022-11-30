
const {getPopularSongs, recentlyAddedSongs} = require('../services/chart.service')

const getMostPopularSongs = async (req, res) => {
    try{
        await getPopularSongs(res, res);
    }
    catch(err){
        console.log(err.message);
    }
};


const getRecentlyAddedSongs = async (req, res) => {
    //getRecentlyAddedSongs api logic here
    try{
        await recentlyAddedSongs(req, res);
    }
    catch(err){
        console.log(err.message);
    }
};



const ChartController = {
    getMostPopularSongs,
    getRecentlyAddedSongs
};

module.exports = ChartController;