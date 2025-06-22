import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <header className="flex items-center justify-between px-6 py-4 shadow-sm">
        <h1 className="text-xl font-bold text-blue-600">InternNet</h1>
        <div>
          <Link
            to="/login"
            className="text-sm font-medium text-gray-700 hover:text-blue-600 mr-4"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition"
          >
            Sign Up
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="px-6 py-20 bg-gray-50 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
          Find Internships. Build Your Future.
        </h2>
        <p className="text-gray-600 max-w-xl mx-auto mb-8">
          The smarter, simpler way for students to get internships. Zero connections needed.
        </p>
        <div className="flex justify-center gap-4">
          <Link
            to="/signup"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg text-base hover:bg-blue-700 transition"
          >
            Create Your Profile
          </Link>
          <Link
            to="/internships"
            className="bg-white text-blue-600 border border-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition"
          >
            Browse Internships
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-6 py-16 bg-white grid md:grid-cols-3 gap-8 max-w-6xl mx-auto text-center">
        <div>
          <h3 className="text-lg font-semibold text-blue-600 mb-2">1-Click Apply</h3>
          <p className="text-gray-600 text-sm">
            No long forms. Just apply instantly using your InternNet profile.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-blue-600 mb-2">AI Resume & Cover Letter</h3>
          <p className="text-gray-600 text-sm">
            Get professional resumes auto-generated using your profile.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-blue-600 mb-2">Campus Vibes, Not Corporate</h3>
          <p className="text-gray-600 text-sm">
            Designed for college students. No judgment. No pressure.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 text-sm text-gray-500 border-t">
        © 2025 InternNet. Built for students, by students.
      </footer>
    </div>
  );
}
