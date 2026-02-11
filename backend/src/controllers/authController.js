import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// ================= SIGNUP =================
export const signup = async (req, res) => {
  console.log("sign up started");
  try {
    const { name, mobile, password } = req.body;

    if (!name || !mobile || !password) {
      return res.status(400).json({
        message: "Name, mobile and password are required"
      });
    }

    const existingUser = await User.findOne({ mobile });
    if (existingUser) {
      return res.status(400).json({
        message: "Mobile number already registered"
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      mobile,
      password: hashedPassword
    });

    res.status(201).json({
      message: "Signup successful",
      user: {
        id: user._id,
        name: user.name,
        mobile: user.mobile
      }
    });

  } catch (error) {
    res.status(500).json({
      message: "Signup failed",
      error: error.message
    });
  }
};

// ================= LOGIN =================
export const login = async (req, res) => {
  try {
    const { mobile, password } = req.body;

    if (!mobile || !password) {
      return res.status(400).json({
        message: "Mobile and password are required"
      });
    }

    const user = await User.findOne({ mobile });
    if (!user) {
      return res.status(400).json({
        message: "Invalid mobile or password"
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({
        message: "Invalid mobile or password"
      });
    }

    const token = jwt.sign(
      { userId: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.json({
      message: "Login successful",
      token,
      user: {
        id: user._id,
        name: user.name,
        mobile: user.mobile,
        email: user.email || "",
        gender: user.gender || "",
      }
    });

  } catch (error) {
    res.status(500).json({
      message: "Login failed",
      error: error.message
    });
  }
};


export const updateProfile = async (req, res) => {
  console.log("updation start")
  try {
    const userId = req.user._id; // from auth middleware
    const { name, email, gender } = req.body;

    const allowedGenders = ["male", "female", "other"];

    if (gender && !allowedGenders.includes(gender)) {
      return res.status(400).json({
        message: "Invalid gender value"
      });
    }

    const updateData = {};

    if (name) updateData.name = name;
    if (email) updateData.email = email;
    if (gender) updateData.gender = gender;

    const updatedUser = await User.findByIdAndUpdate(
      userId,
      updateData,
      { new: true, runValidators: true }
    );

    res.json({
      message: "Profile updated successfully",
      user: {
        id: updatedUser._id,
        name: updatedUser.name,
        mobile: updatedUser.mobile,
        email: updatedUser.email,
        gender: updatedUser.gender
      }
    });

  } catch (error) {
    res.status(500).json({
      message: "Profile update failed",
      error: error.message
    });
  }
};
