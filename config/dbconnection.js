import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const dbURI = process.env.DATABASE_URL;
console.log("🚀 ~ dbURI:", dbURI);
const connectDB = async () => {
  try {
    await mongoose.connect(dbURI);
    console.log("MongoDB connect");
  } catch (error) {
    console.log("🚀 ~ connectDB ~ error:", error);
    process.exit(1);
  }
};

export default connectDB;
