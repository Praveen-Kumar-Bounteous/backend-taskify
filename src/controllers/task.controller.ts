import { Request, Response } from "express";
import * as TaskService from "../services/task.service";

interface IdParams {
  id: string;
}

export const createTask = async (req: Request, res: Response) => {
  try {
    const task = await TaskService.createTask(req.body);
    res.status(201).json(task);
  } catch {
    res.status(500).json({ message: "Failed to create task" });
  }
};

export const getTasks = async (_req: Request, res: Response) => {
  const tasks = await TaskService.getAllTasks();
  res.json(tasks);
};

export const getTask = async (
  req: Request<IdParams>,
  res: Response
) => {
  const task = await TaskService.getTaskById(req.params.id);
  res.json(task);
};

export const updateTask = async (
  req: Request<IdParams>,
  res: Response
) => {
  const task = await TaskService.updateTask(req.params.id, req.body);
  res.json(task);
};

export const deleteTask = async (
  req: Request<IdParams>,
  res: Response
) => {
  await TaskService.deleteTask(req.params.id);
  res.json({ message: "Task deleted" });
};