import express from "express";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/User/userRoutes.js"

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// routes
app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);

app.patch("/api/user", (req, res)=>{
  res.send("hello");
});

// root test route
app.get("/", (req, res) => {
  res.status(200).json({
    message: "API running successfully"
  });
});

// 404 handler (very useful for debugging)
app.use((req, res) => {
  res.status(404).json({
    message: "Route not found"
  });
});

export default app;
