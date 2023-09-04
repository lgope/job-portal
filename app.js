import express from "express";
import morgan from "morgan";
import cors from "cors";
import path from "path";
import compression from "compression";

import globalErrorHandler from "./controllers/errorController.js";
import AppError from "./utils/appError.js";
import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import jobRoutes from "./routes/jobRoutes.js";

const app = express();

// Implement CORS
app.use(cors());

app.options("*", cors());

// Development logging
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// Body Parser Middleware
app.use(express.json());

// compress all responses
app.use(compression());

app.get("/", (req, res) =>
  res.json({
    message: "Hello World! 👋🏻 From JOB PORTAL API!",
    Status: 200,
  })
);

// auth Routes
app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);
app.use("/api/job", jobRoutes);

app.all("*", (req, res, next) => {
  next(
    new AppError(`Sorry! Can't find ${req.originalUrl} on this server!`, 404)
  );
});

app.use(globalErrorHandler);

export default app;
