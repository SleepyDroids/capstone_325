import "dotenv/config"
import mongoose from "mongoose"

const connectionString = process.env.ATLAS_URI;

export default async function connectDB() {
    try {
        await mongoose.connect(connectionString);
        console.log('mongoDB is connected')
    } catch (e) {
        console.error(e)
    }
}