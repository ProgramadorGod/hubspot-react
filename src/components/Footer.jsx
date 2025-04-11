import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 text-center">
      <div className="container mx-auto px-4">
        <p className="text-sm text-gray-400 mb-2">&copy; {new Date().getFullYear()} Launch Your SAAS. All rights reserved.</p>
        <div className="flex justify-center gap-6 mt-4">
          <a href="/privacy" className="text-sm text-gray-400 hover:text-white">Privacy Policy</a>
          <a href="/terms" className="text-sm text-gray-400 hover:text-white">Terms of Service</a>
          <a href="/contact" className="text-sm text-gray-400 hover:text-white">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
