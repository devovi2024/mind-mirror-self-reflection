import React from "react";
import { FaBrain, FaHeart, FaSmile, FaLock } from "react-icons/fa";
import bannerImg from "../assets/mind-hand.png";

const TrustSection = () => {
  return (
    <section className="bg-gradient-to-r from-purple-50 to-indigo-50 py-16 px-4 md:px-16">
      <div className="flex flex-col md:flex-row items-center gap-12 max-w-7xl mx-auto">
        {/* Left Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={bannerImg}
            alt="Mindful Reflection"
            className="w-full max-w-sm md:max-w-md rounded-lg shadow-lg object-cover"
          />
        </div>

        {/* Right Content */}
        <div className="w-full md:w-1/2 space-y-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 font-serif leading-snug">
            Relax, Your Mind is <br className="hidden sm:block" /> in Safe Hands 🧠💜
          </h2>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Feature 1 */}
            <div className="flex items-start gap-4">
              <FaBrain className="text-indigo-600 text-3xl mt-1" />
              <div>
                <h4 className="text-lg font-semibold text-gray-800">Thoughtful Reflection</h4>
                <p className="text-gray-600 text-sm text-justify">
                  Mind Mirror helps you capture your deepest thoughts and emotions daily for
                  clearer mental clarity.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex items-start gap-4">
              <FaSmile className="text-yellow-400 text-3xl mt-1" />
              <div>
                <h4 className="text-lg font-semibold text-gray-800">Mood Tracking</h4>
                <p className="text-gray-600 text-sm text-justify">
                  Track your moods over time with friendly emojis that reflect how you feel.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex items-start gap-4">
              <FaHeart className="text-pink-500 text-3xl mt-1" />
              <div>
                <h4 className="text-lg font-semibold text-gray-800">Safe & Secure</h4>
                <p className="text-gray-600 text-sm text-justify">
                  Your personal thoughts are kept private and encrypted for your peace of mind.
                </p>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="flex items-start gap-4">
              <FaLock className="text-green-600 text-3xl mt-1" />
              <div>
                <h4 className="text-lg font-semibold text-gray-800">Trusted Privacy</h4>
                <p className="text-gray-600 text-sm text-justify">
                  We respect your privacy and ensure your data is never shared without consent.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
