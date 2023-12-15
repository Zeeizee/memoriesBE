import express from "express"
import cors from "cors"
import bodyParser from "body-parser"
import mongoose from "mongoose"
import songsRoutes from './routes/songs.js'
import postsRoutes from './routes/post.js'
import dotenv from 'dotenv/config'
const app=express();


app.use(bodyParser.json({limit:'30mb',extended:true}))
app.use(bodyParser.urlencoded({limit:'30mb',extended:true}))
app.use(cors());
app.use('/songs',songsRoutes);
app.use('/posts',postsRoutes);
app.get('/',(req,res)=>{
    res.send("Welcome to Home webpage");
})

const CONNECTION_URL="mongodb+srv://zenizee:zeni123@cluster0.geb2h.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
const PORT=process.env.PORT || 5000;



mongoose.connect(CONNECTION_URL,{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>app.listen(PORT,()=>console.log(`server running at port ${PORT}`)))
.catch(err=>{console.log(`${err} server not connected`)})


