import React from 'react';

export default function CompanyPage() {
    return (
        <>
            <div className="m-10">
                <h1 className="my-4 text-3xl">Welcome to DataGoats Store: Your online shop with worldwide shipping</h1>
                <p className="text-lg">At DataGoats Store, we understand how important it is to shop without surprises. We know that in a globalized world, having access to quality products is only half of the process. What truly makes a difference is knowing, from the start, how much the shipping will cost and when your order will arrive. That’s why we specialize in providing you with a clear and uncertainty-free shopping experience.</p>
            </div>

            <section className="mt-10 bg-white rounded-2xl shadow p-8">
        <h2 className="text-2xl font-semibold text-gold-600 text-center mb-8">The Problem & Our Solution</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-gold-600 mb-4">The Problem</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li><strong>Hidden Fees:</strong> Unexpected costs appear at checkout, discouraging purchases.</li>
              <li><strong>Cart Abandonment:</strong> Shoppers leave due to lack of cost transparency.</li>
              <li><strong>Missed Opportunities:</strong> Sellers lose international customers who fear surprise charges.</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gold-600 mb-4">Our Solution</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li><strong>Transparent Pricing:</strong> Show total cost upfront, including shipping, taxes, and duties.</li>
              <li><strong>Instant Calculations:</strong> Real-time quotes for any global destination.</li>
              <li><strong>Simplified Experience:</strong> One-page checkout with no surprises.</li>
            </ul>
          </div>
        </div>
      </section>

       <section className="mt-10">
        <h2 className="text-2xl font-semibold text-gold-600 text-center mb-6">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Live Shipping Rates",
              desc: "Real-time pricing from top carriers worldwide."
            },
            {
              title: "Duties & Taxes Calculated",
              desc: "Know all fees before you pay."
            },
            {
              title: "Multi-Carrier Comparison",
              desc: "Pick the best delivery option for you."
            },
            {
              title: "One-Page Checkout",
              desc: "No distractions, just a smooth purchase experience."
            },
            {
              title: "Email Tracking Updates",
              desc: "Stay updated from dispatch to delivery."
            },
            {
              title: "Global Coverage",
              desc: "We deliver to every corner of the world."
            }
          ].map((feature, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow hover:shadow-lg transition duration-200">
              <h3 className="text-xl font-semibold text-gold-600 mb-2">{feature.title}</h3>
              <p className="text-gray-700">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>
        </>
    )
}