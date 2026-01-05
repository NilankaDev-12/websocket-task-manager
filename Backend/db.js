import mongoose from "mongoose";

const mongoURI =
  process.env.MONGO_URI || "mongodb://localhost:27017/mydatabase"; // default for local dev

const connectDB = async () => {
  try {
    console.log("Connecting to MongoDB:", mongoURI);
    await mongoose.connect(mongoURI);
    console.log("MongoDB connected ✅");
  } catch (error) {
    console.error("MongoDB connection error ❌:", error);
    process.exit(1); // exit container if DB fails
  }
};

export default connectDB;
