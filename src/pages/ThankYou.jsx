import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { CheckCircle } from "lucide-react";

function ThankYou() {
  const location = useLocation();
  const navigate = useNavigate();
  const { name, email } = location.state || {};

  useEffect(() => {
    if (!name || !email) {
      navigate("/");
    }
  }, [name, email, navigate]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-green-100 via-white to-blue-100 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl border border-gray-100 text-center p-6 sm:p-8">
        <CheckCircle className="text-green-600 mx-auto w-12 h-12 mb-4" />
        <h1 className="text-2xl font-bold text-gray-800 mb-2">
          Thank you{ name ? `, ${name}` : "" }!
        </h1>
        <p className="text-gray-700 text-sm sm:text-base mb-4">
          We’ve received your message. A confirmation has been sent to{" "}
          <span className="text-blue-700 font-medium break-all">{email}</span>.
        </p>
        <p className="text-gray-600 text-sm mb-6">
          Our team at <span className="font-semibold text-green-700">Clinzee</span> will get back to you shortly.
        </p>
        <a
          href="/"
          className="inline-block w-full bg-blue-600 text-white py-2 rounded-xl font-medium hover:bg-blue-700 transition"
        >
          Go to Home
        </a>
      </div>
    </div>
  );
}

export default ThankYou;
