import { ShieldCheck, Sparkles, Users } from 'lucide-react';

const About = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-32 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Story</h1>
            <p className="text-lg text-gray-600 mb-8">
              Elite Exclusive Apparels was founded with a passion for creating high-quality clothing that makes people feel confident and look their best.
            </p>
          </div>
        </div>
      </section>

      {/* Our Journey */}
      <section className="section">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Journey</h2>
            <p className="text-gray-600 mb-4">
              Established in 2018, Elite Exclusive Apparels began as a small boutique with a big vision. Our founder, with over 15 years of experience in the fashion industry, wanted to create a brand that combined luxury with accessibility.
            </p>
            <p className="text-gray-600 mb-4">
              What started as a passion project has now grown into a recognized name in the fashion industry, with customers from around the globe appreciating our commitment to quality and design.
            </p>
            <p className="text-gray-600">
              Today, we continue to expand our collections while staying true to our founding principles: exceptional quality, unique designs, and outstanding customer service.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?q=80&w=2070&auto=format&fit=crop" 
              alt="Fashion workshop" 
              className="w-full h-[400px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="bg-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="section-title">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass p-8 rounded-xl">
              <div className="w-14 h-14 bg-black text-white rounded-full flex items-center justify-center mb-6">
                <Sparkles size={24} />
              </div>
              <h3 className="text-xl font-bold mb-4">Quality Craftsmanship</h3>
              <p className="text-gray-600">
                We believe in creating garments that stand the test of time, both in design and durability. Each piece is crafted with attention to detail and the finest materials.
              </p>
            </div>
            
            <div className="glass p-8 rounded-xl">
              <div className="w-14 h-14 bg-black text-white rounded-full flex items-center justify-center mb-6">
                <ShieldCheck size={24} />
              </div>
              <h3 className="text-xl font-bold mb-4">Ethical Practices</h3>
              <p className="text-gray-600">
                We're committed to ethical manufacturing processes and fair labor practices. We work closely with our partners to ensure responsible production.
              </p>
            </div>
            
            <div className="glass p-8 rounded-xl">
              <div className="w-14 h-14 bg-black text-white rounded-full flex items-center justify-center mb-6">
                <Users size={24} />
              </div>
              <h3 className="text-xl font-bold mb-4">Customer Focus</h3>
              <p className="text-gray-600">
                Our customers are at the heart of everything we do. We strive to provide exceptional service and create clothing that makes you feel confident and stylish.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section">
        <h2 className="section-title">Meet Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              name: "Jane Smith",
              role: "Founder & Creative Director",
              image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2787&auto=format&fit=crop"
            },
            {
              name: "David Chen",
              role: "Head of Design",
              image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2787&auto=format&fit=crop"
            },
            {
              name: "Sarah Johnson",
              role: "Marketing Director",
              image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=2961&auto=format&fit=crop"
            }
          ].map((member, index) => (
            <div key={index} className="glass rounded-xl overflow-hidden">
              <img 
                src={member.image} 
                alt={member.name} 
                className="w-full h-80 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience Elite Exclusive Apparels</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Discover our collections and experience the perfect blend of style, comfort, and quality craftsmanship.
          </p>
          <a href="/mens-collection" className="bg-white text-black px-8 py-3 rounded-md font-medium inline-block hover:bg-gray-200 transition-colors mr-4">
            Shop Men's Collection
          </a>
          <a href="/womens-collection" className="border border-white text-white px-8 py-3 rounded-md font-medium inline-block hover:bg-white/10 transition-colors">
            Shop Women's Collection
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;
