import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
const mongourl = process.env.MONGOURL;

if (!mongourl) {
  throw new Error('MONGOURL environment variable is not defined');
}
export const connectDB = async() : Promise <void> => {
    try {
        await mongoose.connect(mongourl);
        console.log("Database Connected!");
    } catch (e) {
        console.log("Error in connecting to DATABASE", e);
        process.exit(1);
    }
}