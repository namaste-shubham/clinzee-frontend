// Categories.jsx
const categories = [
  {
    name: "Liquid Detergent",
    image: "/clinzee-liquidDetergent.webp",
    description: "Removes tough stains with gentle care.",
  },
  {
    name: "Hand Wash",
    image: "/clinzee-handwash.webp",
    description: "Soft on skin, tough on germs. Keeps your hands fresh and clean.",
  },
  {
    name: "Toilet Cleaner",
    image: "/clinzee-toiletCleaner.webp",
    description: "Powerfully cleans your toilet, leaving it sparkling fresh with a long-lasting fragrance.",
  },
  {
    name: "Dishwash Gel",
    image: "/clinzee-dishwash.webp",
    description: "Cuts grease effectively. Makes your utensils shine like new.",
  },
  {
    name: "Phenyl",
    image: "/clinzee-phenyl.webp",
    description: "Powerful floor cleaner for a hygienic and fragrant home environment.",
  },
  {
    name: "Red Toilet Cleaner",
    image: "/clinzee-redToiletCleaner.webp",
    description: "Thick formula for tough stains. Deep cleans and disinfects with ease.",
  },
];

const Categories = () => (
  <section className="pt-4 md:pt-8 pb-20 px-4 bg-blue-50">
    <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-10 text-blue-900 tracking-wide">
      Our Cleaning Essentials
    </h2>

    <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
      {categories.map((item) => (
        <div
          key={item.name}
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
        </div>
      ))}
    </div>
  </section>
);

export default Categories;
