export default function AboutUs() {
    return (
        <>
            <section className="mt-16 bg-white rounded-2xl shadow p-10">
                <h2 className="text-3xl font-bold text-gold-600 text-center mb-6">About Us</h2>
                <p className="text-gray-700 text-lg text-center max-w-3xl mx-auto mb-10">
                    At DataGoats Store, we’re reimagining the way the world shops across borders. Our mission is simple:
                    to make global commerce seamless, transparent, and accessible to everyone—no matter where you live.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-md transition">
                        <h3 className="text-xl font-semibold text-gold-600 mb-2">🌍 Global Vision</h3>
                        <p className="text-gray-700">
                            We believe location should never limit access to great products. That’s why we ship to every country—efficiently and transparently.
                        </p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-md transition">
                        <h3 className="text-xl font-semibold text-gold-600 mb-2">🔍 Total Transparency</h3>
                        <p className="text-gray-700">
                            Our platform calculates real-time international shipping costs, taxes, and duties upfront—so you always know what you´re paying.
                        </p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-md transition">
                        <h3 className="text-xl font-semibold text-gold-600 mb-2">🚀 Fast & Simple</h3>
                        <p className="text-gray-700">
                            One-page checkout, trusted carriers, and full tracking from start to finish. Cross-border shopping has never been easier.
                        </p>
                    </div>
                </div>

                <div className="text-center mt-12">
                    <h4 className="text-xl font-semibold text-gold-600 mb-2">We´re just getting started.</h4>
                    <p className="text-gray-700 max-w-2xl mx-auto mb-6">
                        Join the DataGoats community and help us shape the future of international ecommerce.
                    </p>
                    <button className="bg-gold-500 hover:bg-gold-600 font-semibold py-2 px-6 rounded-xl transition duration-200">
                        Join Us Today
                    </button>
                </div>
            </section>
        </>
    );
}