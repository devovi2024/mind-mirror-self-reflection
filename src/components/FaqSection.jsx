import React, { useState } from "react";

const faqData = [
  {
    question: "What is Mind Mirror?",
    answer:
      "Mind Mirror is a platform designed to reflect your thoughts and moods, helping you gain insights and improve mental well-being through journaling and analytics.",
  },
  {
    question: "How do I track my mood over time?",
    answer:
      "You can track your mood by regularly logging your daily reflections. Mind Mirror aggregates this data to provide visual trends and analytical insights over days, weeks, or months.",
  },
  {
    question: "Is my data private and secure?",
    answer:
      "Absolutely. Mind Mirror uses industry-standard encryption and privacy protocols to ensure that your personal data stays secure and accessible only to you.",
  },
  {
    question: "Can I export my journal entries?",
    answer:
      "Yes, you can export your journal entries anytime in PDF or CSV formats to keep your reflections offline or to share with a therapist.",
  },
  {
    question: "How can I customize my experience?",
    answer:
      "Mind Mirror allows you to personalize themes, set daily reminders, and customize privacy settings to tailor the platform to your preferences.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      className="max-w-5xl mx-auto my-10 px-6  bg-gray-50  rounded-lg font-serif text-gray-800"
      aria-label="Frequently Asked Questions"
    >
      <h2 className="text-4xl font-bold mb-10 text-yellow-900 tracking-wide text-center">
        Frequently Asked Questions
      </h2>
      <div className="space-y-8">
        {faqData.map(({ question, answer }, idx) => (
          <div key={idx} className="border-b border-yellow-300 pb-6">
            <button
              onClick={() => toggleFaq(idx)}
              className="w-full text-left flex justify-between items-center font-semibold text-xl text-yellow-800 hover:text-yellow-900 transition-colors"
              aria-expanded={openIndex === idx}
              aria-controls={`faq-answer-${idx}`}
            >
              <span>{question}</span>
              <span className="text-3xl select-none">
                {openIndex === idx ? "−" : "+"}
              </span>
            </button>
            <div
              id={`faq-answer-${idx}`}
              className={`mt-4 text-lg leading-relaxed transition-all duration-300 ease-in-out ${
                openIndex === idx ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
              }`}
              aria-hidden={openIndex !== idx}
            >
              {answer}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
