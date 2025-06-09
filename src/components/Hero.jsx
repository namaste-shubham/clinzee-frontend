import { useEffect, useState } from "react";
import hero1 from "../assets/hero1.png";
import hero2 from "../assets/hero2.png";

const productImages = [hero1, hero2];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === productImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-blue-50 pt-28 md:pt-32 pb-6 md:pb-10 px-4">

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 items-center gap-10">
        
        {/* Image - First on mobile, second on desktop */}
        <div className="order-1 md:order-2 flex items-center justify-center">
          <img
            src={productImages[currentIndex]}
            alt="CLINZEE Product"
            className="w-full max-w-sm md:max-w-md object-contain transition-all duration-700 ease-in-out drop-shadow-xl"
          />
        </div>

        {/* Content - Second on mobile, first on desktop */}
        <div className="order-2 md:order-1 text-center md:text-left">
          <h1 className="text-2xl md:text-3xl font-extrabold text-blue-900 leading-tight mb-8">
            Trusted Hygiene for Every Household — Only with{" "}
            <span className="text-blue-700">CLINZEE</span>
          </h1>
          <p className="text-gray-700 text-base md:text-lg mb-6 max-w-xl mx-auto md:mx-0">
            CLINZEE products are thoughtfully crafted to meet the daily hygiene needs of Indian households.
            From sparkling kitchens to spotless bathrooms, our powerful cleaning agents eliminate germs, 
            fight grime, and leave behind a pleasant fragrance. Whether you live in a bustling city or a quiet village, 
            CLINZEE ensures every corner of your home stays fresh, safe, and welcoming — because every family deserves cleanliness they can count on.
          </p>
          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
            <a
              href="/products"
              className="bg-blue-700 hover:bg-blue-800 text-white font-semibold px-6 py-3 rounded-xl shadow-md transition"
            >
              Explore Products
            </a>
            <a
              href="/contact"
              className="bg-white border border-blue-700 text-blue-700 hover:bg-blue-50 font-semibold px-6 py-3 rounded-xl shadow-sm transition"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
