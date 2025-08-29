import { Link } from "react-router-dom";

const categories = [
  {
    name: "Liquid Detergent",
    image: "/clinzee-liquidDetergent.webp",
    description: "Removes tough stains with gentle care.",
    slug: "liquid-detergent",
  },
  {
    name: "Hand Wash",
    image: "/clinzee-handwash.webp",
    description: "Soft on skin, tough on germs. Keeps your hands fresh and clean.",
    slug: "hand-wash",
  },
  {
    name: "Toilet Cleaner",
    image: "/clinzee-toiletCleaner.webp",
    description: "Powerfully cleans your toilet, leaving it sparkling fresh with a long-lasting fragrance.",
    slug: "toilet-cleaner",
  },
  {
    name: "Dishwash Gel",
    image: "/clinzee-dishwash.webp",
    description: "Cuts grease effectively. Makes your utensils shine like new.",
    slug: "dishwash-gel",
  },
  {
    name: "White Phenyl",
    image: "/clinzee-phenyl.webp",
    description: "Powerful floor cleaner for a hygienic and fragrant home environment.",
    slug: "phenyl",
  },
  // {
  //   name: "Red Toilet Cleaner",
  //   image: "/clinzee-redToiletCleaner.webp",
  //   description: "Thick formula for tough stains. Deep cleans and disinfects with ease.",
  //   slug: "red-toilet-cleaner",
  // },
  {
    name: "Floor Cleaner",
    slug: "floor-cleaner",
    image: "/clinzee-floorCleaner.webp",
    description:
      "Ensure spotless, germ-free floors with our Floor Cleaner.",
    
  },
];

const Categories = () => (
  <section className="pt-4 md:pt-8 pb-20 px-4 bg-blue-50">
    <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-10 text-blue-900 tracking-wide">
      Our Cleaning Essentials
    </h2>

    <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
      {categories.map((item) => (
        <Link
          key={item.name}
          to={`/products/${item.slug}`}
          className="bg-white rounded-3xl shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 overflow-hidden flex flex-col"
        >
          <div className="h-52 bg-gradient-to-tr from-blue-100 to-green-100 flex items-center justify-center p-5">
            <img
              src={item.image}
              alt={item.name}
              className="max-h-full max-w-full object-contain"
            />
          </div>
          <div className="p-5 flex-grow text-center">
            <h3 className="text-lg font-bold text-blue-800 mb-1">{item.name}</h3>
            <p className="text-sm text-gray-600">{item.description}</p>
          </div>
        </Link>
      ))}
    </div>
   {/* 👇 CTA Section */}
  <div className="mt-12 text-center">
    <h3 className="text-xl font-semibold text-blue-800 mb-3">
      Looking for more?
    </h3>
    <p className="text-gray-600 mb-6">
       
      Explore the full range of <span className="font-medium text-blue-700"> CLINZEE products</span> crafted to keep your home fresh and clean.
    </p>
    <Link
      to="/products"
      className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full shadow hover:bg-blue-700 transition-all text-lg font-medium"
    >
      View All Products
    </Link>
  </div>
  </section>
  
);

export default Categories;
