import userRouter from "./routes/user.js";
import express from "express";
import {config} from "dotenv"
export const app = express();


config({
    path:"./data/config.env"
})


//using middle ware
app.use(express.json());
app.use("/users" , userRouter);



app.get("/", (req, res) => {
  res.send("hi");
});


