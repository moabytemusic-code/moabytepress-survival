import Link from 'next/link';
import Image from 'next/image';
import { Download, CheckCircle2, Sprout, Calendar, Database, Map } from 'lucide-react';
import CTAForm from '@/components/CTAForm';

export const metadata = {
    title: 'RSS Planner | Regenerative Seed System™ Toolkit',
    description: 'Download the official Regenerative Seed System™ Planner. Includes worksheets for seed harvesting, tracking, and viability management.',
};

export default function RSSPlannerPage() {
    return (
        <div className="bg-[#Fdfbf7] min-h-screen">
            {/* Hero Section */}
            <section className="py-20 bg-[#242B1F] text-white">
                <div className="container-width max-w-4xl text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#B4D6A2]/20 text-[#B4D6A2] text-xs font-bold uppercase tracking-wider mb-6">
                        Free Resource
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Regenerative Seed System™ <br /> <span className="text-[#B4D6A2]">Implementation Planner</span></h1>
                    <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                        Stop guessing and start tracking. The RSS Planner is a 12-page professional toolkit designed to help you transition from a hobby gardener to a resilient seed saver.
                    </p>
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 max-w-xl mx-auto">
                        <CTAForm source="rss_planner_page" />
                        <p className="text-xs text-gray-400 mt-4 italic">
                            Instant Access: Digital PDF download delivered to your inbox.
                        </p>
                    </div>
                </div>
            </section>

            {/* What's Inside Section */}
            <section className="py-24">
                <div className="container-width max-w-5xl">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <div>
                                <h2 className="text-3xl font-bold text-[#1A1A1A] mb-4">Master the RSS Framework</h2>
                                <p className="text-gray-600 leading-relaxed">
                                    The Regenerative Seed System™ isn't just about saving seeds—it's about intentional selection for long-term survival. This planner provides the structured worksheets required to manage your garden's genetics without a degree in botany.
                                </p>
                            </div>

                            <ul className="space-y-6">
                                <li className="flex gap-4">
                                    <div className="flex-shrink-0 w-12 h-12 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center justify-center text-[#3F5234]">
                                        <Calendar className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Seed Harvest Calendar</h4>
                                        <p className="text-sm text-gray-500">Know exactly when to harvest for maximum viability across all major calorie crops.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <div className="flex-shrink-0 w-12 h-12 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center justify-center text-[#3F5234]">
                                        <Sprout className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Variety Performance Tracker</h4>
                                        <p className="text-sm text-gray-500">Record which heirloom varieties thrived in your specific microclimate and soil conditions.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <div className="flex-shrink-0 w-12 h-12 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center justify-center text-[#3F5234]">
                                        <Map className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Genetic Diversity Map</h4>
                                        <p className="text-sm text-gray-500">A visual tool to plan your garden layout to prevent cross-pollination and maintain purity.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <div className="flex-shrink-0 w-12 h-12 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center justify-center text-[#3F5234]">
                                        <Database className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">Storage Viability Log</h4>
                                        <p className="text-sm text-gray-500">Keep inventory of your seed bank with precise germination test records and expiration dates.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className="relative">
                            <div className="aspect-[3/4] bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden p-1">
                                <div className="w-full h-full bg-[#F3F1ED] rounded-xl flex items-center justify-center border border-gray-200 border-dashed relative">
                                    <Download className="w-12 h-12 text-gray-300 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                                    <div className="absolute inset-0 flex flex-col items-center justify-end pb-12 px-8 text-center">
                                        <span className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Planner Preview</span>
                                        <h3 className="text-xl font-bold text-gray-900">12 Printable Worksheets <br />& Implementation Guide</h3>
                                    </div>
                                </div>
                            </div>
                            {/* Decorative element */}
                            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#B4D6A2]/20 rounded-full blur-2xl -z-10" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Implementation Section */}
            <section className="py-20 bg-white">
                <div className="container-width max-w-3xl border-t border-gray-100 pt-20">
                    <h3 className="text-2xl font-bold text-center mb-12">The 3 Pillars of Seed Resilience</h3>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <h4 className="font-bold text-gray-900 mb-2">1. Purity</h4>
                            <p className="text-sm text-gray-500 leading-relaxed">Maintaining the genetic integrity of your heirloom varieties.</p>
                        </div>
                        <div className="text-center">
                            <h4 className="font-bold text-gray-900 mb-2">2. Selection</h4>
                            <p className="text-sm text-gray-500 leading-relaxed">Culling the weak and saving only the most resilient performers.</p>
                        </div>
                        <div className="text-center">
                            <h4 className="font-bold text-gray-900 mb-2">3. Rotation</h4>
                            <p className="text-sm text-gray-500 leading-relaxed">Regularly refreshing your seed stock to ensure germination when needed.</p>
                        </div>
                    </div>
                    <div className="mt-16 text-center">
                        <Link href="/books/survival-seed-saving" className="text-[#3F5234] font-medium hover:underline flex items-center justify-center gap-1">
                            Learn more in the Survival Seed Saving guide &rarr;
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
