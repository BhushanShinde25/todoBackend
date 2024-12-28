import express from "express";
import {
  addTask,
  fetchTask,
  updateTask,
  deleteTask,
  fetchALLTask,
} from "../controller/todoController.js";

const router = express.Router();
router.get("/", fetchALLTask);
router.post("/", addTask);
router.put("/", updateTask);
router.delete("/", deleteTask);

export default router;
