import express, { Application } from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";

const app: Application = express();

// Global middleware
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health check
app.get("/health", (_req, res) => {
  res.status(200).json({
    success: true,
    message: "HireFlow API is running",
  });
});

// 404 handler
app.use((_req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

export default app;