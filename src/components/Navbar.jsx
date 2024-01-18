import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 786);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 786);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="flex max-w-9xl bg-yellow-300 text-black font-serif shadow-lg justify-between items-center">
        <div className="w-20 h-22">
          <img
            src="https://coreldrawdesign.com/resources/previews/preview-shree-ram-png-image-free-design-jai-shree-ram-free-vector-image-download-1699429588.jpg"
            alt=""
          />
        </div>
        {isMobile ? (
          // Mobile menu
          <div className="md:hidden">
            <button onClick={toggleMenu} className="p-3">
              {isMenuOpen ? (
                // Close icon
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                // Hamburger icon
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
            {isMenuOpen && (
              <div className="absolute top-16 right-0 left-0 bg-white p-4 text-center">
                {/* Mobile menu items */}
                <Link
                  to="/"
                  className="block text-lg font-semibold text-gray-800 hover:bg-blue-100"
                  onClick={closeMenu}
                >
                  Home
                </Link>
                <Link
                  to="/about"
                  className="block text-lg font-semibold text-gray-800 hover:bg-blue-100"
                  onClick={closeMenu}
                >
                  About Darshan
                </Link>
                <Link
                  to="/darshan"
                  className="block text-lg font-semibold text-gray-800 hover:bg-gray-100"
                  onClick={closeMenu}
                >
                  Darshan Info
                </Link>
                <Link
                  to="/community"
                  className="block text-lg font-semibold text-gray-800 hover:bg-gray-100"
                  onClick={closeMenu}
                >
                  Community
                </Link>
              </div>
            )}
          </div>
        ) : (
          // Desktop menu
          <div className="md:flex px-7">
            <Link to="/" className="p-3">
              Home
            </Link>
            <Link to="/about" className="p-3">
              About Darshan
            </Link>
            <Link to="/darshan" className="p-3">
              Darshan Info
            </Link>
            <Link to="/community" className="p-3">
              Community
            </Link>
          </div>
        )}
      </header>
    </>
  );
};

export default Navbar;
