import React from "react";
import { useNavigate } from "react-router-dom";

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
  },
];

export default function BrowseInternships() {
  const navigate = useNavigate();

  const handleViewDetails = (id) => {
    navigate(`/internship/${id}`);
  };

  return (
    <div className="min-h-screen bg-gray-100 px-6 py-10">
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-10">Browse Internships</h1>

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {internships.map((intern) => (
          <div key={intern.id} className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
            <h2 className="text-xl font-semibold text-gray-800 mb-1">{intern.title}</h2>
            <p className="text-gray-600">{intern.company}</p>
            <p className="text-sm text-gray-500">{intern.location}</p>
            <p className="mt-2 text-sm text-gray-700">
              <strong>Stipend:</strong> {intern.stipend}
            </p>
            <p className="text-sm text-gray-700">
              <strong>Duration:</strong> {intern.duration}
            </p>
            <button
              onClick={() => handleViewDetails(intern.id)}
              className="mt-4 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 text-sm transition"
            >
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
