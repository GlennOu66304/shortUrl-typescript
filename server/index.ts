import express, { Express, Request, Response } from "express";

import bodyParser from "body-parser";

import shortUrlRouter from "./routes/shortUrl/shortUrl";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
const app: Express = express();
app.use(bodyParser.json());
app.use(cors())
// connect the mongodb database
dotenv.config();
const url = process.env.MONGO_URI as string;
// const PORT = process.env.PORT;
mongoose
  .connect(url, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
    // useFindAndModify: false,
  })
  .then(() => console.log("MongoDB database Connected"))
  .catch((err) => console.log(err));

console.log(url);

// const port = process.env.PORT;
const port = 8088;

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

// routes area
app.use("/", shortUrlRouter); //api routes

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});
