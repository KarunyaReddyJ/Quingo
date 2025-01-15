import cors from "cors";

export const corsOptions = {
  origin: (origin, callback) => {
    if (origin === "https://quingo-d3dd.vercel.app") {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
};

export const useCors = cors(corsOptions);
