// src/pages/AiResume.js
import React, { useState } from "react";

export default function AiResume() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const generateResume = async () => {
    // Simulate AI Resume generation
    const fakeResume = `
    Name: John Doe
    Role: Frontend Developer Intern
    Skills: React, HTML, CSS, JavaScript
    Experience: 3 student projects + 2 internships
    `;

    setOutput(fakeResume);
  };

  return (
    <div className="min-h-screen p-8 bg-white">
      <h2 className="text-2xl font-bold text-center mb-6 text-blue-700">AI Resume Builder</h2>
      <div className="max-w-xl mx-auto space-y-4">
        <textarea
          placeholder="Write a few lines about yourself, your interests, or just paste your LinkedIn bio"
          className="w-full border p-4 rounded"
          rows={5}
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          onClick={generateResume}
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
        >
          Generate Resume
        </button>
        {output && (
          <div className="mt-4 bg-gray-100 p-4 rounded border">
            <h4 className="font-semibold mb-2">Generated Resume:</h4>
            <pre className="whitespace-pre-wrap text-sm">{output}</pre>
          </div>
        )}
      </div>
    </div>
  );
}
