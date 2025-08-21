import React from 'react';

const ContactForm = () => (
  <section id="contact" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 to-black">
    <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-xl w-full max-w-md">
      <h2 className="text-3xl font-light mb-4">Contact</h2>
      <form className="space-y-4">
        <input className="w-full p-2 bg-black/50 border border-white/20 rounded focus:outline-none" placeholder="Name" />
        <input className="w-full p-2 bg-black/50 border border-white/20 rounded focus:outline-none" placeholder="Email" />
        <textarea className="w-full p-2 bg-black/50 border border-white/20 rounded focus:outline-none" placeholder="Message" />
        <button type="submit" className="w-full py-2 bg-blue-600 hover:bg-blue-500 rounded transition-colors">Send</button>
      </form>
    </div>
  </section>
);

export default ContactForm;
