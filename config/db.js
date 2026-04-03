import mongoose  from "mongoose";
import { DEV_DB_URL, PROD_DB_URL } from "./config.js";

const isProduction = process.env.NODE_ENV  == 'production';


const db_url = isProduction ? PROD_DB_URL : DEV_DB_URL
export const DbConnection = async () => {
  try {
    await mongoose.connect(db_url);
    console.log('✅ MongoDB connected successfully');
  } catch (error) {
    console.error('❌ MongoDB connection failed:', error.message);
    process.exit(1); // Exit the app if DB connection fails
  }
};