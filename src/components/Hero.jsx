import React from 'react';

const Hero = () => {
  return (
    <section className="bg-white py-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <img
            src="https://images.clickfunnels.com/cdn-cgi/image/width=1000px,fit=scale-down,f=auto,q=80/https://statics.myclickfunnels.com/workspace/Yjxavr/image/6702011/file/3c03c104bf42d32666c6da52eb2caf4b.png"
            alt="Get Started Now"
            className="mx-auto max-w-full h-auto"
          />
        </div>

        <div className="text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#021131] mb-4">
            I SPENT $40+ MILLION DOLLARS
          </h1>

          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4">
              <span className="font-bold">To Acquire A Software Company...</span>
            </h2>

            <h3 className="text-xl md:text-2xl font-medium mb-6">
              And I Want To White Label It To You <span className="font-bold">FOR FREE,</span> <span className="font-bold">(The Funnels, The Software, The Sales Letters, The Upsells And MORE)</span>
            </h3>

            <p className="text-lg md:text-xl mb-8">
              So You Can Launch Your Own 'SAAS' And Keep 100% Of The Sales... In Less Than 48 Hours From RIGHT NOW!!!
            </p>
          </div>

          <div className="mb-10">
            <h3 className="text-xl md:text-2xl font-semibold mb-2">
              Watch The Video Below For More Details
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
