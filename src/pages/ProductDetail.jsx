import { useParams, Link } from "react-router-dom";
import { products } from "../utils/product";
import BackButton from "../components/BackButton";

const ProductDetail = () => {
  const { productId } = useParams();
  const product = products.find((p) => p.slug === productId);

  if (!product) {
    return (
      <div className="pt-[120px] p-6 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4 text-red-600">
          Product Not Found
        </h2>
        <BackButton />
      </div>
    );
  }

  return (
    <section className="pt-[120px] p-6 max-w-4xl mx-auto space-y-8">
      <BackButton />
      <h1 className="text-4xl font-bold text-blue-800">{product.name}</h1>

      <div className="flex flex-col md:flex-row gap-8">
        <img
          src={product.image}
          alt={product.name}
          className="w-full md:w-1/2 max-h-96 object-contain drop-shadow-md rounded-xl"
        />

        <div className="md:w-1/2 space-y-6 text-gray-700">
          <p className="text-lg leading-relaxed">{product.description}</p>

          {product.keyBenefits && (
            <section>
              <h3 className="text-2xl font-semibold text-blue-900 mb-3">
                Key Benefits
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                {product.keyBenefits.map((benefit, idx) => (
                  <li key={idx}>{benefit}</li>
                ))}
              </ul>
            </section>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;