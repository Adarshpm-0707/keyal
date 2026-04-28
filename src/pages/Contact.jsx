import React from 'react';

const Contact = () => {
  return (
    <div className="bg-white min-h-screen pt-48 pb-60 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-32">
          <span className="text-[#4A5D4E] font-black uppercase tracking-[0.6em] text-[10px] mb-8 block">Connect</span>
          <h1 className="text-7xl md:text-9xl font-black text-[#242521] leading-none tracking-tighter mb-12">
            Start Your <br /><span className="text-[#4A5D4E] italic">Evolution.</span>
          </h1>
          <p className="text-[#4A5D4E]/60 text-xl md:text-2xl leading-relaxed max-w-3xl mx-auto font-light">
            Ready to optimize your biology? Our specialists are standing by to guide your precision journey.
          </p>
        </div>
        
        <div className="glass-card p-12 md:p-20 rounded-[80px] border-[#4A5D4E]/5 shadow-2xl">
          <form className="space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-4">
                <label className="block text-[10px] font-black text-[#4A5D4E] uppercase tracking-[0.4em]">Full Name</label>
                <input type="text" className="w-full bg-transparent border-b-2 border-[#4A5D4E]/10 py-6 text-2xl font-light text-[#242521] focus:border-[#4A5D4E] outline-none transition-all placeholder:text-[#4A5D4E]/20" placeholder="Identity" />
              </div>
              <div className="space-y-4">
                <label className="block text-[10px] font-black text-[#4A5D4E] uppercase tracking-[0.4em]">Email Address</label>
                <input type="email" className="w-full bg-transparent border-b-2 border-[#4A5D4E]/10 py-6 text-2xl font-light text-[#242521] focus:border-[#4A5D4E] outline-none transition-all placeholder:text-[#4A5D4E]/20" placeholder="Communication" />
              </div>
            </div>
            <div className="space-y-4">
              <label className="block text-[10px] font-black text-[#4A5D4E] uppercase tracking-[0.4em]">Genetic Inquiry</label>
              <textarea rows="4" className="w-full bg-transparent border-b-2 border-[#4A5D4E]/10 py-6 text-2xl font-light text-[#242521] focus:border-[#4A5D4E] outline-none transition-all placeholder:text-[#4A5D4E]/20 resize-none" placeholder="Your requirements..."></textarea>
            </div>
            <button className="w-full md:w-fit px-20 py-8 bg-[#242521] text-white font-black rounded-full hover:bg-[#4A5D4E] transition-all duration-500 uppercase tracking-widest text-xl shadow-2xl">
              Initiate Contact →
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
