import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

//create an express app
const app = express();

//Database Connection
await mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log("Connected to Database");
}).catch((err)=>{
    console.log(err)
});

// Use Global middleware
app.use(cors());
app.use(express.json());

// Server Listener
app.listen(3700, () => {
    console.log("Sever is Running on port 3700");
});