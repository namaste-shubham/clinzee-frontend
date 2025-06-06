import { products } from "../utils/product";
import { Link } from "react-router-dom";

// utils.js or inside Products.jsx file
const excerpt = (text, maxLength = 100) => {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + "...";
};

const Products = () => {
  return (
    <section className="pt-[120px] pb-20 px-4 md:px-8 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center text-blue-900 mb-12 tracking-tight">
          Explore Our Product Range
        </h2>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <Link
              key={product.slug}
              to={`/products/${product.slug}`}
              className={`block rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-transform duration-300 bg-gradient-to-br ${product.bg}`}
            >
              <div className="h-60 flex items-center justify-center p-6 bg-white/40">
                <img
                  src={product.image}
                  alt={product.name}
                  className="max-h-full max-w-full object-contain drop-shadow-md"
                />
              </div>
              <div className="p-6 text-center flex flex-col gap-3">
                <h3 className="text-2xl font-bold text-blue-800">
                  {product.name}
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed text-justify">
                  {excerpt(product.description, 100)}{" "}
                  <span className="text-blue-600 font-medium">View details</span>
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
