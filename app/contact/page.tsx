// pages/contact.tsx
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import NewFooter from '@/components/NewFooter';

const Contact: React.FC = () => {
  return (
    <div>
      <Header />
      <main className="flex flex-col items-center justify-center py-16 px-4 sm:px-8 md:px-16 lg:px-32 bg-gradient-to-b from-white to-gray-100 mt-16">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-center leading-tight text-gray-800 tracking-wide">
          Contact Us
        </h1>
        <p className="mt-6 text-gray-700 text-center max-w-2xl text-lg md:text-xl leading-relaxed">
          We would love to hear from you! Reach out to us through any of the channels below.
        </p>
        
        <div className="mt-10 space-y-6 text-center">
          <div className="text-lg md:text-xl">
            <span className="font-semibold">Phone:</span> <a href="tel:+917973739678" className="text-purple-700 hover:underline">+91 79737 39678</a>
          </div>
          <div className="text-lg md:text-xl">
            <span className="font-semibold">Email:</span> <a href="mailto:chemistryexpert21@gmail.com" className="text-purple-700 hover:underline">chemistryexpert21@gmail.com</a>
          </div>
          <div className="text-lg md:text-xl">
            <span className="font-semibold">YouTube:</span> <a href="https://youtube.com/@chemistryexpertrakeshsir2392?feature=shared" target="_blank" className="text-purple-700 hover:underline">Our YouTube Channel</a>
          </div>
        </div>
      </main>
      
      <Footer />
      <NewFooter />
    </div>
  );
};

export default Contact;
