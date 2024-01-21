import { Link } from "react-router-dom";
import DesktopNavbar from "./DesktopNavbar";
import useNavbarHook from "../../hooks/useNavbarHook";
import MobileNavbar from "./MobileNavbar";

const linkData = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "About",
    url: "/about",
  },
  {
    name: "Community",
    url: "/community",
  },
  {
    name: "Darshan",
    url: "/darshan",
  },
];

const Navbar = () => {
  const { isMenuOpen, isMobile, closeMenu, toggleMenu } = useNavbarHook();

  return (
    <>
      <header className="flex max-w-9xl bg-orange-500 text-black font-serif shadow-lg justify-between items-center">
        <div className="w-20 h-22">
          <img
            src="https://coreldrawdesign.com/resources/previews/preview-shree-ram-png-image-free-design-jai-shree-ram-free-vector-image-download-1699429588.jpg"
            alt=""
          />
        </div>
        {isMobile ? (
          <MobileNavbar
            links={linkData}
            isMenuOpen={isMenuOpen}
            closeMenu={closeMenu}
            toggleMenu={toggleMenu}
          />
        ) : (
          <DesktopNavbar links={linkData} />
        )}
      </header>
    </>
  );
};

export default Navbar;
