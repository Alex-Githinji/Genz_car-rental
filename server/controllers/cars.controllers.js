import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const addCar = async (req, res) => {
  try {
    const { name, image, description, price, booked } = req.body;
    const newCar = await prisma.car.create({
      data: {
        name,
        image,
        description,
        price,
        booked,
      },
    });
    res.status(201).json({ success: true, message: "Car added successfully", newCar });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

