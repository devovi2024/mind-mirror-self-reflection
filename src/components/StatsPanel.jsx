import { useSelector } from 'react-redux';

function StatsPanel() {
  const entries = useSelector((state) => state.reflections.entries);

  const moodCount = entries.reduce((acc, entry) => {
    const mood = entry.mood.toLowerCase();
    acc[mood] = (acc[mood] || 0) + 1;
    return acc;
  }, {});

  return (
    <div className="max-w-xl  bg-[#121212] p-6 -lg font-serif">
      <h2 className="text-2xl font-bold mb-4 text-white text-center flex items-center justify-center gap-2">
        📊 Mood Stats
      </h2>

      {Object.keys(moodCount).length === 0 ? (
        <p className="text-center text-gray-400">No data to show yet.</p>
      ) : (
        <ul className="space-y-3">
          {Object.entries(moodCount).map(([mood, count]) => (
            <li
              key={mood}
              className="flex justify-between items-center bg-[#1e1e1e] border border-gray-600 px-4 py-2 rounded-lg shadow-sm"
            >
              <span className="capitalize text-white font-medium">{mood}</span>
              <span className="text-blue-400 font-bold">{count} time(s)</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default StatsPanel;
