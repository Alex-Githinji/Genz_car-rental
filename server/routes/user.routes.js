import { Router } from "express";
import { PrismaClient } from "@prisma/client";
import { useRouter, useLogin } from "../controllers/user.controllers.js";
import { validateInformation } from "../middleware/user.middleware.js";


const router = Router();
const prisma = new PrismaClient();

router.post("/register", validateInformation(prisma), useRouter);
router.post("/login", useLogin);


export default router;
