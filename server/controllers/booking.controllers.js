import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const bookCar = async (req, res) => {
  try {
    const { car, name, email, phoneNumber, startDate, endDate } = req.body;

    // Validate input
    if (!car) {
      return res.status(400).json({ success: false, message: "Car name is required" });
    }
    if (!name) {
      return res.status(400).json({ success: false, message: "Name is required" });
    }
    if (!email) {
      return res.status(400).json({ success: false, message: "Email is required" });
    }
    if (!phoneNumber) {
      return res.status(400).json({ success: false, message: "Phone number is required" });
    }
    if (!startDate) {
      return res.status(400).json({ success: false, message: "Start date is required" });
    }
    if (!endDate) {
      return res.status(400).json({ success: false, message: "End date is required" });
    }

    const formattedStartDate = new Date(startDate).toISOString();
    const formattedEndDate = new Date(endDate).toISOString();

    
    const newBooking = await prisma.booking.create({
      data: {
        name,
        email,
        phoneNumber,
        car,
        startDate: formattedStartDate,
        endDate: formattedEndDate,
      },
    });

    res.status(201).json({ success: true, message: "Car booked successfully", newBooking });
  } catch (e) {
    console.error("Error booking car:", e);
    res.status(500).json({ success: false, message: e.message });
  }
};
