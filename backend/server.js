const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");
const emailRoutes = require("./routes/emailRoutes");


dotenv.config();
 
const app = express();
connectDB();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) =>
  res.send('<h1>Welcome to "The Email Builder Application" Backend </h1>')
);
app.use("/api/email", emailRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));