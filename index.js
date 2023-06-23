import express from "express";
import mongoose from "mongoose";
import morgan from "morgan";
import router from "./route/UserRoutes.js";



const app =express();

app.use(morgan('dev'));
app.use(express.json());

app.use('/api/v1',router);

mongoose.connect('mongodb+srv://annusingh:anusingh58@cluster0.md93vry.mongodb.net/fakestoreapi')
.then(()=>console.log("db connected"))
.catch((errror)=>console.log("db error =>",err))

app.listen(8000,()=>console.log("working on port 5000"))