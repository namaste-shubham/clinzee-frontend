function ThankYou() {
  return (
    <div className="flex items-center justify-center pt-[120px] pb-10 px-6 min-h-screen bg-gradient-to-b from-green-50 to-blue-50">
      <div className="text-center max-w-2xl">
        <h1 className="text-3xl md:text-4xl font-bold text-green-700 mb-4">Thank You!</h1>
        <p className="text-base md:text-lg text-gray-700 mb-6">
          Your message has been successfully submitted. We’ll get back to you shortly.
        </p>
        <a
          href="/"
          className="inline-block mt-4 bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 transition"
        >
          Go to Home
        </a>
      </div>
    </div>
  );
}

export default ThankYou;
