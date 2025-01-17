import cors from "cors";

export const corsOptions = {
  origin: 'https://quingo-d3dd.vercel.app/', 
  credentials: true,
};

export const useCors = cors(corsOptions);
