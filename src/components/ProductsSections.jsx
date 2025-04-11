import React from 'react';

const products = [
  {
    title: "Product #1",
    description: "The ultimate funnel to generate leads and convert them into loyal customers.",
  },
  {
    title: "Product #2",
    description: "High-converting membership site ready for launch with full branding access.",
  },
  {
    title: "Product #3",
    description: "Email sequences and automation included to nurture your leads 24/7.",
  },
  {
    title: "Product #4",
    description: "Proven upsell strategies that increase your cart value instantly.",
  },
  {
    title: "Product #5",
    description: "Complete SaaS package with landing pages, integrations, and full support.",
  }
];

const ProductsSection = () => {
  return (
    <section className="bg-[#0d1f33] text-white py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 uppercase">What You’ll Get Access To</h2>
        <p className="text-lg text-gray-300 mb-12">
          Here are the 5 White-Label Products you can launch as your own and keep 100% of the revenue.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div key={index} className="bg-white/10 backdrop-blur p-6 rounded-lg border border-white/10 hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                {index + 1}
              </div>
              <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
              <p className="text-sm text-gray-300">{product.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
