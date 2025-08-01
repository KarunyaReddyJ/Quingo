import cors from "cors";

export const corsOptions={
  origin:"https://quingo-frontend.vercel.app",
  credentials:true
}
export const useCors=cors({origin:["https://quingo-frontend.vercel.app",'http://localhost:5173','http://127.0.0.1:5500/'],
  credentials:true})