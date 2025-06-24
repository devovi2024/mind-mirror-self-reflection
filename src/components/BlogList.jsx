import React from "react";

const BlogList = () => {
  return (
    <div className=" bg-gray-100 py-10 px-4">
      <h1 className="text-3xl font-semibold text-gray-800 mb-8">Blog Cards</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">

        {/* Card 1 */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <img
            src="https://via.placeholder.com/300x180"
            alt="Experience"
            className="w-full h-44 object-cover"
          />
          <div className="p-4">
            <h2 className="text-lg font-semibold mb-2">We will create a great experience</h2>
            <p className="text-sm text-gray-600 mb-4">
              Cards are an interaction model that are spreading pretty widely...
            </p>
            <button className="bg-red-500 text-white px-4 py-2 rounded-full text-sm">VIEW ARTICLE</button>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <img
            src="https://via.placeholder.com/300x180"
            alt="Design"
            className="w-full h-44 object-cover"
          />
          <div className="p-4">
            <h2 className="text-lg font-semibold mb-2">Good Design Is Aesthetic</h2>
            <p className="text-sm text-gray-600">Cards are an interaction model... </p>
            <div className="flex items-center justify-between text-sm text-gray-500 mt-3">
              <span>Mike John</span>
              <span>5 min read</span>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-orange-400 text-white rounded-xl shadow-md p-4">
          <div className="flex items-center mb-2">
            <img src="https://via.placeholder.com/40" alt="Erik" className="w-8 h-8 rounded-full mr-3" />
            <strong>Erik Johnson</strong>
          </div>
          <p className="text-sm">
            "Less, but better – because it concentrates on the essential aspects..."
          </p>
        </div>

        {/* Card 4 */}
        <div className="bg-white rounded-xl shadow-md p-4 text-center">
          <img src="https://via.placeholder.com/60" alt="Kaci" className="w-14 h-14 rounded-full mx-auto mb-3" />
          <h3 className="text-md font-semibold">Kaci Baum</h3>
          <p className="text-sm text-gray-500">@kacibaum</p>
          <p className="text-sm text-gray-600 mt-2">
            "Less, but better – because it concentrates on the essential aspects..."
          </p>
        </div>

        {/* Card 5 */}
        <div className="bg-purple-200 text-purple-900 rounded-xl shadow-md p-5">
          <h3 className="text-sm uppercase font-semibold mb-2">Dribbble</h3>
          <h2 className="text-lg font-bold mb-2">"Good Design Is as Little Design as Possible"</h2>
          <p className="text-sm mb-3">
            Design makes an important contribution to the preservation of the environment...
          </p>
          <button className="bg-white text-purple-600 px-4 py-2 rounded-full text-sm">READ</button>
        </div>

        {/* Card 6 */}
        <div className="bg-white rounded-xl shadow-md p-4">
          <h3 className="text-sm text-gray-800 mb-2">RONNA JOHNSON</h3>
          <p className="text-sm text-gray-600">
            "It clarifies the product’s structure. Better still, it can make the product...
          </p>
        </div>

        {/* Card 7 */}
        <div className="bg-black text-white rounded-xl shadow-md overflow-hidden">
          <img
            src="https://via.placeholder.com/300x180"
            alt="Principles"
            className="w-full h-44 object-cover opacity-60"
          />
          <div className="p-4">
            <h2 className="text-lg font-semibold mb-2">Ten Principles of 'Good Design'</h2>
            <p className="text-sm">Don't be scared of the truth because we need to restart the human foundation in truth...</p>
            <button className="bg-green-500 text-white px-4 py-2 rounded-full text-sm mt-3">DOWNLOAD PDF</button>
          </div>
        </div>

        {/* Card 8 */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <img
            src="https://via.placeholder.com/300x180"
            alt="Museum"
            className="w-full h-44 object-cover"
          />
          <div className="p-4">
            <span className="text-xs bg-yellow-400 text-white px-2 py-1 rounded-full font-semibold">TRAVEL</span>
            <h2 className="text-lg font-semibold mt-2">Currently at the San Francisco Museum of Modern Art</h2>
            <div className="flex items-center justify-between text-sm text-gray-500 mt-3">
              <span>Lord Alex</span>
              <span>5.5k</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default BlogList;