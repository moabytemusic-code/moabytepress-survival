import Link from 'next/link';
import CTAForm from '@/components/CTAForm';

export default function FreePage() {
    return (
        <div className="bg-[#1A1A1A] text-white py-20 min-h-screen">
            <div className="container-width max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <span className="text-[#98B886] font-bold tracking-widest text-sm uppercase mb-2 block">Available for Immediate Download</span>
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight !text-white text-white">
                        The 30-Day Survival Food <br /> <span className="text-[#98B886] border-b-4 border-[#3F5234]">Starter Blueprint</span>
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

                {/* RSS Overview Section */}
                <div className="mt-24 pt-20 border-t border-white/10">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div className="space-y-6">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#98B886]/10 text-[#98B886] text-xs font-bold uppercase tracking-wider">
                                System Spotlight
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold">The Regenerative <br /> Seed System™ Overview</h2>
                            <p className="text-gray-400 text-lg leading-relaxed">
                                True food independence is impossible if you have to buy seeds every spring. The RSS framework is our field-tested method for creating a closed-loop food system through intentional seed selection.
                            </p>
                            <ul className="space-y-3">
                                <li className="flex items-center gap-2 text-sm text-gray-300">
                                    <span className="text-[#98B886]">✔</span> Regional adaptation for local resilience
                                </li>
                                <li className="flex items-center gap-2 text-sm text-gray-300">
                                    <span className="text-[#98B886]">✔</span> Purity maintenance in high-density gardens
                                </li>
                                <li className="flex items-center gap-2 text-sm text-gray-300">
                                    <span className="text-[#98B886]">✔</span> Long-term storage viability protocols
                                </li>
                            </ul>
                            <div className="pt-4">
                                <Link href="/rss-planner" className="btn-secondary text-[#98B886] border-[#98B886]/20 hover:bg-[#98B886]/10">
                                    Download the RSS Implementation Planner &rarr;
                                </Link>
                            </div>
                        </div>
                        <div className="bg-[#2A2A2A] rounded-2xl border border-white/5 p-8 flex flex-col items-center justify-center text-center aspect-video relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-[#98B886]/5 to-transparent z-0" />
                            <div className="w-16 h-16 bg-[#98B886]/10 rounded-full flex items-center justify-center mb-4 relative z-10 border border-[#98B886]/20">
                                <span className="text-2xl font-bold text-[#98B886]">RSS</span>
                            </div>
                            <h4 className="font-bold mb-2 relative z-10">Cycle Diagram Preview</h4>
                            <p className="text-xs text-gray-500 relative z-10">Visualizing the flow from Harvest &rarr; Selection &rarr; Storage &rarr; Planting</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
