export default function ProductionSystemPage() {
    return (
        <div className="container-width py-24 max-w-4xl mx-auto">
            <header className="mb-8">
                <h1 className="text-4xl font-bold mb-4 text-[#1A1A1A]">Production Systems</h1>
                <p className="text-xl text-gray-600">
                    The foundation: consistent, high-calorie food output.
                </p>
            </header>

            <div className="prose prose-lg text-gray-800 max-w-none mb-12">
                <p>
                    Without calories, nothing else matters. Understanding production means mastering the specific crops that provide the highest return on investment (ROI) for your labor and space.
                </p>
                <h3>Core Components</h3>
                <ul>
                    <li><strong>High-Calorie Staples:</strong> Corn, potatoes, beans, squash. The "Three Sisters" + heavy starchy roots.</li>
                    <li><strong>Soil Fertility:</strong> Composting, worm farming, and cover cropping to maintain output without chemical inputs.</li>
                    <li><strong>Maximizing Yield:</strong> Biointensive planting methods that produce 2-3x more food per square foot.</li>
                </ul>
            </div>

            <div className="bg-green-50 rounded-xl p-8 border border-green-100">
                <h3 className="text-xl font-bold text-green-800 mb-2">Recommended Reading</h3>
                <p className="mb-4 text-green-700">Deep dive into calorie production:</p>
                <a href="/books/survival-planting-101" className="btn-primary inline-flex items-center">
                    Get 'Survival Planting 101'
                </a>
            </div>
        </div>
    );
}
