export default function FAQs(){
    return(
        <div className="m-10">
            <h1 className="my-4 text-3xl">Frequently Asked Questions</h1>
            <p className="text-lg">Welcome to our FAQ section! Here, we address the most common questions and concerns about our services. If you have any other questions, feel free to reach out to us.</p>
            <div className="mt-10">
                <h2 className="text-2xl font-semibold text-gold-600 mb-4">General Questions</h2>
                <ul className="list-disc list-inside space-y-4">
                    <li><strong>What is DataGoats Store?</strong> DataGoats Store is your one-stop online shop for a wide range of products with transparent shipping costs.</li>
                    <li><strong>How does shipping work?</strong> We provide real-time shipping rates from top carriers worldwide, ensuring you know the total cost upfront.</li>
                    <li><strong>Can I track my order?</strong> Yes! You will receive email updates from dispatch to delivery.</li>
                </ul>
            </div>
        </div>
    );
}