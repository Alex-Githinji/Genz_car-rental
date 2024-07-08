import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const addCar = async (req, res) => {  
  try {
    const { name, description, price } = req.body;
    const newCar = await prisma.cars.create({
      data: {
        name,
        description,
        price,
      },
    });
    res.status(201).json({ success: true, message: "Car added successfully", newCar });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

