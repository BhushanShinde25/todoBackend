import express from "express";
import connectDB from "./config/dbconnection.js";
import TaskRoute from "./router/todoRoutes.js";
import cors from "cors";
const app = express();

app.use(cors());
app.use(express.json());
connectDB();

app.use("/todo", TaskRoute);

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.listen(3001, () => {
  console.log("server is up and running");
});
