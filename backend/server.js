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

app.get('/',(req,res)=>{
  res.send({
    success:true,
    message:"project is live"
  })
})
app.use("/api/email", emailRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));