import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import publishRouter from "./publisher";

dotenv.config();

const app = express();
const port = process.env.PORT!;

app.use(express.json());
app.use(cors());
app.use("/", publishRouter);

app.listen(port, () => {
  console.log(`The server is running at port : ${port}`);
});
