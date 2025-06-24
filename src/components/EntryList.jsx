import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteEntry } from '../store/actions';

function EntryList() {
  const entries = useSelector((state) => state.reflections.entries);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteEntry(id));
  };

  if (entries.length === 0) {
    return (
      <p className="text-center text-gray-400 italic font-serif mt-10">
        No reflections yet. Start writing! ✍️
      </p>
    );
  }

  return (
    <div className="max-w-2xl mx-auto mt-14 space-y-8 font-serif">
      <h2 className="text-3xl font-extrabold text-center text-white mb-8 tracking-wide">
        📝 Your Reflections
      </h2>

      {entries.map((entry) => (
        <div
          key={entry.id}
          className="bg-[#121212] rounded-xl shadow-lg px-8 py-6 transition-all duration-300 hover:shadow-xl"
        >
          <p className="text-sm text-gray-400 mb-2">
            <strong className="text-white">Date:</strong> {entry.date}
          </p>
          <p className="mb-1 text-gray-200">
            <strong className="text-white">Mood:</strong> {entry.mood}
          </p>
          <p className="mb-1 text-gray-200">
            <strong className="text-white">Thought:</strong> {entry.thought}
          </p>
          <p className="mb-4 text-gray-200">
            <strong className="text-white">Learned:</strong> {entry.learning}
          </p>

          <button
            onClick={() => handleDelete(entry.id)}
            className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-full text-sm font-semibold shadow-md transition duration-300"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default EntryList;
