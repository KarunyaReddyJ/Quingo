import cors from "cors";

export const corsOptions = {
  origin: (Origin,cb)=>{
    console.log('origin made request',Origin)
    console.log('includes localhost ',Origin.includes('localhost'));
    console.log('includes quingo ',Origin.includes('quingo'));
    if( !Origin ||  Origin.includes('quingo') || Origin.includes('localhost') ){
      return cb(null,true)
    }
    return cb(new Error("Origin isnt right"))
  }, 
  credentials: true,
};

export const useCors = cors(corsOptions);
