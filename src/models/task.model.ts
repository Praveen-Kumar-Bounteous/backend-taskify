import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  tag: { type: String },
  status: { type: String, default: "pending" },
  createdAt: { type: Number, default: Date.now },
  deadline: { type: Number },
  reminded: { type: Boolean, default: false }
});

export const TaskModel = mongoose.model("Task", taskSchema);