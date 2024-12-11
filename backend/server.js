import express from "express";
import dotenv from "dotenv";

import authRoutes from "./routes/authRoutes.js"
import connectToMongoDB from "./db/connectToMongoDB.js";

const app = express();

dotenv.config(); //load environment varriables from .env
const PORT =process.env.PORT || 5000;

app.use(express.json());


// app.get("/", (req, res) => {
//     // Root route http://localhost:5000/
//     res.send("Hello world !");
    
// });

app.use("/api/auth",authRoutes);

app.listen(PORT, () =>{
    connectToMongoDB();
    console.log(`Server running on port ${PORT}`)
});
