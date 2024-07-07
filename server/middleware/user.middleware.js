

export const validateInformation = (prisma) => {
    return async (req, res, next) => {
        const { firstName, lastName, email, password, phoneNumber } = req.body;
        if (!firstName) return res.status(400).json({ message: "First name required" });
        if (!lastName) return res.status(400).json({ message: "Last name required" });
        if (!email) return res.status(400).json({ message: "Email required" });
        if (!password) return res.status(400).json({ message: "Password required" });
        if (!phoneNumber) return res.status(400).json({ message: "Phone number required" });

        try {
            const userEmail = await prisma.user.findFirst({
                where: { email: email }
            });
            if (userEmail) return res.status(400).json({ success: false, message: "Email already exists" });
            next();
        } catch (e) {
            console.error("Error in validation middleware:", e);
            res.status(500).json({ success: false, message: e.message });
        }
    };
};
