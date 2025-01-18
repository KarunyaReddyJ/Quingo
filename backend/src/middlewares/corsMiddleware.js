import cors from "cors";

export const corsOptions = {
  origin: (Origin,cb)=>{
    
    return cb(null,true)
  }, 
  credentials: true,
};

export const useCors = cors(corsOptions);
