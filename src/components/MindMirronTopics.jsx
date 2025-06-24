import React from "react";
import { MdOutlineLibraryBooks, MdTimer, MdCategory } from "react-icons/md";

const topics = [
  {
    title: "The Illusion of Control",
    type: "Insight",
    time: "5 min read",
    category: "Psychology",
    highlight: true,
  },
  {
    title: "Awakening the Creative Self",
    type: "Article",
    time: "7 min read",
    category: "Creativity",
  },
  {
    title: "Mindfulness in Chaos",
    type: "Reflection",
    time: "4 min read",
    category: "Lifestyle",
  },
  {
    title: "Thinking Beyond Reality",
    type: "Thought",
    time: "6 min read",
    category: "Philosophy",
  },
  {
    title: "The Mirror Talks Back",
    type: "Story",
    time: "8 min read",
    category: "Fiction",
  },
  {
    title: "Minimalism and Mental Space",
    type: "Article",
    time: "5 min read",
    category: "Self-help",
  },
  {
    title: "Unpacking the Ego",
    type: "Insight",
    time: "6 min read",
    category: "Spirituality",
  },
  {
    title: "Digital Silence",
    type: "Reflection",
    time: "4 min read",
    category: "Well-being",
  },
  {
    title: "Color of Thoughts",
    type: "Essay",
    time: "7 min read",
    category: "Art & Expression",
  },
];

const MindMirronTopics = () => {
  return (
    <div className="p-6 md:p-12 bg-purple-50 ">
      <h2 className="text-3xl font-semibold mb-8">Mind Mirron Topics</h2>

      {/* Filters */}
      <div className="flex flex-wrap gap-4 mb-10">
        {["Topic", "Type", "Time", "Category"].map((filter, i) => (
          <select
            key={i}
            className="bg-white text-gray-700 border border-gray-300 rounded-full px-4 py-2 shadow-sm outline-none focus:ring-2 focus:ring-purple-300"
          >
            <option>{filter}</option>
          </select>
        ))}
      </div>

      {/* Topic Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {topics.map((topic, idx) => (
          <div
            key={idx}
            className={`p-6 rounded-xl shadow-sm transition ${
              topic.highlight ? "bg-purple-100" : "bg-white"
            }`}
          >
            <h3 className="text-lg font-semibold text-purple-800 mb-4">
              {topic.title}
            </h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-center gap-2">
                <MdOutlineLibraryBooks className="text-purple-500" />
                {topic.type}
              </li>
              <li className="flex items-center gap-2">
                <MdTimer className="text-purple-500" />
                {topic.time}
              </li>
              <li className="flex items-center gap-2">
                <MdCategory className="text-purple-500" />
                {topic.category}
              </li>
            </ul>
            <button className="mt-4 text-sm text-purple-600 font-medium hover:underline">
              View detail →
            </button>
          </div>
        ))}
      </div>

      {/* Load More Button */}
      <div className="mt-10 text-center">
        <button className="px-6 py-2 border border-purple-400 text-purple-600 rounded-full hover:bg-purple-100">
          Load more
        </button>
      </div>
    </div>
  );
};

export default MindMirronTopics;
