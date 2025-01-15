import jwt from "jsonwebtoken";
import User from "../models/User.js";

// Protect routes (authenticated users only)
export const protect = async (req, res, next) => {
  let token;
  console.log('entered protect')
  // Check for token in Authorization header
  if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
    try {
      token = req.headers.authorization.split(" ")[1];
      console.log('token',token)
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      console.log('inside protect',decoded,token)
      // Attach user to the request object
      req.user = await User.findById(decoded.id).select("-password");
      console.log('exit protect')
      next();
    } catch (error) {
      res.status(401).json({ message: "Not authorized, invalid token" ,error});
    }
  }

  if (!token) {
    res.status(401).json({ message: "Not authorized, no token" });
  }
};
