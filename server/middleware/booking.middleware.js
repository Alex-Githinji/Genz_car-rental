import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const validateBooking = async (req, res, next) => {
  const {carId } = req.body;
  if ( !carId) {
    return res.status(400).json({ success: false, message: 'User ID and Car ID are required' });
  }

  const car = await prisma.car.findUnique({ where: { id: parseInt(carId, 10) } });

  next();
};
