import mongoose from "mongoose"

export const dbConnect = async () => {
  try {
    const mongoUri = process.env.MONGOURI || "mongodb://localhost:27017/NewsPortal";
    const conn = await mongoose.connect(mongoUri);
    if (conn) {
      console.log("DB connected successfully");
    }
  } catch (error) {
    console.error("Database connection failed:", error.message);
    process.exit(1);
  }
}