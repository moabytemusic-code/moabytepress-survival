import CTAForm from '@/components/CTAForm';

export default function FreePage() {
    return (
        <div className="bg-[#1A1A1A] text-white py-20 min-h-screen">
            <div className="container-width max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <span className="text-[#98B886] font-bold tracking-widest text-sm uppercase mb-2 block">Available for Immediate Download</span>
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
                        The 30-Day Survival Food <br /> <span className="text-white border-b-4 border-[#3F5234]">Starter Blueprint</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Stop guessing. Start growing calories. A tactical checklist to secure your food supply in one month.
                    </p>
                </div>

                <div className="bg-white text-gray-900 rounded-2xl shadow-2xl overflow-hidden grid md:grid-cols-2">
                    <div className="p-8 md:p-12 space-y-8 bg-gray-50">
                        <h3 className="text-2xl font-bold mb-4 text-[#1A1A1A]">What's Inside:</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <span className="text-[#3F5234] font-bold mr-3 text-lg">01.</span>
                                <div>
                                    <strong className="block text-[#1A1A1A]">The Calorie Priority List</strong>
                                    <span className="text-gray-600 text-sm">Why 90% of garden vegetables are useless for survival, and what to plant instead.</span>
                                </div>
                            </li>
                            <li className="flex items-start">
                                <span className="text-[#3F5234] font-bold mr-3 text-lg">02.</span>
                                <div>
                                    <strong className="block text-[#1A1A1A]">Small-Space Yield Strategy</strong>
                                    <span className="text-gray-600 text-sm">How to produce meaningful calories on a patio or small yard.</span>
                                </div>
                            </li>
                            <li className="flex items-start">
                                <span className="text-[#3F5234] font-bold mr-3 text-lg">03.</span>
                                <div>
                                    <strong className="block text-[#1A1A1A]">Week-by-Week Checklist</strong>
                                    <span className="text-gray-600 text-sm">Exact steps for Week 1 through Week 4. No confusion.</span>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div className="p-8 md:p-12 flex flex-col justify-center bg-white border-l border-gray-100">
                        <h3 className="text-2xl font-bold mb-2 text-center">Get Your Copy</h3>
                        <p className="text-center text-gray-500 mb-8 text-sm">Enter your email below. We'll send the PDF instantly.</p>
                        <CTAForm className="w-full" source="landing_page_main" />
                    </div>
                </div>
            </div>
        </div>
    );
}
