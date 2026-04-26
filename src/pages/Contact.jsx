import React from 'react';

const Contact = () => {
  return (
    <div className="bg-white min-h-screen pt-20 pb-32 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-serif font-bold text-primary-dark mb-8">
          Get in <span className="text-olive-green italic">Touch</span>
        </h1>
        <p className="text-gray-600 text-lg leading-relaxed mb-12">
          Ready to optimize your health? Reach out to our team of specialists today.
        </p>
        
        <div className="bg-gray-50 p-10 rounded-3xl border border-gray-100 text-left mt-12">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-primary-dark uppercase tracking-widest mb-2">Full Name</label>
                <input type="text" className="w-full p-4 rounded-xl border border-gray-200 focus:border-olive-green focus:ring-1 focus:ring-olive-green outline-none transition-all" placeholder="John Doe" />
              </div>
              <div>
                <label className="block text-sm font-bold text-primary-dark uppercase tracking-widest mb-2">Email Address</label>
                <input type="email" className="w-full p-4 rounded-xl border border-gray-200 focus:border-olive-green focus:ring-1 focus:ring-olive-green outline-none transition-all" placeholder="john@example.com" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-bold text-primary-dark uppercase tracking-widest mb-2">Message</label>
              <textarea rows="5" className="w-full p-4 rounded-xl border border-gray-200 focus:border-olive-green focus:ring-1 focus:ring-olive-green outline-none transition-all" placeholder="How can we help you?"></textarea>
            </div>
            <button className="w-full py-5 bg-olive-green text-white font-bold rounded-xl hover:bg-primary-dark transition-all duration-300 uppercase tracking-widest">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
