import cors from "cors";

export const corsOptions = {
  origin: process.env.CLIENT_URL || "https://quingo-d3dd.vercel.app/", // Replace with your frontend URL
  credentials: true,
  methods: 'GET,POST,OPTIONS',
  allowedHeaders: 'Content-Type, Authorization',
};

export const useCors = cors(corsOptions);
