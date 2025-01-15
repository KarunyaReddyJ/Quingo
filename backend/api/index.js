import { app } from "./app.js";
import dotenv from "dotenv";
import connectDB from "../src/config/db.js";
// Initialize environment variables
dotenv.config();
const PORT = process.env.PORT || 5000;

// connectDB()
// .then(()=>{
//   app.listen(PORT, () =>
//     console.log(`Server running on port ${PORT}`)
//   );
// })

connectDB().then(() => {
  console.log("Database connected successfully");
});

// Export the app as a Vercel serverless function
export default (req, res) => {
  app(req, res); // Call the app function that handles routes
};
