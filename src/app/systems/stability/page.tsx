export default function StabilitySystemPage() {
    return (
        <div className="container-width py-24 max-w-4xl mx-auto">
            <header className="mb-8">
                <h1 className="text-4xl font-bold mb-4 text-[#1A1A1A]">Stability Systems</h1>
                <p className="text-xl text-gray-600">
                    Closing the loop: resilience against supply chain failure.
                </p>
            </header>

            <div className="prose prose-lg text-gray-800 max-w-none mb-12">
                <p>
                    Stability is what separates a survival garden from a hobby garden. If you can't save seed, you're dependent. If you can't preserve the harvest, you'll be hungry in winter.
                </p>
                <h3>Core Components</h3>
                <ul>
                    <li><strong>Seed Saving:</strong> Selecting, harvesting, and storing open-pollinated seeds for next season.</li>
                    <li><strong>Water Resilience:</strong> Catchment, storage, and efficient usage (drip/olla) to survive droughts.</li>
                    <li><strong>Preservation:</strong> Canning, drying, fermenting, and root cellaring to mitigate spoilage.</li>
                </ul>
            </div>

            <div className="bg-blue-50 rounded-xl p-8 border border-blue-100">
                <h3 className="text-xl font-bold text-blue-800 mb-2">Coming Soon</h3>
                <p className="mb-4 text-blue-700">Detailed guide on Seed Saving and Water Systems is in development.</p>
                <a href="/api/subscribe" className="text-blue-700 underline font-medium">
                    Join the waitlist
                </a>
            </div>
        </div>
    );
}
