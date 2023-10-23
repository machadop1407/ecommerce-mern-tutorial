import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { userRouter } from "./routes/user";
import { productRouter } from "./routes/product";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/auth", userRouter);
app.use("/products", productRouter);

mongoose.connect(
  "mongodb+srv://machadop1407:mypassword@cluster0.jqxu4ha.mongodb.net/Cluster0"
);

app.listen(3001, () => console.log("Server started"));
