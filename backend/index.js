import express from "express";
import { notFound, errorHandler } from "./src/middlewares/errorMiddleware.js";
import { protect } from "./src/middlewares/authMiddleware.js";
import { isAdmin } from "./src/middlewares/adminMiddleware.js";
import logger from "./src/middlewares/loggerMiddleware.js";
import { corsOptions, useCors } from "./src/middlewares/corsMiddleware.js";
import postRoutes from "./src/routes/postRoutes.js";
import userRoutes from "./src/routes/userRoutes.js";
import dotenv from "dotenv";
import connectDB from "./src/config/db.js";
import authRoutes from './src/routes/authRoutes.js'
import cookieParser from "cookie-parser";


dotenv.config();
const PORT = process.env.PORT || 5000;

const app = express();
app.use(useCors);
app.options("*", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "https://quingo-frontend.vercel.app");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.sendStatus(204); 
});
// Handle OPTIONS requests globally
app.use(express.json()); // Body parser

app.use(cookieParser())
app.use(logger)
app.get('/', (req, res) => {
    res.status(200).json({
      corsOptions,
      corsu:{
        origin: (origin, callback) => {
          if (!origin  || origin.includes('quingo') || 'http://localhost:5173' ) {
            callback(null, true);  
          } else {
            callback(new Error('Not allowed by CORS'));
          }  
        }, 
        credentials: true,
      }
    })
})
app.get('/tiskunna',(req,res)=>{
  res.send({client:process.env.CLIENT_URL,db:process.env.DB_USERNAME})
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
