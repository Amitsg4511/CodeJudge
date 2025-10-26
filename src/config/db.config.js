import mongoose from "mongoose";
import { ENVIRONMENT_TYPE, MONGO_DB_URL } from "./server.config.js";

async function connectDB() {
  try {
    if (ENVIRONMENT_TYPE === "Development") {
      await mongoose.connect(MONGO_DB_URL);
      console.log("Database connected successfully for the Dev Env");
    }
  } catch (error) {
    console.log("Unable to connect database");
    console.error(error);
  }
}
export default connectDB;
