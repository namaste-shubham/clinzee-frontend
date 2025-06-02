import { useEffect, useState } from 'react';
import hero1 from '../assets/hero1.png';
import hero2 from '../assets/hero2.png';
// import hero3 from '../assets/hero3.png'

const images = [hero1, hero2];

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(images[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomImage = images[Math.floor(Math.random() * images.length)];
      setCurrentImage(randomImage);
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="pt-28 pb-16 px-4 bg-gradient-to-r from-blue-50 to-green-50">
      <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-8">
        
        {/* Text Section */}
        <div className="text-center md:text-left flex-1">
          <h1 className="text-3xl md:text-5xl font-bold text-blue-900 mb-4 leading-tight">
            Welcome to <span className="text-green-600">CLINZEE</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-6">
            Discover premium home cleaning products — safe, affordable, and powerful. From liquid detergent to toilet cleaner, we've got your home covered.
          </p>
          <a
            href="/products"
            className="inline-block px-6 py-3 bg-green-600 text-white font-semibold rounded-md shadow hover:bg-green-700 transition"
          >
            Explore Products
          </a>
        </div>

        {/* Dynamic Floating Image Section */}
        <div className="flex-1">
          <img
            key={currentImage} // forces re-render on image switch
            src={currentImage}
            alt="Clinzee Product"
            width="320"
            height="320"
            className="w-full max-w-xs md:max-w-md mx-auto drop-shadow-md animate-float transition-all duration-500"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
