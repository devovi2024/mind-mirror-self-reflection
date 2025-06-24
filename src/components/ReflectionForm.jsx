import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addEntry } from '../store/actions';
import BlogList from './BlogList';
import EntryList from './EntryList';
import StatsPanel from './StatsPanel';
import Navbar from './Navbar';

function ReflectionForm() {
  const dispatch = useDispatch();
  const [mood, setMood] = useState('');
  const [thought, setThought] = useState('');
  const [learning, setLearning] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!mood || !thought || !learning) return;

    const newEntry = {
      date: new Date().toISOString().slice(0, 10),
      mood,
      thought,
      learning,
    };

    dispatch(addEntry(newEntry));
    setMood('');
    setThought('');
    setLearning('');
  };

  return (
    <section>
      <div>
      <Navbar/>
      </div>

      <div className="bg-black font-serif  md:px-20 ">
      <div className="flex flex-col md:flex-row gap-10">

        {/* Form div - 2/3 width */}
        <div className="md:w-2/3 w-full bg-[#121212] rounded-xl shadow-lg px-10 py-12 space-y-8">
          <h2 className="text-3xl font-extrabold text-white text-center tracking-wide">
            Daily Reflection
          </h2>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div>
              <label className="block text-white font-semibold mb-2 text-lg">
                Mood
              </label>
              <input
                type="text"
                value={mood}
                onChange={(e) => setMood(e.target.value)}
                placeholder="How do you feel?"
                className="w-full px-5 py-3 bg-[#1e1e1e] border border-gray-600 rounded-xl
                  text-white placeholder:text-gray-400
                  focus:outline-none focus:ring-2 focus:ring-gray-500 transition"
              />
            </div>

            <div>
              <label className="block text-white font-semibold mb-2 text-lg">
                What's on your mind?
              </label>
              <textarea
                value={thought}
                onChange={(e) => setThought(e.target.value)}
                placeholder="Share your thoughts..."
                rows={5}
                className="w-full px-5 py-3 bg-[#1e1e1e] border border-gray-600 rounded-xl
                  text-white placeholder:text-gray-400
                  focus:outline-none focus:ring-2 focus:ring-gray-500 transition"
              />
            </div>

            <div>
              <label className="block text-white font-semibold mb-2 text-lg">
                What did you learn today?
              </label>
              <input
                type="text"
                value={learning}
                onChange={(e) => setLearning(e.target.value)}
                placeholder="Write one key learning"
                className="w-full px-5 py-3 bg-[#1e1e1e] border border-gray-600 rounded-xl
                  text-white placeholder:text-gray-400
                  focus:outline-none focus:ring-2 focus:ring-gray-500 transition"
              />
            </div>

            <div className="flex justify-between gap-4">
              {/* Red CTA button */}
              <button
                type="submit"
                className="flex-1 bg-red-600 hover:bg-red-700 text-white font-semibold py-3 rounded-full
                  shadow-md transition duration-300"
              >
                Reflect
              </button>

              {/* Example Green CTA button - disabled for demonstration */}
              <button
                type="button"
                disabled
                className="flex-1 bg-green-600 cursor-not-allowed opacity-50 text-white font-semibold py-3 rounded-full
                  shadow-md transition duration-300"
              >
                Save Draft
              </button>

              {/* Example White CTA button */}
              <button
                type="button"
                className="flex-1 bg-white hover:bg-gray-200 text-black font-semibold py-3 rounded-full
                  shadow-md transition duration-300"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>

        {/* Entry List div - 1/3 width */}
        <div className="md:w-1/3 w-full flex flex-col gap-6">
          <div className=" rounded-xl shadow-lg p-6 text-black">
            <EntryList />
          </div>
          <div className="rounded-xl shadow-lg p-6 text-white">
            <StatsPanel />
          </div>
        </div>
      </div>

      {/* BlogList div */}
      <div className="mt-10">
        <BlogList />
      </div>
    </div>
    </section>
  );
}

export default ReflectionForm;
