import jwt from "jsonwebtoken";
import User from "../models/User.js";

export const authValidation = async (req, res, next) => {
  console.log("Auth started")
  try {
    let token;

    // 1️⃣ Check Authorization header
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      token = req.headers.authorization.split(" ")[1];
    }

    if (!token) {
      return res.status(401).json({
        message: "Access denied. Unauthorized User."
      });
    }

    // 2️⃣ Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // 3️⃣ Check if user still exists
    const user = await User.findById(decoded.userId).select("-password");

    if (!user) {
      return res.status(401).json({
        message: "User no longer exists."
      });
    }

    // 4️⃣ Attach user to request
    req.user = user;
    next();
  } catch (error) {
    if (error.name === "TokenExpiredError") {
      return res.status(401).json({
        message: "Token expired. Please login again."
      });
    }

    return res.status(401).json({
      message: "Invalid token."
    });
  }
};
