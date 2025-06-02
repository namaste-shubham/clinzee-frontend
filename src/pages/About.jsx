const About = () => {
  return (
   <section className="pt-28 pb-12 px-4 md:px-8 bg-gradient-to-br from-green-50 to-blue-50 text-gray-800">

      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-blue-900 mb-4 tracking-tight">
          About <span className="text-green-600">Clinzee</span>
        </h2>
        <p className="text-lg md:text-xl font-medium text-gray-700 mb-8 leading-relaxed">
          Clinzee is more than just a brand — it's your home’s hygiene partner.
          We craft powerful, eco-friendly cleaning products that keep your
          spaces spotless and your family safe. Trusted by families who value
          cleanliness, safety, and quality.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mt-10">
        <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition-all border-l-4 border-green-500">
          <h3 className="text-xl font-bold text-blue-800 mb-2">
            🌿 Natural & Safe Ingredients
          </h3>
          <p className="text-gray-700">
            Every Clinzee product is made with carefully chosen ingredients that
            are tough on stains but gentle on your hands and surfaces.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition-all border-l-4 border-blue-500">
          <h3 className="text-xl font-bold text-blue-800 mb-2">
            🛡️ Trusted Quality
          </h3>
          <p className="text-gray-700">
            Our products go through strict quality control to ensure top
            performance and safety — every single time.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition-all border-l-4 border-purple-500">
          <h3 className="text-xl font-bold text-blue-800 mb-2">
            🌍 Eco-Conscious Approach
          </h3>
          <p className="text-gray-700">
            We’re committed to sustainability — using recyclable packaging and
            biodegradable ingredients that care for our planet.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition-all border-l-4 border-yellow-500">
          <h3 className="text-xl font-bold text-blue-800 mb-2">
            💡 Innovation Driven
          </h3>
          <p className="text-gray-700">
            From fast-acting toilet cleaners to effective dish gels, we innovate
            for your evolving needs — giving you products that work smarter.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
