import { Router } from "express";
import { PrismaClient } from "@prisma/client";
import { useRouter, useLogin } from "../controllers/user.controllers.js";
import { validateInformation } from "../middleware/user.middleware.js";
import bookingRouter from "../routes/booking.routes.js"; // Correct import path for booking routes

const router = Router();
const prisma = new PrismaClient();

router.post("/register", validateInformation(prisma), useRouter);
router.post("/login", useLogin);
router.use("/booking", bookingRouter); // Use booking router for /booking route

export default router;
