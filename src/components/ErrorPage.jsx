import { useNavigate } from "react-router-dom";

function ErrorPage() {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center min-h-screen bg-red-50 px-6">
      <div className="max-w-lg text-center bg-white p-8 rounded-xl shadow border border-red-200">
        <h1 className="text-3xl font-bold text-red-600 mb-4">Oops! Something went wrong.</h1>
        <p className="text-lg text-gray-700 mb-4">
          We couldn't submit your message at this time. Please try again later.
        </p>
        <p className="text-md text-gray-700 mb-6">
          If the problem persists, please email us directly at:{" "}
          <a href="mailto:support@clinzee.com" className="text-red-600 underline">
            support@clinzee.com
          </a>.
        </p>
        <button
          onClick={() => navigate(-1)} // goes back to the previous page
          className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 transition"
        >
          Go Back
        </button>
      </div>
    </div>
  );
}

export default ErrorPage;
