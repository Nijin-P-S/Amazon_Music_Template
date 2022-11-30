require("dotenv").config({path:__dirname+'./../../.env'});
const express = require("express");
const cors = require("cors");
const {createConnection} = require("./configs/db.config");
const app = express();

app.use(express.json());
app.use(cors());

//Initializing all routers here
const  userRouter = require('./routes/user');
const authRouter = require('./routes/auth');
const chartRouter = require('./routes/chart');
const playlistRouter = require('./routes/playlist');
const songRouter = require('./routes/songs');

//Redirecting
app.use('/user', userRouter);
app.use('/playlist', playlistRouter);
app.use('/auth', authRouter);
app.use('/chart', chartRouter);
app.use('/song', songRouter);



const PORT = process.env.PORT || 8080; // port at which server listening

app.listen(
  PORT,
  async ()=>{
    await createConnection();
    console.log(`server started in ${process.env.NODE_ENV} mode at port ${PORT}`);
  }
  
);


