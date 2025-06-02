const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-blue-50 text-gray-700 py-6 border-t mt-10">
      <div className="max-w-screen-xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Brand Info */}
        <div>
          <h2 className="text-xl font-bold text-blue-800 mb-2">CLINZEE</h2>
          <p className="text-sm">
            Bringing cleanliness to every home — with high-quality and affordable cleaning products made for everyday Indian households.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1 text-sm">
            <li><a href="/" className="hover:text-blue-600">Home</a></li>
            <li><a href="/products" className="hover:text-blue-600">Products</a></li>
            <li><a href="/contact" className="hover:text-blue-600">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-semibold mb-2">Contact</h3>
          <p className="text-sm">Email: support@clinzee.com</p>
          <p className="text-sm">Phone: +91-9876543210</p>
          <p className="text-sm">Location: India</p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-6 text-center text-xs text-gray-500">
        &copy; {currentYear} CLINZEE. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
