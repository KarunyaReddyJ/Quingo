import { app } from "./app.js";
import dotenv from "dotenv";
import connectDB from "./src/config/db.js";
// Initialize environment variables
dotenv.config();
const PORT = process.env.PORT || 5000;

connectDB()
.then(()=>{
  app.listen(PORT, () =>
    console.log(`Server running on port ${PORT}`)
  );
})