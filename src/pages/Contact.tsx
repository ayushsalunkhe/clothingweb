import { Clock, Mail, MapPin, Phone, Send } from 'lucide-react';

const Contact = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="max-w-xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-lg text-gray-600">
              We'd love to hear from you. Get in touch with our team for any questions, feedback, or inquiries.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>
            <p className="text-gray-600 mb-8">
              Have questions about our products or need assistance with your order? Our customer support team is here to help.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-black text-white p-3 rounded-full mr-4">
                  <MapPin size={20} />
                </div>
                <div>
                  <h3 className="font-medium mb-1">Our Location</h3>
                  <p className="text-gray-600">123 Fashion Street, City, Country</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-black text-white p-3 rounded-full mr-4">
                  <Phone size={20} />
                </div>
                <div>
                  <h3 className="font-medium mb-1">Phone Number</h3>
                  <p className="text-gray-600">+1 (123) 456-7890</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-black text-white p-3 rounded-full mr-4">
                  <Mail size={20} />
                </div>
                <div>
                  <h3 className="font-medium mb-1">Email Address</h3>
                  <p className="text-gray-600">info@elitexclusiveapparels.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-black text-white p-3 rounded-full mr-4">
                  <Clock size={20} />
                </div>
                <div>
                  <h3 className="font-medium mb-1">Working Hours</h3>
                  <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p className="text-gray-600">Saturday: 10:00 AM - 4:00 PM</p>
                  <p className="text-gray-600">Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="glass p-8 rounded-xl">
            <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
            <form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black/50"
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black/50"
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black/50"
                  placeholder="How can we help you?"
                  required
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black/50"
                  placeholder="Your message here..."
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full btn-primary flex justify-center items-center"
              >
                Send Message
                <Send size={16} className="ml-2" />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section">
        <h2 className="section-title">Our Location</h2>
        <div className="glass rounded-xl overflow-hidden h-[400px]">
          {/* This would be replaced with an actual map component in a real implementation */}
          <div className="h-full w-full bg-gray-200 flex items-center justify-center">
            <div className="text-center">
              <MapPin size={40} className="mx-auto mb-4 text-gray-400" />
              <p className="text-gray-500">Map would be displayed here</p>
              <p className="text-gray-400 text-sm mt-2">123 Fashion Street, City, Country</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {[
                {
                  question: "What are your shipping options?",
                  answer: "We offer standard shipping (5-7 business days), express shipping (2-3 business days), and next-day delivery options. Shipping costs vary based on your location and chosen delivery method."
                },
                {
                  question: "How can I track my order?",
                  answer: "Once your order ships, you'll receive a confirmation email with a tracking number. You can use this number to track your package on our website or directly with the shipping carrier."
                },
                {
                  question: "What is your return policy?",
                  answer: "We accept returns within 30 days of purchase. Items must be unworn, unwashed, and with original tags attached. Please contact our customer service team to initiate a return."
                },
                {
                  question: "Do you ship internationally?",
                  answer: "Yes, we ship to most countries worldwide. International shipping typically takes 7-14 business days depending on the destination. Custom fees and import taxes may apply."
                },
              ].map((faq, index) => (
                <div key={index} className="glass p-6 rounded-xl">
                  <h3 className="text-lg font-medium mb-2">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-black text-white py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Connected</h2>
          <p className="text-gray-300 mb-8 max-w-xl mx-auto">
            Subscribe to our newsletter for updates on new collections, exclusive offers, and fashion tips.
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

export default Contact;
