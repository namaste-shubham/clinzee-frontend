import { useEffect, useState } from "react";
import { motion } from "framer-motion";
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
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-blue-50 pt-28 md:pt-32 pb-6 md:pb-10 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 items-center gap-10">
        {/* Image - First on mobile, second on desktop */}
        <div className="order-1 md:order-2 flex items-center justify-center">
          {productImages.map((img, index) => (
            <motion.img
              key={index}
              src={img}
              alt="CLINZEE Product"
              className="w-full max-w-sm md:max-w-md object-contain drop-shadow-xl absolute"
              initial={{ opacity: 0 }}
              animate={{ opacity: index === currentIndex ? 1 : 0 }}
              transition={{ duration: 0.7 }}
              style={{ position: index === currentIndex ? "relative" : "absolute" }}
            />
          ))}
        </div>

        {/* Content - Second on mobile, first on desktop */}
        <motion.div
          className="order-2 md:order-1 text-center md:text-left"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
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
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
