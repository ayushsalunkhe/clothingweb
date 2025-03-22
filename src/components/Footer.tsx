import { Facebook, Instagram, Mail, MapPin, Phone, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4">ELITEEXCLUSIVE</h3>
            <p className="text-gray-400 text-sm">
              Elevate your style with our exclusive clothing collection, crafted for those who demand both elegance and comfort.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="hover:text-gray-300 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-gray-300 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-gray-300 transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-medium mb-4 uppercase tracking-wider text-sm">Shop</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">New Arrivals</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Men's Collection</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Women's Collection</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Accessories</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Sale</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-4 uppercase tracking-wider text-sm">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-4 uppercase tracking-wider text-sm">Contact Us</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-center">
                <MapPin size={16} className="mr-2" />
                <span>123 Fashion Street, City, Country</span>
              </li>
              <li className="flex items-center">
                <Phone size={16} className="mr-2" />
                <span>+1 (123) 456-7890</span>
              </li>
              <li className="flex items-center">
                <Mail size={16} className="mr-2" />
                <span>info@elitexclusiveapparels.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Elite Exclusive Apparels. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
