import { useNavigate } from "react-router-dom";

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      className="
        group inline-flex items-center gap-2
        text-blue-700 hover:text-white
        bg-blue-100 hover:bg-blue-700
        text-sm md:text-base font-semibold
        px-4 py-2 rounded-full
        shadow hover:shadow-lg
        transition-all duration-300 ease-in-out
      "
    >
      {/* Beautiful curved tail arrow icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-[-2px] transition-transform duration-300"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 19l-7-7 7-7"
        />
      </svg>

      <span className="group-hover:text-white">Back to Products</span>
    </button>
  );
};

export default BackButton;
