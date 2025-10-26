import { loadEnvFile } from "node:process";
loadEnvFile(".env");
const PORT = process.env.PORT;
const MONGO_DB_URL = process.env.MONGO_DB_URL;
const ENVIRONMENT_TYPE = process.env.ENVIRONMENT_TYPE;
export { PORT, MONGO_DB_URL, ENVIRONMENT_TYPE };
