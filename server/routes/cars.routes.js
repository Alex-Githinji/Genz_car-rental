import { Router } from 'express';
import { addCar } from '../controllers/cars.controllers.js';

const router = Router();

router.post('/', addCar);


export default router;
