import express from "express"
import "dotenv/config";
import cors from "cors"
// importing DB connection
import connectDB from "./db.js";

const app = express();

// port access
const port = process.env.PORT || 8080;

import characterRouter from "./routes/characters.js"

// setting up necessary middleware
app.use(express.json())
app.use(cors())

// router
app.use("/characters", characterRouter);

// main / default API route
app.get("/api", (req, res) => {
    res.send('This is the main API port for this capstone.')
})

app.listen(port || 8080, () => {
    console.log(`Listening on ${port || 8080}`)
    connectDB();
})