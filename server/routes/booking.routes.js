import { Router } from "express";
import { bookCar } from "../controllers/booking.controllers.js";
import { validateBooking } from "../middleware/booking.middleware.js"; // Import the middleware

const router = Router();

router.post("/book", bookCar); // Use the middleware before the controller

export default router;
