import express from "express";
import mongoose from "mongoose";
import multer from "multer";
import cors from "cors";
import dotenv from "dotenv";
import { fileURLToPath } from "url";
import { dirname } from "path";
import path from "path";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("✅ MongoDB Connected"))
.catch((err) => console.error("❌ MongoDB Error:", err));

// Define Resume Schema
const resumeSchema = new mongoose.Schema({
  internshipTitle: String,
  fileName: String,
  filePath: String,
  uploadDate: { type: Date, default: Date.now },
});
const Resume = mongoose.model("Resume", resumeSchema);

// Multer Setup
const __dirname = dirname(fileURLToPath(import.meta.url));
const storage = multer.diskStorage({
  destination: path.join(__dirname, "uploads"),
  filename: (req, file, cb) => cb(null, `${Date.now()}-${file.originalname}`),
});
const upload = multer({ storage });

// Serve uploaded files statically (optional)
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Upload Endpoint
app.post("/upload", upload.single("resume"), async (req, res) => {
  try {
    const { internshipTitle } = req.body;
    const newResume = new Resume({
      internshipTitle,
      fileName: req.file.filename,
      filePath: req.file.path,
    });

    await newResume.save();
    res.status(200).json({ message: "Resume uploaded successfully!" });
  } catch (error) {
    console.error("❌ Upload Error:", error);
    res.status(500).json({ message: "Upload failed. Please try again." });
  }
});

// Use Render-compatible dynamic port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
