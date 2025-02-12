const Footer = () => {
  return (
    <footer className="bg-brand-blue text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center justify-center space-x-2 mb-4 bg-white rounded-lg p-3 ">
              {/* <Anchor className="h-6 w-6 text-brand-red" /> */}

              <span className="text-xl font-bold text-brand-red">Aruna</span>
              <span className="text-xl font-bold text-indigo-900">
                Promoters
              </span>
            </div>
            <p className="text-gray-200">
              Leading the way in ship parts fabrication and infrastructure
              solutions
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-200">
              <li>
                <a
                  href="#services"
                  className="hover:text-brand-red transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#location"
                  className="hover:text-brand-red transition-colors"
                >
                  Location
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="hover:text-brand-red transition-colors"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-brand-red transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-200">
              <li>Aruna Promoters Pvt. Ltd.</li>
              <li>Cheranallur, Ernakulam</li>
              <li>Kerala 682034, India</li>
              <li>info@arunapromoters.com</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-200 hover:text-brand-red transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="#"
                className="text-gray-200 hover:text-brand-red transition-colors"
              >
                Twitter
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-white/20 mt-8 pt-8 text-center text-gray-200">
          <p>
            &copy; {new Date().getFullYear()} Aruna Promoters Pvt. Ltd. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
