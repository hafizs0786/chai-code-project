import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = () => { 
    mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`).then( connectionInstance => {
        console.log(`MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);
    }).catch (err => {
        console.log("MONGODB connection Failed:",err);
        process.exit(1)
    });
}

export default connectDB;