import { ChevronRight, CircleDollarSign, Package, TrendingUp } from 'lucide-react';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2070&auto=format&fit=crop"
            alt="Fashion model" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Elevate Your Style</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-xl">
            Discover exclusive apparel for those who appreciate luxury, quality, and uniqueness.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="/mens-collection" className="btn-primary">
              Shop Men's Collection
            </a>
            <a href="/womens-collection" className="px-6 py-3 rounded-md border border-white text-white font-medium hover:bg-white/10 transition-all">
              Shop Women's Collection
            </a>
          </div>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="section">
        <h2 className="section-title">Featured Collections</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative group overflow-hidden rounded-lg">
            <img 
              src="https://images.unsplash.com/photo-1617137968427-85924c800a22?q=80&w=1974&auto=format&fit=crop" 
              alt="Men's Collection" 
              className="w-full h-[500px] object-cover transition-transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/30 flex items-end p-6">
              <div>
                <h3 className="text-white text-2xl font-bold">Men's Collection</h3>
                <a href="/mens-collection" className="flex items-center text-white mt-2 hover:underline">
                  Explore <ChevronRight size={16} className="ml-1" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="relative group overflow-hidden rounded-lg">
            <img 
              src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=2070&auto=format&fit=crop" 
              alt="Women's Collection" 
              className="w-full h-[500px] object-cover transition-transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/30 flex items-end p-6">
              <div>
                <h3 className="text-white text-2xl font-bold">Women's Collection</h3>
                <a href="/womens-collection" className="flex items-center text-white mt-2 hover:underline">
                  Explore <ChevronRight size={16} className="ml-1" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="section-title">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass p-8 rounded-xl text-center">
              <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">Premium Quality</h3>
              <p className="text-gray-600">
                Our garments are crafted with the finest materials, ensuring comfort and durability for years to come.
              </p>
            </div>
            
            <div className="glass p-8 rounded-xl text-center">
              <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <CircleDollarSign size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">Exclusive Designs</h3>
              <p className="text-gray-600">
                Each piece is thoughtfully designed to offer you a unique style that stands out from the crowd.
              </p>
            </div>
            
            <div className="glass p-8 rounded-xl text-center">
              <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <Package size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">Global Shipping</h3>
              <p className="text-gray-600">
                We deliver our exclusive apparels worldwide, bringing premium fashion right to your doorstep.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* New Arrivals Highlight */}
      <section className="section">
        <h2 className="section-title">New Arrivals</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="group">
              <div className="relative overflow-hidden rounded-lg mb-4">
                <img 
                  src={`https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=1974&auto=format&fit=crop&h=500&w=400`} 
                  alt={`Fashion item ${item}`} 
                  className="w-full h-[350px] object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <button className="bg-white text-black px-4 py-2 rounded-md font-medium">
                    Quick View
                  </button>
                </div>
              </div>
              <h3 className="font-medium">Exclusive Item {item}</h3>
              <p className="text-gray-500">$199.99</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <a href="#" className="btn-primary inline-block">View All New Arrivals</a>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Our Exclusive Club</h2>
          <p className="text-gray-300 mb-8 max-w-xl mx-auto">
            Subscribe to our newsletter for early access to new collections, exclusive offers, and style inspiration.
          </p>
          <form className="max-w-md mx-auto flex">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-grow px-4 py-3 rounded-l-md focus:outline-none text-black"
              required
            />
            <button type="submit" className="bg-white text-black px-6 py-3 rounded-r-md font-medium hover:bg-gray-200 transition-colors">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Home;
