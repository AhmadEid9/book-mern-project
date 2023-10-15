import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import booksRoute from "./routes/booksRoute.js";
import cors from "cors";

const app = express()

app.use(express.json())

app.use(cors(
    // {
    //     origin: 'http://localhost:5173/',
    //     methods: ['GET', 'POST', 'PUT', 'DELETE'],
    //     allowedHeaders: ['Contetnt-type'],
    // }
))

app.use('/books', booksRoute)

app.get('/', (req, res) =>{
    console.log(req);
    return res.status(234).send("Welcome To MERN website")
})


mongoose.connect(mongoDBURL).then(() => {
    console.log("App connected to database");
    
    app.listen(PORT, () => {
        console.log(`App listening to port: ${PORT}`);
    });

    
    
}).catch((err) => {
    console.log(err);
})