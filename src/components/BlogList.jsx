import TrainImg from '../assets/Train Your Mind to Find Peace.jpg'
import ReflectionImg from '../assets/Reflections That Heal.jpg'
import ProfileImg from '../assets/profile.jpg'
import ManProfileImg from '../assets/man-profile-vector-31988724.jpg'
import TenImg from '../assets/10 Mindful Habits to Start Today.jpg'
import MindSet from '../assets/Mindfulness in Modern Life.jpg'

const BlogList = () => {
  return (
    <div className="bg-gray-100 py-10 px-4">
      <h1 className="text-3xl font-semibold text-gray-800 mb-8">Mindful Moments</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">

        {/* Card 1 */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <img
            src={TrainImg}
            alt="Mind Growth"
            className="w-full h-44 object-cover"
          />
          <div className="p-4">
            <h2 className="text-lg font-semibold mb-2">Train Your Mind to Find Peace</h2>
            <p className="text-sm text-gray-600 mb-4">
              A calm mind is a powerful tool. Discover how mindfulness reshapes your emotional habits.
            </p>
            <button className="bg-indigo-500 text-white px-4 py-2 rounded-full text-sm">READ MORE</button>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <img
            src={ReflectionImg}
            alt="Reflection"
            className="w-full h-44 object-cover"
          />
          <div className="p-4">
            <h2 className="text-lg font-semibold mb-2">Reflections That Heal</h2>
            <p className="text-sm text-gray-600">
              Journaling your emotions can guide you to inner clarity. Start small, reflect deep.
            </p>
            <div className="flex items-center justify-between text-sm text-gray-500 mt-3">
              <span>Aria Moon</span>
              <span>4 min read</span>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-blue-50 text-blue-900 rounded-xl shadow-md p-4">
          <div className="flex items-center mb-2">
            <img src={ManProfileImg} alt="Deif" className="w-8 h-8 rounded-full mr-3" />
            <strong>MD Deif</strong>
          </div>
          <p className="text-sm italic">
            “Your thoughts shape your world. Train them to be kind, and your world changes.”
          </p>
        </div>

        {/* Card 4 */}
        <div className="bg-white rounded-xl shadow-md p-4 text-center">
          <img src={ProfileImg} alt="ovi" className="w-14 h-14 rounded-full mx-auto mb-3" />
          <h3 className="text-md font-semibold">Arfan_Ovi</h3>
          <p className="text-sm text-gray-500">@ovi</p>
          <p className="text-sm text-gray-600 mt-2">
            “Your silence speaks louder than your words when your soul is aligned with peace.”
          </p>
        </div>

        {/* Card 5 */}
        <div className="bg-purple-200 text-purple-900 rounded-xl shadow-md p-5">
          <h3 className="text-sm uppercase font-semibold mb-2">Insight</h3>
          <h2 className="text-lg font-bold mb-2">"Stillness Is Not Emptiness"</h2>
          <p className="text-sm mb-3">
            In a noisy world, stillness becomes your greatest power. Learn the art of mindful pause.
          </p>
          <button className="bg-white text-purple-600 px-4 py-2 rounded-full text-sm">EXPLORE</button>
        </div>

        {/* Card 6 */}
        <div className="bg-white rounded-xl shadow-md p-4">
          <h3 className="text-sm text-gray-800 mb-2">RONNA JOHNSON</h3>
          <p className="text-sm text-gray-600">
            “A wandering mind is a lost soul. Ground it through breath, purpose, and presence.”
          </p>
        </div>

        {/* Card 7 */}
        <div className="bg-black text-white rounded-xl shadow-md overflow-hidden">
          <img
            src={TenImg}
            alt="Principles"
            className="w-full h-44 object-cover opacity-60"
          />
          <div className="p-4">
            <h2 className="text-lg font-semibold mb-2">10 Mindful Habits to Start Today</h2>
            <p className="text-sm">
              Cultivate small practices daily — breathing, gratitude, simplicity — to reset your mindset.
            </p>
            <button className="bg-green-500 text-white px-4 py-2 rounded-full text-sm mt-3">GET GUIDE</button>
          </div>
        </div>

        {/* Card 8 */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <img
            src={MindSet}
            alt="Museum"
            className="w-full h-44 object-cover"
          />
          <div className="p-4">
            <span className="text-xs bg-yellow-400 text-white px-2 py-1 rounded-full font-semibold">WELLNESS</span>
            <h2 className="text-lg font-semibold mt-2">Mindfulness in Modern Life</h2>
            <div className="flex items-center justify-between text-sm text-gray-500 mt-3">
              <span>By Sofia Rae</span>
              <span>6.3k Views</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default BlogList;
