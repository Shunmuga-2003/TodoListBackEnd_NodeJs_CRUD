import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import todoRoutes from "./routes/todoRoute.js";
import Todo from "./models/Todo.js";
import mongoose from "mongoose";

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use("/api/todos", todoRoutes);

// Health check
app.get("/", (req, res) => {
  res.send("MERN Todo API is running 🚀");
});

// Connect to MongoDB, then start server
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB connected");
    app.listen(port, () => {
      console.log(`✅ Server running on http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.error("❌ MongoDB connection failed:", err.message);
  });