// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;



import React, { useState, useEffect } from "react";
import Editor from "./components/Editor";
import ImageUploader from "./components/ImageUploader";
import axios from "axios";
import "./App.css";

const App = () => {
  const [layout, setLayout] = useState("");
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    footer: "",
    imageUrl: "",
  });

  useEffect(() => {
    const fetchLayout = async () => {
      const res = await axios.get("http://localhost:5000/api/email/getEmailLayout");
      setLayout(res.data);
    };
    fetchLayout();
  }, []);

  const handleSubmit = async () => {
    await axios.post("http://localhost:5000/api/email/uploadEmailConfig", formData);
    alert("Email template saved!");
  };

  return (
    <div className="app-container">
      <h1 className="app-title">Email Builder</h1>
      <div className="editor-container">
        <Editor layout={layout} formData={formData} setFormData={setFormData} />
        <ImageUploader formData={formData} setFormData={setFormData} />
      </div>
      <button className="save-button" onClick={handleSubmit}>Save Template</button>
    </div>
  );
};

export default App;