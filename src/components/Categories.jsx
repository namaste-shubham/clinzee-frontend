// Categories.jsx
import detergentImg from "../assets/liquidDetergent.webp";
import handwashImg from "../assets/handwash.webp";
import toiletCleanerImg from "../assets/toiletCleaner.webp";
import dishwashImg from "../assets/dishwash.webp";
import phenylImg from "../assets/phenyl.webp";
import redToiletCleaner from '../assets/sample1.png'

const categories = [
  { name: "Liquid Detergent", image: detergentImg },
  { name: "Hand Wash", image: handwashImg },
  { name: "Toilet Cleaner", image: toiletCleanerImg },
  { name: "Dishwash Gel", image: dishwashImg },
  { name: "Phenyl", image: phenylImg },
  {name: "Red Toilet Cleaner", image: redToiletCleaner}
];

const Categories = () => (
  <section className="py-10 px-4">
    <h2 className="text-3xl font-extrabold text-center mb-8 text-blue-800 tracking-wide">
      Our Products
    </h2>

    <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
      {categories.map((item) => (
        <div
          key={item.name}
          className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300"
        >
          <div className="h-52 bg-gradient-to-br from-blue-100 to-green-100 flex items-center justify-center p-4">
            <img
              src={item.image}
              alt={item.name}
              className="max-h-full max-w-full object-contain"
            />
          </div>
          <div className="p-4 text-center">
            <p className="text-lg font-bold text-blue-900 tracking-wide">
              {item.name}
            </p>
            <div className="h-1 w-10 bg-green-500 rounded-full mx-auto mt-2" />
          </div>
        </div>
      ))}
    </div>
  </section>
);


export default Categories;
