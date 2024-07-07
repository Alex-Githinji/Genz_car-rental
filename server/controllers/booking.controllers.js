import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const bookCar = async (req, res) => {
  try {
    const { carId } = req.body;
    
    const newBooking = await prisma.booking.create({
      data: {
        carId: parseInt(carId, 10),
      },
    });

    res.status(201).json({ success: true, message: "Car booked successfully", newBooking });
  } catch (e) {
    console.error("Error booking car:", e);
    res.status(500).json({ success: false, message: e.message });
  }
};
