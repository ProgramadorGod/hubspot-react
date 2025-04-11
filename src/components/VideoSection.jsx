import React, { useState } from 'react';

const VideoSection = () => {
  const [isMuted, setIsMuted] = useState(true);

  const toggleSound = () => {
    setIsMuted(!isMuted);
  };

  return (
    <section className="bg-white py-6">
      <div className="container mx-auto px-4">
        <div className="relative aspect-video max-w-4xl mx-auto">
          {/* Video thumbnail */}
          <div className="relative rounded-lg overflow-hidden shadow-xl">
            <img
              src="https://ext.same-assets.com/448933279/1847180697.jpeg"
              alt="Video Thumbnail"
              className="w-full h-auto"
            />

            {/* Play button overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <button
                className="bg-black bg-opacity-50 hover:bg-opacity-70 rounded-full w-20 h-20 flex items-center justify-center transition-all"
                aria-label="Play video"
              >
                <svg width="30" height="30" viewBox="0 0 24 24" fill="white">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>
            </div>
          </div>

          {/* Sound toggle */}
          <div className="absolute bottom-4 right-4 flex items-center bg-black bg-opacity-70 text-white px-4 py-2 rounded">
            <button onClick={toggleSound} className="flex items-center">
              <img
                src="https://ext.same-assets.com/448933279/2211193377.svg"
                alt="Sound"
                className="w-5 h-5 mr-2"
              />
              <span className="text-sm">Enable sound</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
