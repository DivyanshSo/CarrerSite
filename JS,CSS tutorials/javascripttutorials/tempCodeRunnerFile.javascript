// src/pages/Homepage.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function Homepage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-white flex flex-col items-center text-gray-800">
      {/* Hero Section */}
      <header className="text-center py-16 px-6">
        <h1 className="text-5xl font-extrabold text-purple-700 mb-4">🎓 Welcome to Learnify</h1>
        <p className="text-lg max-w-xl mx-auto">
          Empowering students with AI, AR, and gamified education for a smarter, immersive, and emotional learning journey.
        </p>
        <div className="mt-6">
          <Link
            to="/chatbot"
            className="bg-purple-600 text-white px-6 py-2 rounded-lg shadow hover:bg-purple-700 transition"
          >
            🚀 Launch AI Chatbot
          </Link>
        </div>
      </header>

      {/* Features Section */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6 pb-16 w-full max-w-6xl">
        {/* Feature 1 */}
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
          <h3 className="text-xl font-semibold text-purple-700 mb-2">🤖 Emotion-Aware AI Chatbot</h3>
          <p>
            Chat with a smart assistant that understands your emotions and helps with subject-specific queries.
          </p>
        </div>

        {/* Feature 2 */}
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
          <h3 className="text-xl font-semibold text-purple-700 mb-2">🧠 360° Visual Learning</h3>
          <p>
            Explore topics with interactive 3D and panoramic visuals—perfect for science, history, and more.
          </p>
        </div>

        {/* Feature 3 */}
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
          <h3 className="text-xl font-semibold text-purple-700 mb-2">🎮 Gamified Learning</h3>
          <p>
            Earn points, badges, and ranks as you learn and grow. Make study sessions feel like playing a game.
          </p>
        </div>

        {/* Feature 4 */}
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
          <h3 className="text-xl font-semibold text-purple-700 mb-2">🔬 AR-Powered Modules</h3>
          <p>
            Launch augmented reality experiences to visualize molecules, the human body, historical places, and more.
          </p>
        </div>

        {/* Feature 5 */}
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
          <h3 className="text-xl font-semibold text-purple-700 mb-2">📚 Subject-wise Content</h3>
          <p>
            Dive deep into topics like Chemistry, Physics, Math, and History—all enhanced with interactive tools.
          </p>
        </div>

        {/* Feature 6 */}
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
          <h3 className="text-xl font-semibold text-purple-700 mb-2">📈 Personalized Progress</h3>
          <p>
            Learn at your own pace with intelligent feedback and trackable goals based on your performance.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Homepage;

