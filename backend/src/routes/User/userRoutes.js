import express from "express";
import { updateProfile } from "../../controllers/authController.js";
import { authValidation } from "../../middlewares/authMiddleware.js";
const router = express.Router();

// update profile
router.patch("/update-profile", authValidation, updateProfile);

export default router;