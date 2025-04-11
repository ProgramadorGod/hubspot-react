import React from 'react';

const Header = () => {
  return (
    <header className="bg-[#021131] py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="flex items-center">
          <div className="text-white text-sm mr-4">
            <p className="font-bold">FUNNEL HACKING LIVE EXCLUSIVE OFFER</p>
          </div>
        </div>
        <div>
          <a
            href="#checkout"
            className="text-white bg-[#006aff] px-6 py-2 rounded font-bold text-sm hover:bg-blue-600 transition-all"
          >
            LOGIN
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
