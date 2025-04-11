import React from 'react';

const tasks = [
  "Create a product",
  "Write a sales letter",
  "Create upsell products",
  "Write sales letters for the upsells",
  "Create graphics for the websites",
  "Write the emails",
  "Create the members area",
  "Test the funnel",
  "And on, and on, and on..."
];

const GapSection = () => {
  return (
    <section className="bg-gray-100 py-16 px-5 text-gray-800">
      <div className="max-w-[1000px] mx-auto text-center">
        <h2 className="text-4xl font-extrabold mb-8 text-[#0a1623] uppercase leading-[1.3]">
          But, I've noticed
        </h2>

        <h3 className="text-2xl md:text-[28px] font-bold mb-6 text-gray-600 leading-[1.4]">
          There is a BIG GAP between those who are having success online, and those that have been struggling.
        </h3>

        <p className="text-lg font-semibold leading-relaxed mb-5">
          I see over 2,000+ people EVERY DAY who sign up for a free ClickFunnels trial, 
          with hopes and dreams of launching their online business
        </p>

        <p className="text-lg font-normal leading-relaxed mb-5">
          But unfortunately the majority of them never get a funnel live before their trial 
          is over and they have to start paying their monthly fees
        </p>

        <h3 className="text-2xl md:text-[28px] font-bold mb-6 text-gray-600 leading-[1.4]">
          Not because the software is hard (it's not...)
        </h3>
        <h3 className="text-2xl md:text-[28px] font-bold mb-6 text-gray-600 leading-[1.4]">
          And not because they aren't ambitious (they are)
        </h3>
        <h3 className="text-2xl md:text-[28px] font-bold mb-6 text-gray-600 leading-[1.4]">
          ...and then making their first sale online.
        </h3>

        <h3 className="text-[32px] font-extrabold my-10 text-red-600 uppercase leading-[1.4]">
          Inside of that GAP are all of the other things they need to do, like:
        </h3>

        <div className="text-left max-w-[700px] mx-auto bg-white p-8 rounded-lg shadow-md">
          {tasks.map((task, index) => (
            <div key={index} className="flex items-start mb-4">
              <span className="text-red-600 font-bold text-2xl mr-3 leading-[1]">•</span>
              <p className="text-lg font-semibold leading-snug">{task}</p>
            </div>
          ))}
        </div>

        <p className="text-lg font-normal leading-relaxed mt-8 mb-4">
          It's all of these OTHER steps that people get stuck on, and that's why many 
          people struggle to actually make real money online.
        </p>

        <p className="text-lg font-normal leading-relaxed mb-4">
          But - after someone has all of their products, graphics, copy, etc and that gap is FILLED, 
          then success becomes INFINITELY easier.
        </p>

        <p className="text-lg font-semibold leading-relaxed mt-8 mb-4">
          So, I've been sitting here for the last few months trying to figure out
        </p>

        <h3 className="text-[32px] font-extrabold my-10 text-red-600 uppercase leading-[1.4]">
          HOW CAN I FILL THIS GAP FOR PEOPLE, SO THEY CAN HAVE SUCCESS FASTER!?!
        </h3>
      </div>
    </section>
  );
};

export default GapSection;
