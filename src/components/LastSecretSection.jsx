import React from 'react';

const LastSecretSection = () => {
  return (
    <section className="bg-gray-100 text-gray-800 py-16 px-5">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h3 className="text-2xl font-medium mb-2">After 20+ Years Online,</h3>
          <h3 className="text-2xl font-medium mb-2">I'm Finally Ready To Reveal To You</h3>
          <h2 className="text-4xl font-extrabold uppercase text-black mb-6">THE LAST SECRET</h2>

          <div className="flex justify-center items-center gap-4 text-lg font-semibold mb-6">
            <span>From: Russell Brunson</span>
            <span>Boise, Idaho</span>
          </div>
        </div>

        {/* Content Texts */}
        <p className="text-lg leading-relaxed mb-6 max-w-4xl mx-auto">
          I've been doing this a LONG time now... <strong className="font-bold">over 20+ years I've been helping entrepreneurs to start and grow their companies online.</strong>
        </p>

        <p className="text-lg leading-relaxed mb-6 max-w-4xl mx-auto">
          I've become kinda 'famous' as the guy who reveals the actual <strong className="font-bold">SECRETS</strong> to having success online.
        </p>

        <p className="text-lg leading-relaxed mb-6 max-w-4xl mx-auto">
          In fact, here are a few of the <strong className="font-bold">BIGGEST</strong> <strong className="font-bold">secrets</strong> that I've revealed over the last decade:
        </p>
      </div>
    </section>
  );
};

export default LastSecretSection;
