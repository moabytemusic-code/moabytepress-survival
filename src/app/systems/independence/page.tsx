export default function IndependenceSystemPage() {
    return (
        <div className="container-width py-24 max-w-4xl mx-auto">
            <header className="mb-8">
                <h1 className="text-4xl font-bold mb-4 text-[#1A1A1A]">Independence Systems</h1>
                <p className="text-xl text-gray-600">
                    True off-grid capability: low-tech, manual, reliable.
                </p>
            </header>

            <div className="prose prose-lg text-gray-800 max-w-none mb-12">
                <p>
                    Modern agriculture relies on electricity, pumps, and fuel. Independence systems remove these dependencies, ensuring you can produce food in a complete grid-down scenario.
                </p>
                <h3>Core Components</h3>
                <ul>
                    <li><strong>Manual Water Moving:</strong> Hand pumps, gravity feed, and swale hydration.</li>
                    <li><strong>Tool Independence:</strong> Creating, repairing, and maintaining manual tools.</li>
                    <li><strong>Urban Security:</strong> Stealth growing (guerilla gardening) and concealment strategies for city dwellers.</li>
                </ul>
            </div>

            <div className="bg-amber-50 rounded-xl p-8 border border-amber-100">
                <h3 className="text-xl font-bold text-amber-800 mb-2">Essential Reading</h3>
                <p className="mb-4 text-amber-700">Secure your yield in tight spaces:</p>
                <a href="/books/survival-vertical-gardening" className="btn-secondary inline-flex items-center text-sm">
                    Check out 'Survival Vertical Gardening'
                </a>
            </div>
        </div>
    );
}
