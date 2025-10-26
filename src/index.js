import express from "express";
import apiRouter from "./routes/index.js";
import errorHandler from "./utils/errorHandler.js";
import { PORT } from "./config/server.config.js";
import connectDB from "./config/db.config.js";
import mongoose from "mongoose";

const app = express();
app.use(errorHandler);
app.use("/api", apiRouter);

app.get("/", (req, res) => {
  // console.log(req, res);
});

app.listen(PORT, () => {
  console.log(`listening at ${PORT}`);
  // throw new BaseError("Listing", 404, "bad request");
  connectDB();
  const Cat = mongoose.model("Cat", { name: String });
  const kitty = new Cat({ name: "Zildjian" });
  kitty.save().then(() => console.log("meow"));
});
