import React from 'react';

const JoinSection = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join 'The Last Secret' For FREE With Your ClickFunnels Trial!
          </h2>

          <h3 className="text-2xl md:text-3xl font-bold mb-8">
            Unlock Access To 'The Last Secret' For $0.00 Today!
          </h3>

          <div className="flex flex-col md:flex-row justify-center gap-4">
            <a
              href="/check-account"
              className="bg-[#f1f1f1] text-[#333] px-8 py-4 rounded-md font-bold text-lg border-2 border-[#ddd] hover:bg-[#e5e5e5] transition-all"
            >
              I'm A ClickFunnels Member
            </a>

            <a
              href="#checkout"
              className="bg-[#006aff] text-white px-8 py-4 rounded-md font-bold text-lg hover:bg-blue-700 transition-all"
            >
              Start My ClickFunnels Trial
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinSection;
