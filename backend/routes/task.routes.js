import express from "express";
import {
  createTask,
  getTasks,
  markTaskDone,
} from "../controllers/task.controller.js";

const router = express.Router();

router.post("/task", createTask);
router.get("/task", getTasks);
router.put("/task/:id", markTaskDone);

export default router;
