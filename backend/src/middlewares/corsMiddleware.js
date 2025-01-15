import cors from "cors";

export const corsOptions = {
  origin: (origin, callback) => {
    if (origin.includes('quingo') || !origin) {
      callback(null, true);  
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }, 
  credentials: true,
};

export const useCors = cors(corsOptions);
