import detergentImg from "../assets/liquidDetergent.webp";
import handwashImg from "../assets/handwash.webp";
import toiletCleanerImg from "../assets/toiletCleaner.webp";
import dishwashImg from "../assets/dishwash.webp";
import phenylImg from "../assets/phenyl.webp";
import redToiletCleanerImg from "../assets/sample1.png"; // Add this image to your assets

const products = [
  {
    name: "Liquid Detergent",
    image: detergentImg,
    description: "Tough on stains, gentle on clothes. Leaves a fresh, long-lasting fragrance.",
    bg: "from-blue-100 to-blue-50",
  },
  {
    name: "Hand Wash",
    image: handwashImg,
    description: "Kills 99.9% germs with every wash. Moisturizing & safe for daily use.",
    bg: "from-green-100 to-green-50",
  },
  {
    name: "Toilet Cleaner",
    image: toiletCleanerImg,
    description: "Deep cleans and removes tough stains. Keeps your toilet hygienic and fresh.",
    bg: "from-indigo-100 to-indigo-50",
  },
  {
    name: "Red Toilet Cleaner",
    image: redToiletCleanerImg,
    description: "Strong disinfectant for stubborn stains. Keeps toilets ultra-clean and hygienic.",
    bg: "from-red-100 to-red-50",
  },
  {
    name: "Dishwash Gel",
    image: dishwashImg,
    description: "Powerful grease-cutting action. Leaves dishes sparkling clean with lemon freshness.",
    bg: "from-yellow-100 to-yellow-50",
  },
  {
    name: "Phenyl",
    image: phenylImg,
    description: "Antibacterial floor cleaner for a spotless, fragrant, and safe home.",
    bg: "from-purple-100 to-purple-50",
  },
];

const Products = () => {
  return (
    <section className="pt-[120px] pb-16 px-4 md:px-8 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center text-blue-900 mb-10 tracking-tight">
          Explore Our Product Range
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <div
              key={product.name}
              className={`rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 bg-gradient-to-br ${product.bg}`}
            >
              <div className="h-56 flex items-center justify-center p-6">
                <img
                  src={product.image}
                  alt={product.name}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-2xl font-bold text-blue-800 mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {product.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
