import express, { Request, Response } from "express";
const router = express.Router();
import TodoModel from "../model";
import { ITodo } from "../model";

router.get("/api/todos", async (req: Request, res: Response) => {
  try {
    const todos = await TodoModel.find();
    res.status(200).json(todos);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

router.post("/api/todos", async (req: Request, res: Response) => {
  console.log(req.body);
  const { content, isDone } = req.body;
  try {
    const newTodo = new TodoModel({ content, isDone });
    await newTodo.save();
    res.status(201).json(newTodo);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

router.delete("/api/todos/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await TodoModel.findByIdAndDelete(id);
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});
router.post("/api/todos/isDone/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const todo = await TodoModel.findById(id);
    const isDone = todo?.isDone;
    if (typeof todo?.isDone !== "undefined") {
      todo.isDone = !isDone;
    }
    const updatedTodo = await todo?.save();
    res.status(200).json(updatedTodo);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

export default router;
