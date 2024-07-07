import { Router } from 'express';
import { addCar, getAllCars } from '../controllers/cars.controllers.js';

const router = Router();

router.post('/', addCar);
router.get('/', getAllCars);

export default router;
