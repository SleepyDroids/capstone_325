import express from "express"
import "dotenv/config";
import cors from "cors"
import connectDB from "./db.js";

const app = express();
app.use(express.json())
app.use(cors())

const port = process.env.PORT || 8080;

app.get("/api", (req, res) => {
    res.send('This is the main API port for this capstone.')
})

app.listen(port, () => {
    console.log(`Listening on ${port}`)
    connectDB();
})