import jwt from "jsonwebtoken";
import User from "../models/User.js";

// Protect routes (authenticated users only)
export const protect = async (req, res, next) => {
  let token;
  
  // Check for token in Authorization header
  if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
    try {
      token = req.headers.authorization.split(" ")[1];
     
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      
      // Attach user to the request object
      req.user = await User.findById(decoded.id).select("-password");
      
      next();
    } catch (error) {
      res.status(401).json({ message: "Not authorized, invalid token" ,error});
    }
  }

  if (!token) {
    res.status(401).json({ message: "Not authorized, no token" });
  }
};
