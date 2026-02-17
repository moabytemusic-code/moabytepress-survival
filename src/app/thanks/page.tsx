export default function ThanksPage() {
    const downloadUrl = process.env.LEADMAGNET_DOWNLOAD_URL || '/documents/survival-food-blueprint.pdf';

    return (
        <div className="bg-[#Fdfbf7] min-h-screen py-32 flex flex-col items-center justify-center text-center">
            <div className="container-width max-w-2xl bg-white p-12 rounded-2xl shadow-xl border border-gray-100">
                <div className="w-16 h-16 bg-green-100 text-green-700 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl">
                    ✓
                </div>
                <h1 className="text-4xl font-bold mb-4 text-[#1A1A1A]">Check Your Inbox</h1>
                <p className="text-gray-600 text-lg mb-8">
                    The <strong>30-Day Survival Food Starter Blueprint</strong> is on its way to your email.
                </p>

                <div className="space-y-4">
                    <a
                        href={downloadUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full btn-primary text-center block max-w-xs mx-auto text-lg py-4"
                    >
                        Direct Download (PDF)
                    </a>
                    <p className="text-sm text-gray-400">Can't wait? Click above for immediate access.</p>
                </div>

                <div className="mt-12 pt-8 border-t border-gray-100">
                    <p className="font-semibold text-gray-800 mb-4">Start Growing Real Calories Today</p>
                    <p className="text-gray-500 mb-6 text-sm">Now that you have the plan, you need the tactical knowledge to execute.</p>
                    <a href="/books" className="text-[#3F5234] font-bold hover:underline">
                        Browse the Survival Library &rarr;
                    </a>
                </div>
            </div>
        </div>
    );
}
