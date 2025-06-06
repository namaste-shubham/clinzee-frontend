import { Link } from "react-router-dom";

const BackButton = () => (
  <Link
    to="/products"
    className="
      inline-flex items-center gap-1
      px-3 py-1.5
      bg-blue-600 text-white rounded-full
      shadow-sm hover:bg-blue-700 active:bg-blue-800
      transition-colors duration-150 ease-in-out
      text-xs md:text-sm
      font-medium select-none
      max-w-xs mx-auto
    "
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-3 w-3 md:h-4 md:w-4"
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
