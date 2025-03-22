import { useState } from 'react';
import { Filter, SlidersHorizontal } from 'lucide-react';

const CATEGORIES = ['All', 'T-Shirts', 'Shirts', 'Pants', 'Jackets', 'Accessories'];
const SIZES = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];

// Sample product data
const PRODUCTS = [
  {
    id: 1,
    name: "Premium Cotton T-Shirt",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?q=80&w=1974&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "Slim Fit Denim Jeans",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?q=80&w=1926&auto=format&fit=crop"
  },
  {
    id: 3,
    name: "Classic Oxford Shirt",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1602810318660-d2c46b750e88?q=80&w=1970&auto=format&fit=crop"
  },
  {
    id: 4,
    name: "Leather Jacket",
    price: 249.99,
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=1935&auto=format&fit=crop"
  },
  {
    id: 5,
    name: "Casual Hoodie",
    price: 69.99,
    image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=1972&auto=format&fit=crop"
  },
  {
    id: 6,
    name: "Formal Blazer",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1593032465175-481ac7f401f0?q=80&w=2080&auto=format&fit=crop"
  },
  {
    id: 7,
    name: "Striped Polo Shirt",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=1964&auto=format&fit=crop"
  },
  {
    id: 8,
    name: "Chino Pants",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=1997&auto=format&fit=crop"
  }
];

const MensCollection = () => {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');

  return (
    <div className="pt-20">
      {/* Hero Banner */}
      <div className="relative h-[300px] md:h-[400px]">
        <img 
          src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=2070&auto=format&fit=crop" 
          alt="Men's Collection" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">Men's Collection</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        {/* Mobile Filter Toggle */}
        <div className="md:hidden mb-6">
          <button 
            onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
            className="flex items-center space-x-2 glass px-4 py-2 rounded-lg"
          >
            <SlidersHorizontal size={20} />
            <span>Filters</span>
          </button>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Filters - Desktop */}
          <div className="hidden md:block w-64 flex-shrink-0">
            <div className="sticky top-24">
              <div className="mb-8">
                <h3 className="text-lg font-medium mb-4 flex items-center">
                  <Filter size={18} className="mr-2" /> Categories
                </h3>
                <div className="space-y-2">
                  {CATEGORIES.map(category => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`block w-full text-left px-3 py-2 rounded ${
                        selectedCategory === category 
                          ? 'bg-black text-white' 
                          : 'hover:bg-gray-100'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-lg font-medium mb-4">Size</h3>
                <div className="flex flex-wrap gap-2">
                  {SIZES.map(size => (
                    <button
                      key={size}
                      className="w-10 h-10 rounded-md border border-gray-300 flex items-center justify-center hover:border-black"
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-4">Price Range</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="price1" className="rounded" />
                    <label htmlFor="price1">Under $50</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="price2" className="rounded" />
                    <label htmlFor="price2">$50 - $100</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="price3" className="rounded" />
                    <label htmlFor="price3">$100 - $200</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="price4" className="rounded" />
                    <label htmlFor="price4">$200+</label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Filters - Mobile */}
          {mobileFiltersOpen && (
            <div className="md:hidden mb-6 glass p-4 rounded-lg">
              <div className="mb-6">
                <h3 className="text-lg font-medium mb-3">Categories</h3>
                <div className="flex flex-wrap gap-2">
                  {CATEGORIES.map(category => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-3 py-1 rounded-full text-sm ${
                        selectedCategory === category 
                          ? 'bg-black text-white' 
                          : 'bg-gray-100'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-medium mb-3">Size</h3>
                <div className="flex flex-wrap gap-2">
                  {SIZES.map(size => (
                    <button
                      key={size}
                      className="w-10 h-10 rounded-md border border-gray-300 flex items-center justify-center"
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-3">Price Range</h3>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="mobile-price1" className="rounded" />
                    <label htmlFor="mobile-price1">Under $50</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="mobile-price2" className="rounded" />
                    <label htmlFor="mobile-price2">$50 - $100</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="mobile-price3" className="rounded" />
                    <label htmlFor="mobile-price3">$100 - $200</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="mobile-price4" className="rounded" />
                    <label htmlFor="mobile-price4">$200+</label>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Products Grid */}
          <div className="flex-grow">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {PRODUCTS.map((product) => (
                <div key={product.id} className="group">
                  <div className="relative overflow-hidden rounded-lg mb-4">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-[350px] object-cover transition-transform group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <button className="glass px-4 py-2 rounded-md font-medium">
                        Quick View
                      </button>
                    </div>
                  </div>
                  <h3 className="font-medium">{product.name}</h3>
                  <p className="text-gray-500">${product.price}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MensCollection;
