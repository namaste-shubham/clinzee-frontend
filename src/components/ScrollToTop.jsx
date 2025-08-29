import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "auto", // change to "smooth" if you like animation
    });
  }, [location.pathname]);

  return null;
};

export default ScrollToTop;
