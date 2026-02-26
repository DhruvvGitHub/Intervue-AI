import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

const app = express();


dotenv.config();
const PORT = process.env.PORT || 6000;

app.get("/", (req, res) => {
    res.send("OKOK")
})

app.listen(PORT, ()=>{
    console.log(`Running on port ${PORT}`);
connectDB();

})