import Header from '@/components/Header';
import Footer from '@/components/Footer';
import NewFooter from '@/components/NewFooter';

const Feedback: React.FC = () => {
  return (
    <div>
      <Header />
      <main className="flex flex-col items-center justify-center py-16 px-4 sm:px-8 md:px-16 lg:px-32 bg-gradient-to-b from-white to-gray-100 mt-16">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-center leading-tight text-gray-800 tracking-wide">
          Feedback
        </h1>
        <p className="mt-6 text-gray-700 text-center max-w-2xl text-lg md:text-xl leading-relaxed">
          We value your feedback! Please let us know how we can improve your experience.
        </p>
        
        <div className="mt-10">
          <a
            href="mailto:owner@example.com?subject=Feedback&body=Please%20share%20your%20feedback%20here."
            className="px-8 py-3 font-semibold text-white bg-purple-700 hover:bg-purple-800 transition-colors duration-300 rounded-full shadow-lg transform hover:scale-105"
          >
            Send Feedback
          </a>
        </div>
      </main>
      
      <Footer />
      <NewFooter />
    </div>
  );
};

export default Feedback;
