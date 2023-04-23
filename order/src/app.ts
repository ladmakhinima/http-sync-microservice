import "reflect-metadata";
import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import * as typedi from "typedi";

import { OrderRouter } from "./order/order.router";
import { ConsumerRouter } from "./consumer/consumer.router";

dotenv.config();

const app = express();
const port = process.env.PORT!;
const dbURL = process.env.DB_URL!;
const dbName = process.env.DB_NAME!;

mongoose.connect(dbURL, { dbName });
mongoose.connection.on("open", () => {
  console.log("The database is connecting to application");
});
mongoose.set({ debug: true });

app.use(express.json());
app.use(cors());

app.use("/api/order", typedi.Container.get(OrderRouter).config());
app.use("/event", typedi.Container.get(ConsumerRouter).config());

app.use(
  (error: Error, request: Request, response: Response, next: NextFunction) => {
    return response.json({ message: error.message });
  }
);

app.listen(port, () => {
  console.log(`The server is running at port : ${port}`);
});
