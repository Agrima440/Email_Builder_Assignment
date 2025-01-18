const EmailTemplate = require("../models/EmailTemplate");
const path = require("path");

// Get email layout
exports.getEmailLayout = (req, res) => {
  res.sendFile(path.join(__dirname, "../layout.html"));
};

// Upload image
exports.uploadImage = (req, res) => {


  
  res.json({ imageUrl: `/uploads/${req.file.filename}` });
};

// Save email configuration
exports.uploadEmailConfig = async (req, res) => {
  try {
    const template = new EmailTemplate(req.body);
    await template.save();
    res.status(201).json(template);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Render and download template
exports.renderAndDownloadTemplate = async (req, res) => {
  const { title, content, footer, imageUrl } = req.body;
  const html = `
    <html>
    <head><style>body { font-family: Arial; }</style></head>
    <body>
      <h1>${title}</h1>
      <p>${content}</p>
      ${imageUrl ? `<img src="${imageUrl}" alt="Image" style="max-width:100%;" />` : ""}
      <footer>${footer || ""}</footer>
    </body>
    </html>
  `;
  res.setHeader("Content-Type", "text/html");
  res.setHeader("Content-Disposition", "attachment; filename=email_template.html");
  res.send(html);
};
