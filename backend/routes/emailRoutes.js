// const express = require("express");
// const router = express.Router();
// const multer = require("multer");
// const path = require("path");
// const cloudinary = require("cloudinary");

// const emailController = require("../Controllers/emailController");

// // const storage = multer.diskStorage({
// //   destination: (req, file, cb) => {
// //     cb(null, "uploads/");
// //   },
// //   filename: (req, file, cb) => {
// //     cb(null, Date.now() + path.extname(file.originalname));
// //   },
// // });

// cloudinary.v2.config({
//   cloud_name: process.env.CLOUD_NAME || "dlw5ad03j",
//   api_key: process.env.CLOUD_API_KEY || "894392721939297",
//   api_secret: process.env.CLOUD_API_SECRET || "ghAtltweXUmNH5vzKl1HDE5fsHU",
// });

// // Multer Configuration for Image Uploads
// const storage = multer.diskStorage({}); 
// const upload = multer({ storage });

// // const upload = multer({ storage });

// router.get("/getEmailLayout", emailController.getEmailLayout);
// router.post("/uploadImage", upload.single("image"), emailController.uploadImage);
// router.post("/uploadEmailConfig", emailController.uploadEmailConfig);
// router.post("/renderAndDownloadTemplate", emailController.renderAndDownloadTemplate);

// module.exports = router;


const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const emailController = require("../controllers/emailController");
const cloudinary = require("cloudinary");


cloudinary.v2.config({
  cloud_name: process.env.CLOUD_NAME, 
  api_key: process.env.CLOUD_API_KEY, 
  api_secret: process.env.CLOUD_API_SECRET 
});
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "uploads/");
//   },
//   filename: (req, file, cb) => {
//     cb(null, Date.now() + path.extname(file.originalname));
//   },
// });

const storage = multer.diskStorage({}); 


const upload = multer({ storage });

router.get("/getEmailLayout", emailController.getEmailLayout);
router.post("/uploadImage", upload.single("image"), emailController.uploadImage);
router.post("/uploadEmailConfig", emailController.uploadEmailConfig);
router.post("/renderAndDownloadTemplate", emailController.renderAndDownloadTemplate);

module.exports = router;
