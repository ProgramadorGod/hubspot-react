import React from 'react';

const steps = [
  {
    id: 1,
    title: "STEP #1",
    description:
      "I'm going to GIVE you a license to sell 5 of my best selling products (with their funnels, upsells, membership sites, email sequences and more!!!) and let you keep 100% of the sales you make!!!",
  },
  {
    id: 2,
    title: "STEP #2",
    description:
      "After You License / White Label These 5 Products, then I'll hold you by the hand over the next 30 days to set up these products, their funnels, and get them launched and LIVE!!!",
  },
  {
    id: 3,
    title: "STEP #3",
    description:
      "How To Attract Customers To Your Funnels! After you have the tools (i.e., ClickFunnels)... and the products (i.e., white label products above)... then comes the NEXT IMPORTANT part – TRAFFIC!",
  },
];

const StepsSection = () => {
  return (
    <section className="relative overflow-hidden bg-[#0d1f33] text-white py-20 px-5">
      {/* Gradiente superior */}
      <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-red-600 to-orange-500" />

      <div className="max-w-6xl mx-auto text-center">
        {/* Título */}
        <h2 className="text-4xl font-extrabold uppercase mb-12 relative inline-block">
          Let Me Show You How This Will Work...
          <span className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-red-600"></span>
        </h2>

        {/* Tarjetas */}
        <div className="flex flex-wrap justify-center gap-10 mt-12">
          {steps.map((step) => (
            <div
              key={step.id}
              className="flex-1 min-w-[300px] max-w-[350px] bg-white/5 border border-white/10 p-8 rounded-xl transition-all duration-300 hover:-translate-y-2 hover:bg-white/10 hover:shadow-xl"
            >
              <div className="w-14 h-14 rounded-full bg-red-600 text-white flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                {step.id}
              </div>
              <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
              <p className="text-white/80 leading-relaxed text-base">{step.description}</p>
            </div>
          ))}
        </div>

        {/* Descripción final */}
        <p className="text-lg text-white/90 mt-12 max-w-3xl mx-auto leading-relaxed">
          This license will allow you to white label (AKA, add in your own branding) to each of these products
        </p>
      </div>
    </section>
  );
};

export default StepsSection;
