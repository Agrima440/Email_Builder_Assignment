
// // src/components/ImageUploader.js
// import React from "react";
// import axios from "axios";
// import "./ImageUploader.css";

// const ImageUploader = ({ formData, setFormData }) => {
//   const handleImageUpload = async (e) => {
//     const file = e.target.files[0];
//     const data = new FormData();
//     data.append("image", file);
//     const res = await axios.post("http://localhost:5000/api/email/uploadImage", data);
//     setFormData({ ...formData, imageUrl: res.data.imageUrl });
//   };
// console.log("form data",formData)
//   return (
//     <div className="image-uploader">
//       <input type="file" onChange={handleImageUpload} className="file-input" />
//       {formData.imageUrl && <img src={`http://localhost:5000${formData.imageUrl}`} alt="Preview" className="image-preview" />}
//     </div>
//   );
// };

// export default ImageUploader;

import React, { useState } from "react";
import axios from "axios";

const ImageUploader = ({ formData, setFormData }) => {
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    const data = new FormData();
    data.append("image", file);

    try {
      setUploading(true);
      setError(""); // Clear previous errors
      const res = await axios.post("http://localhost:5000/api/email/uploadImage", data);
      setFormData({ ...formData, imageUrl: res.data.imageUrl });
      alert("Image uploaded successfully!");
    } catch (err) {
      console.error(err);
      setError("Failed to upload image. Please try again.");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="image-uploader">
      <input type="file" onChange={handleImageUpload} className="file-input" />
      {uploading && <p>Uploading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {formData.imageUrl && (
        <img
          src={formData.imageUrl}
          alt="Preview"
          style={{ maxWidth: "200px", marginTop: "10px" }}
        />
      )}
    </div>
  );
};

export default ImageUploader;
