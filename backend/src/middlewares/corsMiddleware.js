import cors from "cors";

export const corsOptions = {
  origin: (Origin,cb)=>{
    if( !Origin ||  Origin.includes('quingo') || Origin.includes('localhost') ){
      return cb(null,true)
    }
    return cb(new Error("Origin isnt right"))
  }, 
  credentials: true,
};

export const useCors = cors(corsOptions);
