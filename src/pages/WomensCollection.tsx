import { useState } from 'react';
import { Filter, SlidersHorizontal } from 'lucide-react';

const CATEGORIES = ['All', 'Dresses', 'Tops', 'Pants', 'Skirts', 'Accessories'];
const SIZES = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];

// Sample product data
const PRODUCTS = [
  {
    id: 1,
    name: "Floral Maxi Dress",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=1983&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "Silk Blouse",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1551163943-3f7e29e5ed5a?q=80&w=2000&auto=format&fit=crop"
  },
  {
    id: 3,
    name: "High-Waisted Jeans",
    price: 99.99,
    image: "https://images.unsplash.com/photo-1584370848010-d7fe6bc767ec?q=80&w=1974&auto=format&fit=crop"
  },
  {
    id: 4,
    name: "Cocktail Dress",
    price: 159.99,
    image: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?q=80&w=1974&auto=format&fit=crop"
  },
  {
    id: 5,
    name: "Cashmere Sweater",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?q=80&w=1935&auto=format&fit=crop"
  },
  {
    id: 6,
    name: "Pleated Skirt",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?q=80&w=1936&auto=format&fit=crop"
  },
  {
    id: 7,
    name: "Designer Handbag",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1591561954557-26941169b49e?q=80&w=1974&auto=format&fit=crop"
  },
  {
    id: 8,
    name: "Statement Earrings",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=2068&auto=format&fit=crop"
  }
];

const WomensCollection = () => {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');

  return (
    <div className="pt-20">
      {/* Hero Banner */}
      <div className="relative h-[300px] md:h-[400px]">
        <img 
          src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2070&auto=format&fit=crop" 
          alt="Women's Collection" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">Women's Collection</h1>
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

export default WomensCollection;
