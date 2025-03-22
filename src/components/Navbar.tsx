import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, ShoppingBag, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'glass py-3' : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center">
          <NavLink to="/" className="font-bold text-xl md:text-2xl">
            ELITE<span className="text-gray-500">EXCLUSIVE</span>
          </NavLink>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-10">
            <NavLink to="/" className={({isActive}) => 
              `text-sm uppercase tracking-wider hover:text-black transition-colors ${isActive ? 'font-medium' : 'text-gray-600'}`
            }>
              Home
            </NavLink>
            <NavLink to="/about" className={({isActive}) => 
              `text-sm uppercase tracking-wider hover:text-black transition-colors ${isActive ? 'font-medium' : 'text-gray-600'}`
            }>
              About
            </NavLink>
            <NavLink to="/mens-collection" className={({isActive}) => 
              `text-sm uppercase tracking-wider hover:text-black transition-colors ${isActive ? 'font-medium' : 'text-gray-600'}`
            }>
              Men
            </NavLink>
            <NavLink to="/womens-collection" className={({isActive}) => 
              `text-sm uppercase tracking-wider hover:text-black transition-colors ${isActive ? 'font-medium' : 'text-gray-600'}`
            }>
              Women
            </NavLink>
            <NavLink to="/contact" className={({isActive}) => 
              `text-sm uppercase tracking-wider hover:text-black transition-colors ${isActive ? 'font-medium' : 'text-gray-600'}`
            }>
              Contact
            </NavLink>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <a href="#" className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <ShoppingBag size={20} />
            </a>
          </div>

          {/* Mobile menu button */}
          <button 
            onClick={toggleMenu}
            className="md:hidden p-2 focus:outline-none"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="glass-dark md:hidden absolute top-full left-0 w-full p-4">
          <div className="flex flex-col space-y-4">
            <NavLink 
              to="/" 
              className="text-white py-2 px-4 hover:bg-white/10 rounded-md"
              onClick={closeMenu}
            >
              Home
            </NavLink>
            <NavLink 
              to="/about" 
              className="text-white py-2 px-4 hover:bg-white/10 rounded-md"
              onClick={closeMenu}
            >
              About
            </NavLink>
            <NavLink 
              to="/mens-collection" 
              className="text-white py-2 px-4 hover:bg-white/10 rounded-md"
              onClick={closeMenu}
            >
              Men's Collection
            </NavLink>
            <NavLink 
              to="/womens-collection" 
              className="text-white py-2 px-4 hover:bg-white/10 rounded-md"
              onClick={closeMenu}
            >
              Women's Collection
            </NavLink>
            <NavLink 
              to="/contact" 
              className="text-white py-2 px-4 hover:bg-white/10 rounded-md"
              onClick={closeMenu}
            >
              Contact
            </NavLink>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
