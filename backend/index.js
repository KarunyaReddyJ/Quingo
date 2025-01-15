import express from "express";
import { notFound, errorHandler } from "./src/middlewares/errorMiddleware.js";
import { protect } from "./src/middlewares/authMiddleware.js";
import { isAdmin } from "./src/middlewares/adminMiddleware.js";
import logger from "./src/middlewares/loggerMiddleware.js";
import { useCors } from "./src/middlewares/corsMiddleware.js";
import postRoutes from "./src/routes/postRoutes.js";
import userRoutes from "./src/routes/userRoutes.js";
import dotenv from "dotenv";
import connectDB from "./src/config/db.js";
// import adminRoutes from "./src/routes/adminRoutes.js";
import authRoutes from './src/routes/authRoutes.js'
import cookieParser from "cookie-parser";

dotenv.config();
const PORT = process.env.PORT || 5000;

const app = express();
app.use(express.json()); // Body parser
app.use(useCors);
app.use(cookieParser())
app.use(logger)
// API routes
app.get('/', (req, res) => {
    res.status(200).send("sucessfull")
})
app.use("/api/auth", authRoutes)
app.use("/api/posts", protect, postRoutes);
app.use("/api/users", protect, userRoutes);
// app.use("/api/admin",protect,isAdmin,adminRoutes);

// Middleware for handling errors
app.use(notFound);
app.use(errorHandler);

connectDB()
.then(()=>{
  app.listen(PORT, () =>
    console.log(`Server running on port ${PORT}`)
  );
})
// Start server

// Connect to the database


export default app 
