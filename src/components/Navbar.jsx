import { Link } from "react-router-dom";

const Navbar = () => (
  <>
    <header className="flex bg-yellow-300 text-black font-semibold shadow-lg justify-between items-center">
      <div className="w-20 h-22">
        <img
          src="https://coreldrawdesign.com/resources/previews/preview-shree-ram-png-image-free-design-jai-shree-ram-free-vector-image-download-1699429588.jpg"
          alt=""
        />
      </div>
      <div>
        <ul className="flex px-7">
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
        </ul>
      </div>
    </header>
  </>
);

export default Navbar;
