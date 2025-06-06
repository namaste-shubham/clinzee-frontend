import { Link } from "react-router-dom";

const BackButton = () => (
  <Link
    to="/products"
    className="inline-flex items-center gap-2 px-5 py-3 bg-blue-600 text-white rounded-full
               shadow-md hover:bg-blue-700 active:bg-blue-800 transition-colors duration-200
               ease-in-out text-base font-semibold select-none max-w-xs mx-auto"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-2 w-2"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
    </svg>
    Back to Products
  </Link>
);

export default BackButton;
