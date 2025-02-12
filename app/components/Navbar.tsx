import Image from "next/image";
import aruna from "../../public/aruna.svg";

const Navbar = () => {
  return (
    <nav className="absolute top-0 left-0 right-0 py-6">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Image
            src={aruna}
            alt="Aruna Promoters Logo"
            className="mx-auto h-16 w-16"
          />
          <span className="text-2xl font-bold text-brand-red">Aruna</span>
          <span className="text-2xl font-bold text-indigo-900">Promoters</span>
        </div>
        <div className="hidden md:flex space-x-8">
          <a
            href="#services"
            className="text-white hover:text-brand-red transition-colors"
          >
            Services
          </a>
          <a
            href="#location"
            className="text-white hover:text-brand-red transition-colors"
          >
            Location
          </a>
          <a
            href="#projects"
            className="text-white hover:text-brand-red transition-colors"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="text-white hover:text-brand-red transition-colors"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
