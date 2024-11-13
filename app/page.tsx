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
      <main className="flex flex-col items-center justify-center py-10 px-4 sm:px-8 md:px-16 lg:px-32 bg-gray-100">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center leading-tight">
          Having a good <span className="text-purple-700 italic">attitude</span> is very important to succeed in life.
        </h1>
        <p className="mt-4 text-gray-600 text-center max-w-2xl">
          Our career coaching methodology guides you on a deep transformational journey to find.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center mt-8 space-y-4 sm:space-y-0 sm:space-x-4">
          <button className="px-6 py-2 font-medium text-white bg-purple-700 rounded-md">Get Notes!</button>
          <button className="px-6 py-2 font-medium text-purple-700 border border-purple-700 rounded-md">Query? Contact us</button>
        </div>
      </main>
      <Footer />
      <Testimonials />
      <NewFooter />
    </div>
  );
};

export default Home;
