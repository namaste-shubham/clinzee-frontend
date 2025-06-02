import { ArrowRight } from "lucide-react"; // Optional icon library

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-blue-50 text-gray-700 py-8 border-t mt-10">
      <div className="max-w-screen-xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Brand Info */}
        <div>
          <h2 className="text-xl font-bold text-blue-800 mb-3">CLINZEE</h2>
          <p className="text-sm leading-relaxed">
            Bringing cleanliness to every home — with high-quality and affordable cleaning products made for everyday Indian households.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-3 text-blue-800">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            {[
              { name: "Home", href: "/" },
              { name: "Products", href: "/products" },
              { name: "Contact", href: "/contact" },
            ].map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="inline-flex items-center gap-1 text-gray-700 hover:text-blue-700 transition-colors duration-200 group"
                >
                  <span className="group-hover:underline">{link.name}</span>
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all duration-300" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-semibold mb-3 text-blue-800">Contact</h3>
          <p className="text-sm mb-1">
            <span className="font-medium">Email:</span> omprakash62023@gmail.com
          </p>
          <p className="text-sm">
            <span className="font-medium">Location:</span> Raxaul, Bihar
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-8 text-center text-xs text-gray-500">
        &copy; {currentYear} Jyoti Enterprises. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
