import express from "express";
import UserRouter from './routes/user.routes.js';
import carsRouter from './routes/cars.routes.js';
import cors from 'cors';
import bookingRouter from './routes/booking.routes.js'

const app = express();

app.use(cors({
    origin: "http://localhost:5173"
}));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/user", UserRouter);
app.use("/cars", carsRouter);
app.use("/booking", bookingRouter);



app.listen(3001, () => {
    console.log("Server is running on port 3001");
});
