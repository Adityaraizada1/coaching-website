// pages/index.tsx
import Header from '../components/Header';
import Footer from '../components/Footer';
import Testimonials from '../components/Testimonials';
import NewFooter from '../components/NewFooter';
import Preloader from '../components/Preloader';

const Home: React.FC = () => {
  return (
    <div>
      <Preloader />
      <Header />
      <main className="flex flex-col items-center justify-center py-16 px-4 sm:px-8 md:px-16 lg:px-32 bg-gradient-to-b from-white to-gray-100 mt-16">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-center leading-tight text-gray-800 tracking-wide">
          Having a good <span className="text-purple-700 italic">attitude</span> is key to success
        </h1>
        <p className="mt-6 text-gray-700 text-center max-w-2xl text-lg md:text-xl leading-relaxed">
          Embark on a transformative journey with our career coaching methodology that guides you towards self-discovery and success.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center mt-10 space-y-4 sm:space-y-0 sm:space-x-6">
          <button className="px-8 py-3 font-semibold text-white bg-purple-700 hover:bg-purple-800 transition-colors duration-300 rounded-full shadow-lg transform hover:scale-105">
            Get Notes!
          </button>
          <button className="px-8 py-3 font-semibold text-purple-700 border border-purple-700 hover:bg-purple-700 hover:text-white transition-colors duration-300 rounded-full shadow-lg transform hover:scale-105">
            Query? Contact Us
          </button>
        </div>
      </main>
      
      <div className="my-16 px-4">
        <Testimonials />
      </div>
      
      <Footer />
      <NewFooter />
    </div>
  );
};

export default Home;
