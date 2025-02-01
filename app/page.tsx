import Image from "next/image";
import {
  Anchor,
  Ship,
  Shield,
  PenTool as Tool,
  Users,
  Wrench,
  MapPin,
  Warehouse,
} from "lucide-react";
import aruna from "../public/aruna.svg";
export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <header className="relative h-screen">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?auto=format&fit=crop&q=80"
            alt="Shipyard"
            fill
            className="object-cover"
            quality={80}
          />
          <div className="absolute inset-0 bg-brand-blue/70"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 h-full flex flex-col justify-center">
          <nav className="absolute top-0 left-0 right-0 py-6">
            <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Image
                  src={aruna}
                  alt="Aruna Promoters Logo"
                  className="mx-auto h-16 w-16"
                />
                <span className="text-2xl font-bold text-brand-red">Aruna</span>
                <span className="text-2xl font-bold text-indigo-900">
                  Promoters
                </span>
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

          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Excellence in Ship Parts Fabrication
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Specializing in ship parts fabrication, maintenance, and
              pre-engineered building infrastructure solutions
            </p>
            <button className="bg-brand-red text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-white hover:text-brand-red transition duration-300">
              Learn More
            </button>
          </div>
        </div>
      </header>

      {/* Location Section */}
      <section id="location" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-brand-blue">
            Strategic Location
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <MapPin className="h-6 w-6 text-brand-red mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-brand-blue">
                    Waterfront Facility
                  </h3>
                  <p className="text-gray-600">
                    Situated on a sprawling 16-acre waterfront property in
                    Cheranallur, our strategic location on the Muttar River
                    barge waterway provides optimal accessibility for
                    shipbuilding operations.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Warehouse className="h-6 w-6 text-brand-red mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-brand-blue">
                    State-of-the-Art Facility
                  </h3>
                  <p className="text-gray-600">
                    Our facility is equipped with modern infrastructure for ship
                    parts fabrication, maintenance, and pre-engineered building
                    solutions.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-brand-red">
              <h3 className="text-2xl font-semibold mb-4 text-brand-blue">
                Visit Us
              </h3>
              <address className="not-italic text-gray-600 space-y-2">
                <p className="font-semibold">Aruna Promoters Pvt. Ltd.</p>
                <p>Cheranallur</p>
                <p>Ernakulam, Kerala 682034</p>
                <p>India</p>
              </address>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-brand-blue">
            Our Expertise
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Ship,
                title: "Ship Parts Fabrication",
                desc: "Specialized in high-quality ship parts fabrication and maintenance services",
              },
              {
                icon: Tool,
                title: "Technical Excellence",
                desc: "Proven track record with leading shipyards including Cochin Shipyard Ltd.",
              },
              {
                icon: Warehouse,
                title: "Infrastructure Solutions",
                desc: "Comprehensive pre-engineered building infrastructure solutions",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300 group border border-gray-100 hover:border-brand-red"
              >
                <service.icon className="h-12 w-12 text-brand-red mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-semibold mb-2 text-brand-blue">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Project */}
      <section className="py-16 bg-brand-blue text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Latest Achievement</h2>
            <p className="text-xl text-brand-red font-semibold">
              Prestigious Hatch Cover Project
            </p>
            <p className="text-lg text-gray-200 mt-2">
              Awarded by Cochin Shipyard Limited - May 2024
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-brand-blue">
            Why Choose Us
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Quality Assurance",
                desc: "Commitment to precision and excellence in every project",
              },
              {
                icon: Users,
                title: "Expert Team",
                desc: "Skilled professionals with deep industry expertise",
              },
              {
                icon: MapPin,
                title: "Strategic Location",
                desc: "16-acre waterfront facility with direct waterway access",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="text-center group p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <feature.icon className="h-12 w-12 text-brand-red mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-semibold mb-2 text-brand-blue">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
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
    </div>
  );
}
