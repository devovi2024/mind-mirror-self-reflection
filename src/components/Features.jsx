import {
  FaPenFancy,
  FaSmileBeam,
  FaBookOpen,
  FaChartLine,
} from "react-icons/fa";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

const features = [
  {
    icon: <FaPenFancy className="text-indigo-600 text-7xl mb-6 mx-auto" />,
    title: "Daily Reflection",
    desc: "Write your daily thoughts and feelings easily with our intuitive reflection journal.",
  },
  {
    icon: <FaSmileBeam className="text-green-500 text-7xl mb-6 mx-auto" />,
    title: "Mood Tracker",
    desc: "Keep track of your mood fluctuations over time and gain better self-awareness.",
  },
  {
    icon: <FaBookOpen className="text-yellow-500 text-7xl mb-6 mx-auto" />,
    title: "Personal Journal",
    desc: "Maintain a private journal to record your memories, ideas, and goals securely.",
  },
  {
    icon: <FaChartLine className="text-pink-600 text-7xl mb-6 mx-auto" />,
    title: "Data Visualization",
    desc: "Visualize your mental health trends with easy-to-understand charts and graphs.",
  },
];

function Features() {
  return (
    <section className="bg-gradient-to-r from-indigo-50 to-purple-50 p-4 py-20 px-6 md:px-20">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-4 font-serif tracking-wide">
          Mind Mirror Features
        </h2>
        <p className="text-gray-700 max-w-3xl mx-auto text-lg">
          Explore the core tools that help you reflect, track, and understand
          yourself better every day.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  gap-12">
        {features.map(({ icon, title, desc }, index) => (
          <motion.div
            key={title}
            className="bg-white rounded-xl p-1 px-6 shadow-lg hover:shadow-2xl cursor-pointer transform hover:-translate-y-2 transition-all duration-500"
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
            tabIndex={0}
            aria-label={title}
          >
            <div className="mb-4">{icon}</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
            <div>
                
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Features;
