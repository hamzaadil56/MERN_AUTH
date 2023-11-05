import mongoose from "mongoose";

async function connectDB() {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}`
    );
    console.log(`MongoDB running on`, connectionInstance.connection.host);
  } catch (error) {
    console.log("MongoDB Connection Failed", error);
    process.exit(1);
  }
}

export default connectDB;
