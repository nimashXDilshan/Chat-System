import express from "express";
import dotenv from "dotenv";
import cookieParser  from "cookie-parser";

import authRoutes from "./routes/authRoutes.js"
import messageRoutes from  "./routes/messageRoutes.js";
import usersRoutes from  "./routes/userRoutes.js";


import connectToMongoDB from "./db/connectToMongoDB.js";

const app = express();

dotenv.config(); //load environment varriables from .env
const PORT =process.env.PORT || 5000;

app.use(express.json());
app.use(cookieParser());


// app.get("/", (req, res) => {
//     // Root route http://localhost:5000/
//     res.send("Hello world !");
    
// });

app.use("/api/auth",authRoutes);
app.use("/api/message",messageRoutes);
app.use("/api/users",usersRoutes);

app.listen(PORT, () =>{
    connectToMongoDB();
    console.log(`Server running on port ${PORT}`)
});
