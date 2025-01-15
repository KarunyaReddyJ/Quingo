import cors from "cors";

export const corsOptions = {
  origin: process.env.CLIENT_URL || "http://localhost:5173", // Replace with your frontend URL
  credentials: true,
};

export const useCors = cors(corsOptions);
