import bcrypt from 'bcrypt';
import { PrismaClient } from "@prisma/client";
// import { jwt } from 'jsonwebtoken';

const prisma = new PrismaClient();

export const useRouter = async (req, res) => {
    try {
        const { firstName, lastName, email, phoneNumber, password } = req.body;
        const hashedPassword = bcrypt.hashSync(password, 10);
        const newUser = await prisma.user.create({
            data: {
                firstName,
                lastName,
                email,
                phoneNumber: parseInt(phoneNumber, 10),
                password: hashedPassword,
            }
        });

        res.status(201).json({ success: true, message: "User registered successfully", newUser });
    } catch (e) {
        console.error("Error registering user:", e);
        res.status(500).json({ success: false, message: e.message });
    }
};

export const useLogin = async (req, res) => {
    const { email, password } = req.body;
    try {
  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) {
    return res.status(401).json({ success: false, message: "Invalid email or passwor" });
    }
    const isPasswordValid = bcrypt.compareSync(password, user.password);
    if (!isPasswordValid) {
        // jwt.sign(user, process.env.)
        return res.status(401).json({ success: false, message: "Invalid email or password" });
        }
        res.status(200).json({ success: true, message: "User logged in successfully",
        user });
        } catch (e) {
            console.error("Error logging in user:", e);
            res.status(500).json({ success: false, message: e.message });
            }
};

