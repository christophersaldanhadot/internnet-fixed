import React, { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const internships = [
  {
    id: 1,
    title: "Frontend Developer Intern",
    company: "TechNova Pvt. Ltd.",
    location: "Remote",
    stipend: "₹10,000/month",
    duration: "3 months",
    description: "Work with React to build UI components."
  },
  {
    id: 2,
    title: "Marketing Intern",
    company: "BuzzMax Brands",
    location: "Bangalore",
    stipend: "₹8,000/month",
    duration: "2 months",
    description: "Help grow the BuzzMax community via social media."
  },
  {
    id: 3,
    title: "Data Analyst Intern",
    company: "DataSight Analytics",
    location: "Remote",
    stipend: "₹12,000/month",
    duration: "6 weeks",
    description: "Analyze product usage data and build dashboards."
  }
];

export default function InternshipDetails() {
  const { id } = useParams();
  const internship = internships.find((i) => i.id === parseInt(id));
  const [resume, setResume] = useState(null);
  const [uploadMsg, setUploadMsg] = useState("");

  const handleFileChange = (e) => setResume(e.target.files[0]);

  const handleUpload = async () => {
    if (!resume) return alert("Please select a file to upload.");
    const formData = new FormData();
    formData.append("resume", resume);
    formData.append("internshipTitle", internship.title);

    try {
      const res = await axios.post("https://internnet-fixed.onrender.com/upload", formData);
      setUploadMsg(res.data.message);
    } catch (err) {
      console.error("Upload error:", err);
      setUploadMsg("Upload failed. Please try again.");
    }
  };

  if (!internship) return <div className="p-6">Internship not found</div>;

  return (
    <div className="min-h-screen px-6 py-10 bg-gray-50">
      <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">{internship.title}</h1>
        <p className="text-gray-600 mb-1">{internship.company}</p>
        <p className="text-sm text-gray-500 mb-4">{internship.location}</p>
        <p className="mb-2"><strong>Stipend:</strong> {internship.stipend}</p>
        <p className="mb-4"><strong>Duration:</strong> {internship.duration}</p>
        <p className="text-gray-700 mb-6">{internship.description}</p>

        <div className="mb-4">
          <input
            type="file"
            accept=".pdf,.doc,.docx"
            onChange={handleFileChange}
            className="block w-full text-sm mb-2"
          />
          <button
            onClick={handleUpload}
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            Upload Resume
          </button>
        </div>

        {uploadMsg && <p className="text-green-600 mt-2 text-sm">{uploadMsg}</p>}
      </div>
    </div>
  );
}
