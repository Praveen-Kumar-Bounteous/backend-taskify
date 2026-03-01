import dotenv from "dotenv";
import app from "./app";
import connectDB from "./config/db";


dotenv.config();

const PORT = process.env.PORT || 5000;

connectDB();

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log("/api/tasks - GET(/) - To list all tasks");
  console.log("/api/tasks - POST(/) - To add tasks");
  console.log("/api/tasks - GET(/:id) - To fetch task by ID");
  console.log("/api/tasks - PUT(/:id) - To update task by ID");
  console.log("/api/tasks - DELETE(/:id) - To delete/remove task by ID");
});