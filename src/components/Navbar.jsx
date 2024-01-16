import AboutDarshan from "./AboutDarshan";

const Navbar = ()=>(
    <>
    <header className="flex bg-yellow-300 text-black font-serif shadow-lg justify-between items-center">
    <div className="w-20 h-22">
        <img src="https://coreldrawdesign.com/resources/previews/preview-shree-ram-png-image-free-design-jai-shree-ram-free-vector-image-download-1699429588.jpg" alt="" />
    </div>
    <div>
      <ul className="flex px-7"> 
        <li className="p-3">Home</li>
        <li className="p-3">About Darshan</li>
        <li className="p-3">Darshan Info</li>
        <li className="p-3">Community</li>
    </ul>
  </div>
    </header>
    </>
)

export default Navbar;