import { Router } from "express";
import { bookCar } from "../controllers/booking.controllers.js";
import { validateBooking } from "../middleware/booking.middleware.js";
import bookingRouter from "../routes/booking.routes.js"; 

const router = Router();

router.post("/book", bookCar); 

export default router;
