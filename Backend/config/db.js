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
    if (process.env.NODE_ENV !== 'production') {
      process.exit(1);
    } else {
      console.warn("Running in production without database connection. Some features may not work.");
    }
  }
}