import express from "express";
import mongoose from "mongoose";
import multer from "multer";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

dotenv.config();
const app = express();

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ MongoDB Error:", err));

// Resume Schema
const resumeSchema = new mongoose.Schema({
  internshipTitle: String,
  fileName: String,
  filePath: String,
  uploadDate: { type: Date, default: Date.now },
});
const Resume = mongoose.model("Resume", resumeSchema);

// Multer Upload Setup
const __dirname = dirname(fileURLToPath(import.meta.url));
const storage = multer.diskStorage({
  destination: path.join(__dirname, "uploads"),
  filename: (req, file, cb) => cb(null, `${Date.now()}-${file.originalname}`),
});
const upload = multer({ storage });

// Middleware
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// File Upload Endpoint
app.post("/upload", upload.single("resume"), async (req, res) => {
  const { internshipTitle } = req.body;

  const newResume = new Resume({
    internshipTitle,
    fileName: req.file.filename,
    filePath: req.file.path,
  });

  await newResume.save();
  res.status(200).json({ message: "Resume uploaded successfully!" });
});

// Serve frontend build
app.use(express.static(path.join(__dirname, "build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

// Start Server
const PORT = process.env.PORT || 10000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
