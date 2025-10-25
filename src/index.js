import express from "express";
import { loadEnvFile } from "node:process";
import apiRouter from "./routes/index.js";
const app = express();

loadEnvFile(".env");
const PORT = process.env.PORT;

app.use("/api", apiRouter);

app.get("/", (req, res) => {
  // console.log(req, res);
});

app.listen(PORT, () => {
  console.log(`listening at ${PORT}`);
});
