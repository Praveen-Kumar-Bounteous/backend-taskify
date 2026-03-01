import { TaskModel } from "../models/task.model";

export const createTask = async (data: any) => {
  return await TaskModel.create(data);
};

export const getAllTasks = async () => {
  return await TaskModel.find();
};

export const getTaskById = async (id: string) => {
  return await TaskModel.findById(id);
};

export const updateTask = async (id: string, data: any) => {
  return await TaskModel.findByIdAndUpdate(id, data, { new: true });
};

export const deleteTask = async (id: string) => {
  return await TaskModel.findByIdAndDelete(id);
};