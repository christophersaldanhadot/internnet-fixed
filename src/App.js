import { Routes, Route } from "react-router-dom";
import BrowseInternships from './pages/BrowseInternships.js';
import Home from './pages/Home.js';
import Signup from './pages/Signup.js';
import Login from './pages/Login.js';
import AiResume from './pages/AiResume.js';
import InternshipDetails from "./pages/InternshipDetails.js";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/internships" element={<BrowseInternships />} />
      <Route path="/ai-resume" element={<AiResume />} />
       <Route path="/internship/:id" element={<InternshipDetails />} />
    </Routes>
  );
}

export default App;
