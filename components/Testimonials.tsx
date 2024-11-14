import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';

const testimonials = [
  {
    name: 'Aditya Raizada',
    feedback: "Rakesh Sir is an excellent teacher who explains even the most complex topics in a very simple and understandable manner. His notes are incredibly helpful, as they break down the concepts step-by-step, making learning so much easier. Thanks to his guidance, I've been able to grasp difficult subjects with confidence!"
  },
  {
    name: 'Sheril Dhiman',
    feedback: "I've been attending Rakesh Sir's classes for a while now, and his teaching style is simply outstanding. His notes are clear, concise, and packed with useful examples that make revision so much more effective. They’ve really helped me improve my understanding and scores!",
  },
  {
    name: 'Prachi',
    feedback: "Rakesh Sir is a great mentor, always willing to go the extra mile to ensure we understand the subject thoroughly. His notes are a lifesaver, covering all the key points and providing additional explanations that make studying less stressful. They have been invaluable during exam preparation!",
  },
  {
    name: 'Amitti',
    feedback: "I cannot thank Rakesh Sir enough for his support and guidance. His notes are always well-organized, easy to follow, and cover everything needed for a deep understanding of the topic. I find them incredibly useful for revision and reinforcing concepts. His efforts have truly made a difference in my learning journey!",
  },
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          What our students have <span className="text-purple-700">to say</span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Our life coaching methodology guides you on a deep transformational journey to find your calling, build rock-solid confidence, and excel in your career.
        </p>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-lg transform transition-transform hover:scale-105 hover:shadow-xl duration-300 ease-in-out">
              <div className="text-purple-700 text-3xl mb-6 flex justify-center">
                <FaQuoteLeft />
              </div>
              <p className="text-gray-600 text-lg italic mb-6">"{testimonial.feedback}"</p>
              <h3 className="font-semibold text-gray-800 text-xl">{testimonial.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
