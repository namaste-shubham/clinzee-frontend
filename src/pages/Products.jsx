import detergentImg from "../assets/liquidDetergent.webp";
import handwashImg from "../assets/handwash.webp";
import toiletCleanerImg from "../assets/toiletCleaner.webp";
import dishwashImg from "../assets/dishwash.webp";
import phenylImg from "../assets/phenyl.webp";
import redToiletCleanerImg from "../assets/redToiletCleaner.png";

const products = [
  {
    name: "Liquid Detergent",
    image: detergentImg,
    description:
      "Experience a new level of fabric care with our Liquid Detergent. Specially formulated to remove stubborn stains while maintaining the softness of your clothes. Its fresh fragrance keeps your laundry smelling amazing all day long, even in hard water.",
    bg: "from-blue-100 to-blue-50",
  },
  {
    name: "Hand Wash",
    image: handwashImg,
    description:
      "Protect your family with our germ-killing Hand Wash that’s gentle on skin but tough on bacteria. Enriched with moisturizing agents, it leaves your hands soft, hydrated, and clean with every wash — perfect for frequent daily use.",
    bg: "from-green-100 to-green-50",
  },
  {
    name: "Toilet Cleaner",
    image: toiletCleanerImg,
    description:
      "Give your toilet a deep, hygienic clean. Our Toilet Cleaner targets hard water stains, mineral deposits, and germs with precision, ensuring a sparkling finish and long-lasting freshness every time you flush.",
    bg: "from-indigo-100 to-indigo-50",
  },
  {
    name: "Red Toilet Cleaner",
    image: redToiletCleanerImg,
    description:
      "Engineered for stubborn stains and high-use toilets, our Red Toilet Cleaner clings to the bowl, breaks down grime, and eliminates 99.9% of germs. The powerful disinfectant leaves behind a clean surface and a pleasant fragrance.",
    bg: "from-red-100 to-red-50",
  },
  {
    name: "Dishwash Gel",
    image: dishwashImg,
    description:
      "Tackle greasy utensils and tough food stains with ease. Our Dishwash Gel delivers a powerful clean while being gentle on your hands. Its lemon-fresh scent and quick-rinse formula make dishwashing effortless and satisfying.",
    bg: "from-yellow-100 to-yellow-50",
  },
  {
    name: "Phenyl",
    image: phenylImg,
    description:
      "Maintain a spotless home with our antibacterial Phenyl. Perfect for daily floor cleaning, it kills harmful germs, removes dirt efficiently, and leaves your rooms with a refreshing fragrance that lingers long after mopping.",
    bg: "from-purple-100 to-purple-50",
  },
];

const Products = () => {
  return (
    <section className="pt-[120px] pb-20 px-4 md:px-8 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center text-blue-900 mb-12 tracking-tight">
          Explore Our Product Range
        </h2>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <div
              key={product.name}
              className={`rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-transform duration-300 bg-gradient-to-br ${product.bg}`}
            >
              <div className="h-60 flex items-center justify-center p-6 bg-white/40">
                <img
                  src={product.image}
                  alt={product.name}
                  className="max-h-full max-w-full object-contain drop-shadow-md"
                />
              </div>
              <div className="p-6 text-center flex flex-col gap-3">
                <h3 className="text-2xl font-bold text-blue-800">{product.name}</h3>
                <p className="text-gray-700 text-sm leading-relaxed text-justify">
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
