export default function FAQs() {
    return (

        <section className="mt-16 bg-white rounded-2xl shadow p-10">
            <h2 className="text-3xl font-bold text-gold-600 text-center mb-8">Frequently Asked Questions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-2">
                {[
                    {
                        question: "How does DataGoats calculate international shipping?",
                        answer:
                            "We use real-time APIs from major shipping carriers to calculate exact shipping rates, including customs duties and taxes based on your destination."
                    },
                    {
                        question: "Do I need to pay customs duties separately?",
                        answer:
                            "No. All applicable duties and taxes are included in the final price at checkout so you don’t have to deal with surprise fees at delivery."
                    },
                    {
                        question: "Which countries do you ship to?",
                        answer:
                            "We ship worldwide! From North America to Asia, Africa, Europe, and beyond. If your country supports international delivery, we’ve got you covered."
                    },
                    {
                        question: "What payment methods do you accept?",
                        answer:
                            "We accept major credit/debit cards, PayPal, and international digital wallets. All transactions are encrypted for security."
                    },
                    {
                        question: "How long does shipping usually take?",
                        answer:
                            "Delivery time varies by destination and carrier. Most orders arrive within 5–10 business days. Exact estimates are shown during checkout."
                    },
                    {
                        question: "Can I track my order?",
                        answer:
                            "Yes! Once your order ships, you’ll receive a tracking number and updates via email, so you can follow your package every step of the way."
                    }
                ].map((item, idx) => (
                    <div key={idx} className="border-b mx-2 pb-4">
                        <h3 className="text-lg font-semibold text-gold-600 mb-2">{item.question}</h3>
                        <p className="text-gray-700">{item.answer}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}