import dotenv from "dotenv";
dotenv.config();


export const DEV_DB_URL = process.env.DEV_DB_URL
export const DEV_PORT  = process.env.DEV_PORT;
export const DEV_ORIGIN = process.env.DEV_ORIGIN;


export const PROD_ORIGIN = process.env.PROD_ORIGIN;
export const PROD_DB_URL = process.env.PROD_DB_URL;
export const PROD_MANAGER_REGISTRATION_CODE   = process.env.PROD_MANAGER_REGISTRATION_CODE
export const PROD_JWT_SECRET = process.env.PROD_JWT_SECRET